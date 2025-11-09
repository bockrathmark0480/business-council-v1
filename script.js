const roleHierarchy = [
  {
    id: "core-brain",
    name: "Core Brain/EA",
    category: "Core Intelligence",
    hierarchy: 0,
    reasoning: 6,
    description:
      "Central orchestration node that routes inquiries, verifies context, and synthesizes the final delivery.",
    specialties: ["workflow", "integrity", "alignment"],
  },
  {
    id: "ceo",
    name: "Chief Executive Officer",
    category: "C-Suite",
    hierarchy: 4,
    reasoning: 9,
    description:
      "Defines enterprise direction, balancing strategic risk with long-term value creation.",
    specialties: ["vision", "market positioning", "governance"],
  },
  {
    id: "cfo",
    name: "Chief Financial Officer",
    category: "C-Suite",
    hierarchy: 4,
    reasoning: 9,
    description:
      "Evaluates fiscal impact, capital allocation, and liquidity guardrails for every scenario.",
    specialties: ["budget", "roi", "risk"],
  },
  {
    id: "coo",
    name: "Chief Operating Officer",
    category: "C-Suite",
    hierarchy: 4,
    reasoning: 8,
    description:
      "Translates decisions into executable operating plans across functions.",
    specialties: ["operations", "enablement", "cadence"],
  },
  {
    id: "cmo",
    name: "Chief Marketing Officer",
    category: "C-Suite",
    hierarchy: 4,
    reasoning: 8,
    description:
      "Shapes brand narrative, demand creation, and customer insight synthesis.",
    specialties: ["brand", "growth", "customer intelligence"],
  },
  {
    id: "cto",
    name: "Chief Technology Officer",
    category: "C-Suite",
    hierarchy: 4,
    reasoning: 8,
    description:
      "Architects technical direction, ensuring resilient systems and future-ready platforms.",
    specialties: ["architecture", "innovation", "platforms"],
  },
  {
    id: "chief-systems-architect",
    name: "Chief Systems Architect",
    category: "Engineering Council",
    hierarchy: 3,
    reasoning: 7,
    description:
      "Designs the technical blueprint, ensuring scalability and compliance with enterprise standards.",
    specialties: ["systems design", "scalability", "compliance"],
  },
  {
    id: "lead-ml-engineer",
    name: "Lead ML Engineer",
    category: "Engineering Council",
    hierarchy: 3,
    reasoning: 7,
    description:
      "Evaluates models, data pipelines, and performance implications of AI decisions.",
    specialties: ["machine learning", "data", "model governance"],
  },
  {
    id: "devops-lead",
    name: "DevOps Lead",
    category: "Engineering Council",
    hierarchy: 2,
    reasoning: 6,
    description:
      "Assesses deployment pipelines, reliability, and automation requirements for execution.",
    specialties: ["automation", "reliability", "tooling"],
  },
  {
    id: "product-innovation-lead",
    name: "Product Innovation Lead",
    category: "Engineering Council",
    hierarchy: 2,
    reasoning: 6,
    description:
      "Identifies user-centric opportunities and orchestrates roadmap experiments.",
    specialties: ["product", "experimentation", "customer value"],
  },
  {
    id: "strategy-director",
    name: "Strategy Director",
    category: "Strategic Councils",
    hierarchy: 3,
    reasoning: 7,
    description:
      "Frames scenario planning, market dynamics, and cross-functional trade-offs.",
    specialties: ["scenario planning", "competitive intel", "prioritization"],
  },
  {
    id: "brand-ambassador",
    name: "Brand Ambassador",
    category: "Brand & Narrative",
    hierarchy: 1,
    reasoning: 5,
    description:
      "Advocates for audience resonance, tone, and trustworthiness across touchpoints.",
    specialties: ["brand voice", "community", "trust"],
  },
  {
    id: "social-team",
    name: "Social Media Influencer Team",
    category: "Brand & Narrative",
    hierarchy: 1,
    reasoning: 4,
    description:
      "Anticipates viral pathways, platform nuance, and engagement cadence.",
    specialties: ["engagement", "campaigns", "emerging platforms"],
  },
  {
    id: "head-of-people",
    name: "Head of People Ops",
    category: "Strategic Councils",
    hierarchy: 2,
    reasoning: 6,
    description:
      "Surfaces human impact, capacity planning, and cultural integrity checks.",
    specialties: ["talent", "org design", "change management"],
  },
  {
    id: "risk-officer",
    name: "Chief Risk & Compliance Officer",
    category: "Governance",
    hierarchy: 3,
    reasoning: 7,
    description:
      "Ensures all proposals adhere to legal, ethical, and policy guardrails.",
    specialties: ["compliance", "policy", "ethics"],
  },
  {
    id: "data-ethicist",
    name: "Data Ethicist",
    category: "Governance",
    hierarchy: 2,
    reasoning: 6,
    description:
      "Examines algorithmic fairness, bias mitigation, and stakeholder transparency.",
    specialties: ["ethics", "transparency", "risk"]
  },
  {
    id: "sales-director",
    name: "Director of Revenue Operations",
    category: "Go-To-Market",
    hierarchy: 2,
    reasoning: 6,
    description:
      "Brings customer pipeline realities, quotas, and channel trade-offs into focus.",
    specialties: ["sales", "forecasting", "partnerships"],
  },
  {
    id: "customer-advocate",
    name: "Customer Success Strategist",
    category: "Go-To-Market",
    hierarchy: 1,
    reasoning: 5,
    description:
      "Represents voice-of-customer insights, retention risk, and satisfaction levers.",
    specialties: ["customer experience", "retention", "value realization"],
  },
  {
    id: "ai-safety-lead",
    name: "AI Safety Lead",
    category: "Governance",
    hierarchy: 3,
    reasoning: 7,
    description:
      "Stress-tests systemic risks, fallback scenarios, and oversight instrumentation.",
    specialties: ["safety", "controls", "observability"],
  },
  {
    id: "finance-analyst",
    name: "Strategic Finance Analyst",
    category: "C-Suite Advisory",
    hierarchy: 2,
    reasoning: 6,
    description:
      "Models sensitivities, scenario toggles, and near-term budget implications.",
    specialties: ["modeling", "forecast", "trade-offs"],
  },
  {
    id: "innovation-liaison",
    name: "Innovation Program Liaison",
    category: "Strategic Councils",
    hierarchy: 1,
    reasoning: 5,
    description:
      "Connects incubated initiatives with mainstream delivery paths.",
    specialties: ["pilot programs", "ecosystem", "scale"]
  }
];

