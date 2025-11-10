const MODEL = "gpt-4-turbo";

function parseJsonContent(content) {
  if (!content) {
    throw new Error("Empty response from OpenAI");
  }

  const trimmed = content.trim();
  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      const candidate = trimmed.slice(start, end + 1);
      try {
        return JSON.parse(candidate);
      } catch (innerError) {
        // fall through to throw original error below
      }
    }
    throw new Error(`Failed to parse JSON content: ${trimmed}`);
  }
}

async function callOpenAI({ messages, temperature = 0.6, max_tokens = 600 }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY environment variable");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      temperature,
      max_tokens,
      messages,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  const choice = payload.choices?.[0]?.message?.content;
  if (!choice) {
    throw new Error("No content returned from OpenAI");
  }

  return parseJsonContent(choice);
}

function buildRolePrompt({ role, question, context, weightPercent }) {
  return `You are acting as the ${role.name} for the MAB AI Business Council.\n\n` +
    `Role Description: ${role.description}.\n` +
    `Specialties: ${role.specialties.join(", ")}.\n` +
    `Hierarchy Level: ${role.hierarchy}.\n` +
    `Reasoning Weight: ${role.reasoning} (approx. ${weightPercent}% influence).\n` +
    `Council Category: ${role.category}.\n\n` +
    `Decision Question: ${question}.\n` +
    `Additional Context: ${context || "None provided"}.\n\n` +
    `Respond with a JSON object containing:\n` +
    `- "stance": concise description of your recommendation (e.g., support, caution, revise).\n` +
    `- "summary": 3-4 sentences explaining your reasoning from the perspective of the ${role.name}.\n` +
    `- "riskFlags": array of the top risks or unknowns you want the council to monitor (empty array if none).\n` +
    `Keep your response grounded in your specialties and responsibilities.`;
}

function buildSynthesisPrompt({ question, context, roleOutputs }) {
  const roleDigest = roleOutputs
    .map((output) => {
      const risks = output.riskFlags && output.riskFlags.length
        ? output.riskFlags.join("; ")
        : "None";
      return `Role: ${output.name} | Stance: ${output.stance} | Weight: ${output.weight}% | Summary: ${output.summary} | Risks: ${risks}`;
    })
    .join("\n");

  return `You are the Core Brain/EA for the MAB AI Business Council. Aggregate the council's input and deliver the final decision for the requester.\n\n` +
    `Decision Question: ${question}.\n` +
    `Additional Context: ${context || "None provided"}.\n\n` +
    `Council Deliberation Notes:\n${roleDigest}\n\n` +
    `Return a JSON object with:\n` +
    `- "summary": 4-6 sentences delivering the Core Brain/EA synthesis back to the user.\n` +
    `- "actionPlan": array of 3-5 concrete next steps.\n` +
    `- "returnNote": a single sentence describing how the Core Brain/EA is handing the decision back.\n` +
    `Ensure the synthesis references the most influential perspectives and reconciles conflicting stances.`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { question, context, roles } = body;

    if (!question || !Array.isArray(roles) || roles.length === 0) {
      return res.status(400).json({ error: "Question and at least one role are required" });
    }

    const totalWeight = roles.reduce((sum, role) => sum + (role.reasoning || 0), 0);
    const roleOutputs = await Promise.all(
      roles.map(async (role) => {
        const weightPercent = totalWeight ? Math.round(((role.reasoning || 0) / totalWeight) * 100) : 0;
        const messages = [
          {
            role: "system",
            content:
              "You are a specialized executive contributing to a multi-role business council. Always respond with valid JSON only.",
          },
          {
            role: "user",
            content: buildRolePrompt({ role, question, context, weightPercent }),
          },
        ];

        const response = await callOpenAI({ messages, temperature: 0.65, max_tokens: 500 });
        const stance = response.stance || "undetermined";
        const summary = response.summary || "No summary provided.";
        const riskFlags = Array.isArray(response.riskFlags)
          ? response.riskFlags
          : response.riskFlags
          ? [String(response.riskFlags)]
          : [];

        return {
          roleId: role.id,
          name: role.name,
          weight: weightPercent,
          stance,
          summary,
          riskFlags,
        };
      })
    );

    const synthesisMessages = [
      {
        role: "system",
        content:
          "You are the Core Brain/EA orchestrating the MAB AI Business Council. Respond with valid JSON only.",
      },
      {
        role: "user",
        content: buildSynthesisPrompt({ question, context, roleOutputs }),
      },
    ];

    const coreResponse = await callOpenAI({ messages: synthesisMessages, temperature: 0.5, max_tokens: 600 });

    const summary = coreResponse.summary || "The Core Brain/EA could not synthesize a final answer.";
    const actionPlan = Array.isArray(coreResponse.actionPlan)
      ? coreResponse.actionPlan
      : coreResponse.actionPlan
      ? [String(coreResponse.actionPlan)]
      : [];
    const returnNote = coreResponse.returnNote || "The Core Brain/EA returns the findings to the user.";

    return res.status(200).json({
      roles: roleOutputs,
      coreSynthesis: {
        summary,
        actionPlan,
        returnNote,
      },
    });
  } catch (error) {
    console.error("/api/deliberate error", error);
    return res.status(500).json({ error: error.message || "Failed to run council deliberation" });
  }
}
