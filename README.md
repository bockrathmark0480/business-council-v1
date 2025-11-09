# MAB AI Business Council

A single-page web experience for orchestrating multi-agent business councils. It supports building custom councils, combining template councils, and revisiting previous decisions through the library.

## Features

- **Custom Council Builder** – Choose any combination of roles while always anchoring the Core Brain/EA orchestration. Generate weighted reasoning flows for your decision brief.
- **Interactive Council Simulation** – Watch the Core Brain and selected roles progress through a live timeline, with influence-weighted insights, progress tracking, and an automatically generated action plan.
- **Template Councils** – Start from curated role groupings (e.g., Council of Engineers, Council of C-Suite) and merge multiple templates into a custom deliberation.
- **Library & Role Encyclopedia** – Review and resume prior decisions (stored in local storage) and browse detailed role definitions and reasoning weights.
- **Future Iterations Preview** – Highlights planned submissions and analytics integrations to keep the system extensible.

## Getting Started

1. Install the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel dev` from the project root so the `/api/deliberate` serverless function is available locally.
2. Provide your OpenAI API key (see [Environment Variables](#environment-variables)).
3. Navigate to the served URL (defaults to `http://localhost:3000`) and explore the landing page options.
4. Submit a decision brief to generate a synthesized council response. Decisions persist in your browser for quick recall.

The app is built with vanilla HTML, CSS, JavaScript, and a single Vercel serverless function for AI-powered deliberation.

## AI Deliberation Backend

- `/api/deliberate` accepts the decision question, optional context, and selected roles, then orchestrates GPT-4-turbo calls for each role plus a Core Brain/EA synthesis.
- Role prompts include each role's description, specialties, hierarchy, and reasoning weight so responses stay faithful to the hierarchy.
- The backend returns structured JSON (`roleId`, `weight`, `stance`, `summary`, `riskFlags`) alongside the Core Brain/EA's final decision and action plan.

## Environment Variables

Set the following variable when running locally or deploying to Vercel:

- `OPENAI_API_KEY` – Secret key for the OpenAI API (GPT-4-turbo).