const templates = [
  {
    id: "c-suite",
    name: "Council of C-Suite",
    description:
      "Executive leadership alignment across finance, operations, technology, and market growth.",
    roles: ["core-brain", "ceo", "cfo", "coo", "cmo", "cto"],
  },
  {
    id: "engineers",
    name: "Council of Engineers",
    description:
      "Architecture, modeling, and delivery readiness for platform-level shifts.",
    roles: [
      "core-brain",
      "chief-systems-architect",
      "lead-ml-engineer",
      "devops-lead",
      "product-innovation-lead",
      "ai-safety-lead"
    ],
  },
  {
    id: "go-to-market",
    name: "Go-To-Market Council",
    description:
      "Commercial resonance, brand stewardship, and customer lifecycle discipline.",
    roles: [
      "core-brain",
      "cmo",
      "sales-director",
      "customer-advocate",
      "brand-ambassador",
      "social-team"
    ],
  },
  {
    id: "governance",
    name: "Governance & Ethics Council",
    description:
      "Guardrails for regulation, systemic safety, and ethical AI execution.",
    roles: ["core-brain", "risk-officer", "data-ethicist", "ai-safety-lead", "cfo"],
  },
  {
    id: "strategic",
    name: "Strategic Planning Council",
    description:
      "Long-range scenario development with people and innovation lenses.",
    roles: [
      "core-brain",
      "strategy-director",
      "head-of-people",
      "innovation-liaison",
      "finance-analyst",
      "ceo"
    ],
  }
];

const state = {
  selectedRoles: new Set(["core-brain"]),
  searchTerm: "",
  selectedTemplates: new Set(),
  history: loadHistory(),
};

const roleCatalogEl = document.getElementById("role-catalog");
const selectedRoleListEl = document.getElementById("selected-role-list");
const activeFiltersEl = document.getElementById("active-filters");
const deliberationOutputEl = document.getElementById("deliberation-output");
const templateListEl = document.getElementById("template-list");
const templateSelectedEl = document.getElementById("template-selected");
const historyListEl = document.getElementById("history-list");
const roleEncyclopediaEl = document.getElementById("role-encyclopedia");

document.querySelectorAll('[data-target]').forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.getElementById("role-search").addEventListener("input", (event) => {
  state.searchTerm = event.target.value.toLowerCase();
  renderRoleCatalog();
});

renderRoleCatalog();
renderSelectedRoles();
renderTemplates();
renderTemplateSummary();
renderHistory();
renderRoleEncyclopedia();
updateYear();

function renderRoleCatalog() {
  const grouped = groupRoles();
  roleCatalogEl.innerHTML = "";
  Object.entries(grouped).forEach(([category, roles]) => {
    const groupEl = document.createElement("div");
    groupEl.className = "role-group";

    const heading = document.createElement("h4");
    heading.textContent = category;
    groupEl.appendChild(heading);

    roles
      .filter((role) =>
        role.name.toLowerCase().includes(state.searchTerm) ||
        role.specialties.some((tag) => tag.includes(state.searchTerm)) ||
        role.category.toLowerCase().includes(state.searchTerm)
      )
      .sort((a, b) => b.hierarchy - a.hierarchy)
      .forEach((role) => {
        const item = document.createElement("label");
        item.className = "role-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = state.selectedRoles.has(role.id);
        checkbox.disabled = role.id === "core-brain";
        checkbox.addEventListener("change", () => toggleRole(role.id));

        const wrapper = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = role.name;
        const meta = document.createElement("span");
        meta.textContent = `${role.description}`;

        wrapper.appendChild(title);
        wrapper.appendChild(meta);

        item.appendChild(checkbox);
        item.appendChild(wrapper);
        groupEl.appendChild(item);
      });

    roleCatalogEl.appendChild(groupEl);
  });

  renderActiveFilters();
}

function renderSelectedRoles() {
  selectedRoleListEl.innerHTML = "";
  Array.from(state.selectedRoles)
    .map((id) => roleHierarchy.find((role) => role.id === id))
    .sort((a, b) => a.hierarchy - b.hierarchy)
    .forEach((role) => {
      const li = document.createElement("li");
      li.textContent = role.name;
      if (role.id !== "core-brain") {
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.setAttribute("aria-label", `Remove ${role.name}`);
        removeBtn.textContent = "×";
        removeBtn.addEventListener("click", () => toggleRole(role.id));
        li.appendChild(removeBtn);
      }
      selectedRoleListEl.appendChild(li);
    });
}

function toggleRole(roleId) {
  if (roleId === "core-brain") return;
  if (state.selectedRoles.has(roleId)) {
    state.selectedRoles.delete(roleId);
  } else {
    state.selectedRoles.add(roleId);
  }
  renderRoleCatalog();
  renderSelectedRoles();
  renderActiveFilters();
}

function groupRoles() {
  return roleHierarchy.reduce((groups, role) => {
    if (!groups[role.category]) groups[role.category] = [];
    groups[role.category].push(role);
    return groups;
  }, {});
}

function renderActiveFilters() {
  activeFiltersEl.innerHTML = "";
  Array.from(state.selectedRoles)
    .filter((id) => id !== "core-brain")
    .forEach((id) => {
      const role = roleHierarchy.find((r) => r.id === id);
      const tag = document.createElement("span");
      tag.className = "filter-tag";
      tag.textContent = role.name;
      activeFiltersEl.appendChild(tag);
    });
}

document.getElementById("custom-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (state.selectedRoles.size === 0) {
    return;
  }

  const form = event.target;
  const runButton = form.querySelector('button[type="submit"]');
  const originalButtonText = runButton?.textContent;
  if (runButton) {
    runButton.disabled = true;
    runButton.textContent = "Running council...";
  }

  const name = document.getElementById("decision-name").value.trim();
  const context = document.getElementById("decision-context").value.trim();
  const question = document.getElementById("decision-question").value.trim();

  const roles = Array.from(state.selectedRoles)
    .map((id) => roleHierarchy.find((role) => role.id === id))
    .sort((a, b) => a.hierarchy - b.hierarchy);

  const { element, summaryPromise } = buildReasoningFlow({
    name,
    context,
    question,
    roles,
  });

  deliberationOutputEl.classList.remove("hidden");
  deliberationOutputEl.innerHTML = "";
  deliberationOutputEl.appendChild(element);
  deliberationOutputEl.scrollIntoView({ behavior: "smooth", block: "start" });

  const record = {
    id: Date.now(),
    name,
    context,
    question,
    roles: roles.map((r) => r.id),
    timestamp: new Date().toISOString(),
    summary: "",
  };

  summaryPromise
    .then((summaryText) => {
      record.summary = summaryText;
      state.history.unshift(record);
      saveHistory(state.history);
      renderHistory();
    })
    .catch((error) => {
      console.error("Failed to synthesize council", error);
      const summaryFallback = element.querySelector(".summary p");
      if (summaryFallback) {
        summaryFallback.textContent =
          "We couldn't complete the council synthesis. Please try again.";
      }
    })
    .finally(() => {
      if (runButton) {
        runButton.disabled = false;
        runButton.textContent = originalButtonText || "Run Council Deliberation";
      }
    });

  form.reset();
  document.getElementById("decision-question").focus();
});

function buildReasoningFlow({ name, context, question, roles }) {
  const container = document.createElement("section");
  container.className = "deliberation-container";

  const header = document.createElement("header");
  header.className = "deliberation-header";
  const title = document.createElement("h3");
  title.textContent = `${name || "Untitled Decision"} — Council Deliberation`;
  const badge = document.createElement("span");
  badge.className = "filter-tag";
  badge.textContent = `${roles.length} roles engaged`;
  header.appendChild(title);
  header.appendChild(badge);

  const brief = document.createElement("div");
  brief.className = "deliberation-brief";
  const contextLine = document.createElement("p");
  contextLine.className = "context";
  contextLine.textContent = context ? context : "No additional context provided.";
  const questionLine = document.createElement("p");
  questionLine.className = "question";
  questionLine.textContent = `Key Question: ${question || "(Not specified)"}`;
  brief.appendChild(contextLine);
  brief.appendChild(questionLine);

  const progressTrack = document.createElement("div");
  progressTrack.className = "progress-track";
  const progressFill = document.createElement("span");
  progressFill.className = "progress-fill";
  progressTrack.appendChild(progressFill);

  const timeline = document.createElement("ol");
  timeline.className = "deliberation-timeline";

  const insights = document.createElement("div");
  insights.className = "role-insights";

  const summary = document.createElement("section");
  summary.className = "summary";
  const summaryTitle = document.createElement("h4");
  summaryTitle.textContent = "Core Brain/EA Decision Return";
  const summaryBody = document.createElement("p");
  summaryBody.textContent = "Synthesizing council response…";
  summary.appendChild(summaryTitle);
  summary.appendChild(summaryBody);

  const actionPlan = document.createElement("section");
  actionPlan.className = "action-plan";
  const actionTitle = document.createElement("h4");
  actionTitle.textContent = "Immediate Action Plan";
  const actionList = document.createElement("ul");
  actionPlan.appendChild(actionTitle);
  actionPlan.appendChild(actionList);

  container.appendChild(header);
  container.appendChild(brief);
  container.appendChild(progressTrack);
  container.appendChild(timeline);
  container.appendChild(insights);
  container.appendChild(summary);
  container.appendChild(actionPlan);

  const orderedRoles = roles.slice().sort((a, b) => a.hierarchy - b.hierarchy);
  const baseWeight = orderedRoles.reduce((acc, role) => acc + role.reasoning, 0);

  const summaryPromise = runDeliberationFlow({
    roles: orderedRoles,
    question,
    context,
    baseWeight,
    timeline,
    insights,
    summaryBody,
    progressFill,
    actionList,
  });

  return { element: container, summaryPromise };
}

function synthesizeReasoning(role, question, context, baseWeight) {
  const emphasis = Math.round((role.reasoning / baseWeight) * 100);
  const perspective = [
    `Evaluates the query "${question}" through the lens of ${role.specialties.join(", ")} while maintaining ${role.category.toLowerCase()} guardrails.`,
    `Highlights dependencies informed by ${role.specialties[0]} and anticipates downstream implications with ${role.specialties[1] || role.specialties[0]}.`,
    `Projects scenario pathways ensuring the council respects ${role.specialties.join(" & ")}.`
  ];
  const insight = perspective[role.hierarchy % perspective.length];
  const alignment = `Contributes ${emphasis}% of the weighted reasoning signal.`;

  return `${insight} ${context ? `Contextual factors: ${context}.` : ""} ${alignment}`.trim();
}

function assembleDecision(roles, question, context, baseWeight) {
  const priorities = roles
    .filter((role) => role.id !== "core-brain")
    .sort((a, b) => b.reasoning - a.reasoning)
    .slice(0, 3)
    .map((role) => role.specialties[0]);

  const topAdvisor = roles
    .filter((role) => role.id !== "core-brain")
    .reduce((max, role) => (role.reasoning > (max?.reasoning ?? 0) ? role : max), null);

  const coverage = roles.length > 5 ? "multi-faceted" : "focused";
  const contextLine = context ? `Grounded by the provided context,` : "Without additional context,";

  return `${contextLine} the Core Brain/EA aggregates a ${coverage} decision path. Primary advisors spotlight ${priorities.join(", " )}. ${topAdvisor ? `${topAdvisor.name} carries the strongest reasoning weight and recommends proceeding with a plan optimized for ${topAdvisor.specialties[0]}.` : ""} The Core Brain/EA returns this synthesis to the user with clear next actions aligned to the query: "${question}".`;
}

async function runDeliberationFlow({
  roles,
  question,
  context,
  baseWeight,
  timeline,
  insights,
  summaryBody,
  progressFill,
  actionList,
}) {
  const steps = roles.length + 1;
  let completed = 0;

  const updateProgress = () => {
    const percent = Math.max(5, Math.round((completed / steps) * 100));
    progressFill.style.width = `${percent}%`;
  };

  const addTimelineItem = (title, body, options = {}) => {
    const item = document.createElement("li");
    item.className = "timeline-item";
    if (options.type) {
      item.dataset.type = options.type;
    }
    const heading = document.createElement("h5");
    heading.textContent = title;
    item.appendChild(heading);

    if (options.meta) {
      const meta = document.createElement("span");
      meta.className = "meta";
      meta.textContent = options.meta;
      item.appendChild(meta);
    }

    const description = document.createElement("p");
    description.textContent = body;
    item.appendChild(description);
    timeline.appendChild(item);
    timeline.scrollTop = timeline.scrollHeight;
  };

  const addInsight = (role, text, emphasis) => {
    const detail = document.createElement("details");
    detail.className = "role-insight";
    if (role.id === "core-brain") {
      detail.open = true;
    }

    const summary = document.createElement("summary");
    const name = document.createElement("span");
    name.textContent = role.name;
    const meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = `Reasoning ${role.reasoning}/10 · Influence ${emphasis}%`;
    summary.appendChild(name);
    summary.appendChild(meta);

    const body = document.createElement("div");
    body.className = "insight-body";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    body.appendChild(paragraph);

    detail.appendChild(summary);
    detail.appendChild(body);
    insights.appendChild(detail);
  };

  updateProgress();

  for (const role of roles) {
    const reasoning = synthesizeReasoning(role, question, context, baseWeight);
    const emphasis = Math.round((role.reasoning / baseWeight) * 100);

    await delay(role.id === "core-brain" ? 350 : 420 - Math.min(role.reasoning, 9) * 20);

    addTimelineItem(role.name, reasoning, {
      type: role.id === "core-brain" ? "core" : "role",
      meta: `Hierarchy ${role.hierarchy} · Influence ${emphasis}%`,
    });

    addInsight(role, reasoning, emphasis);

    completed += 1;
    updateProgress();
  }

  await delay(350);
  const summaryText = assembleDecision(roles, question, context, baseWeight);
  summaryBody.textContent = summaryText;

  addTimelineItem("Core Brain/EA Return", "Synthesizes the weighted debate into a unified directive for the user.", {
    type: "summary",
    meta: `Total roles engaged: ${roles.length}`,
  });

  const actions = generateActionPlan(roles, question, context, baseWeight);
  actionList.innerHTML = "";
  actions.forEach((action) => {
    const li = document.createElement("li");
    li.textContent = action;
    actionList.appendChild(li);
  });

  completed += 1;
  updateProgress();

  return summaryText;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateActionPlan(roles, question, context, baseWeight) {
  const actions = [];
  const advisors = roles
    .filter((role) => role.id !== "core-brain")
    .map((role) => ({
      role,
      weight: Math.round((role.reasoning / baseWeight) * 100),
    }))
    .sort((a, b) => b.weight - a.weight);

  if (advisors[0]) {
    actions.push(
      `Empower ${advisors[0].role.name} to lead the first workstream, leveraging their expertise in ${advisors[0].role.specialties[0]} (${advisors[0].weight}% influence).`
    );
  }

  if (advisors[1]) {
    actions.push(
      `Pair with ${advisors[1].role.name} to pressure-test assumptions across ${advisors[1].role.specialties.join(", ")}.`
    );
  }

  const governanceAdvisor = advisors.find((advisor) =>
    advisor.role.category.toLowerCase().includes("governance")
  );
  if (governanceAdvisor) {
    actions.push(
      `Route compliance and risk validation through ${governanceAdvisor.role.name} to ensure policy alignment before execution.`
    );
  }

  if (context) {
    actions.push(`Reflect the provided context in briefing materials so each council member operates from shared truths.`);
  }

  actions.push(
    `Have the Core Brain/EA deliver the synthesized response on "${question}" back to the requester and archive the outcome in the Library for continuity.`
  );

  return actions;
}

function renderTemplates() {
  templateListEl.innerHTML = "";
  templates.forEach((template) => {
    const card = document.createElement("article");
    card.className = "template-card";

    const header = document.createElement("header");
    const title = document.createElement("h3");
    title.textContent = template.name;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.selectedTemplates.has(template.id);
    checkbox.addEventListener("change", () => toggleTemplate(template.id));

    header.appendChild(title);
    header.appendChild(checkbox);

    const description = document.createElement("p");
    description.textContent = template.description;

    const list = document.createElement("ul");
    template.roles
      .map((roleId) => roleHierarchy.find((role) => role.id === roleId))
      .forEach((role) => {
        const li = document.createElement("li");
        li.textContent = `${role.name} (${role.category})`;
        list.appendChild(li);
      });

    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(list);
    templateListEl.appendChild(card);
  });
}

function toggleTemplate(id) {
  if (state.selectedTemplates.has(id)) {
    state.selectedTemplates.delete(id);
  } else {
    state.selectedTemplates.add(id);
  }
  renderTemplates();
  renderTemplateSummary();
}

function renderTemplateSummary() {
  templateSelectedEl.innerHTML = "";
  const combinedRoles = new Set(["core-brain"]);
  state.selectedTemplates.forEach((templateId) => {
    const template = templates.find((tpl) => tpl.id === templateId);
    template?.roles.forEach((roleId) => combinedRoles.add(roleId));
  });

  if (state.selectedTemplates.size === 0) {
    templateSelectedEl.innerHTML = "<p>No templates selected yet.</p>";
    return;
  }

  combinedRoles.forEach((roleId) => {
    const role = roleHierarchy.find((r) => r.id === roleId);
    const chip = document.createElement("span");
    chip.className = "role-chip";
    chip.textContent = role.name;
    templateSelectedEl.appendChild(chip);
  });
}

document.getElementById("apply-templates").addEventListener("click", () => {
  state.selectedTemplates.forEach((templateId) => {
    const template = templates.find((tpl) => tpl.id === templateId);
    template?.roles.forEach((roleId) => state.selectedRoles.add(roleId));
  });
  renderRoleCatalog();
  renderSelectedRoles();
  renderActiveFilters();
  const target = document.getElementById("custom-council");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
});

function renderHistory() {
  historyListEl.innerHTML = "";

  if (!state.history.length) {
    const empty = document.createElement("li");
    empty.className = "history-card";
    empty.innerHTML = `<h4>No decisions yet</h4><p>Once you run a council, it will be stored here for quick reference.</p>`;
    historyListEl.appendChild(empty);
    return;
  }

  state.history.slice(0, 10).forEach((record) => {
    const item = document.createElement("li");
    item.className = "history-card";

    const title = document.createElement("h4");
    title.textContent = record.name || "Untitled Decision";

    const timestamp = document.createElement("p");
    timestamp.className = "meta";
    timestamp.textContent = new Date(record.timestamp).toLocaleString();

    const summary = document.createElement("p");
    summary.textContent = record.summary;

    const resumeBtn = document.createElement("button");
    resumeBtn.type = "button";
    resumeBtn.textContent = "Reopen in Custom Council";
    resumeBtn.addEventListener("click", () => {
      state.selectedRoles = new Set(record.roles);
      if (!state.selectedRoles.has("core-brain")) {
        state.selectedRoles.add("core-brain");
      }
      renderRoleCatalog();
      renderSelectedRoles();
      renderActiveFilters();
      document.getElementById("decision-name").value = record.name;
      document.getElementById("decision-context").value = record.context;
      document.getElementById("decision-question").value = record.question;
      document.getElementById("custom-council").scrollIntoView({ behavior: "smooth" });
    });

    item.appendChild(title);
    item.appendChild(timestamp);
    item.appendChild(summary);
    item.appendChild(resumeBtn);
    historyListEl.appendChild(item);
  });
}

function renderRoleEncyclopedia() {
  const grouped = groupRoles();
  roleEncyclopediaEl.innerHTML = "";

  Object.entries(grouped).forEach(([category, roles]) => {
    const section = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = category;
    section.appendChild(heading);

    roles
      .sort((a, b) => b.hierarchy - a.hierarchy)
      .forEach((role) => {
        const entry = document.createElement("div");
        entry.className = "role-entry";

        const title = document.createElement("h4");
        title.textContent = role.name;

        const meta = document.createElement("span");
        meta.className = "meta";
        meta.textContent = `Hierarchy Level ${role.hierarchy} · Reasoning ${role.reasoning}/10`;

        const description = document.createElement("p");
        description.textContent = role.description;

        const tags = document.createElement("p");
        tags.className = "meta";
        tags.textContent = `Focus: ${role.specialties.join(", ")}`;

        entry.appendChild(title);
        entry.appendChild(meta);
        entry.appendChild(description);
        entry.appendChild(tags);
        section.appendChild(entry);
      });

    roleEncyclopediaEl.appendChild(section);
  });
}

function loadHistory() {
  try {
    const raw = localStorage.getItem("mab-ai-history");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to load history", error);
    return [];
  }
}

function saveHistory(records) {
  try {
    localStorage.setItem("mab-ai-history", JSON.stringify(records));
  } catch (error) {
    console.error("Failed to save history", error);
  }
}

function updateYear() {
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();
}

// Hero Video - Play once and freeze on final frame
document.addEventListener('DOMContentLoaded', () => {
  const heroVideo = document.getElementById('hero-video');
  
  if (heroVideo) {
    // Play video once
    heroVideo.play();
    
    // When video ends, seek to last frame and pause
    heroVideo.addEventListener('ended', () => {
      heroVideo.currentTime = heroVideo.duration - 0.1;
      heroVideo.pause();
    });
  }
});
