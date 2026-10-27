# Coastal Cornerstone Construction — Website Concepts

A public, mobile-first concept gallery for Coastal Cornerstone Construction. It contains three deliberately different homepage directions rather than three variants of one theme.

**Live Manus deployment:** https://coastalcc-pqgdyngy.manus.space

## What is in the repository

| Route | Direction | Purpose |
| --- | --- | --- |
| `/` | Concept gallery | Compares the three design directions. |
| `/concept-01` | The Foundry | Editorial, project-led, and warm. |
| `/concept-02` | The Archive | Architecture-first and portfolio-focused. |
| `/concept-03` | The Field Office | High-contrast, direct, and conversion-oriented. |

The source is a Vite, React, TypeScript, and Tailwind CSS project. The implementation is deliberately static: no database, API keys, authentication, or server-side application code is required.

## Run locally

```bash
pnpm install
pnpm dev
```

Use the development URL printed by Vite. Before opening a pull request or publishing, run:

```bash
pnpm check
pnpm build
```

## AI-agent handoff

Read [AI_AGENT_HANDOFF.md](AI_AGENT_HANDOFF.md) before modifying the site. It describes the desired design character, route map, asset workflow, content constraints, QA requirements, and the branch-based delivery process.

## Branching and contribution rules

This repository is public. Do not commit credentials, API keys, customer data, proprietary assets, or unapproved project information.

1. Create a dedicated branch such as `feat/project-case-studies` or `fix/mobile-navigation`.
2. Make one focused change set per branch.
3. Run `pnpm check && pnpm build`.
4. Open a pull request against `main` with a concise testing summary.
5. Publish only after an authorized reviewer has approved the branch or deployment action.

The current handoff branch is `handoff/ai-agent-setup`. It documents the verified starting state of the concept gallery.

## Asset workflow

The hero images are intentionally stored in Manus Storage rather than in `client/public` or `client/src/assets`. They are public at the following URLs and are referenced by their `/manus-storage/...` paths in `client/src/pages/Home.tsx`:

- https://coastalcc-pqgdyngy.manus.space/manus-storage/coastal-concept-hero-1_b3af4bad.jpg
- https://coastalcc-pqgdyngy.manus.space/manus-storage/coastal-concept-hero-2_df32b059.jpg
- https://coastalcc-pqgdyngy.manus.space/manus-storage/coastal-concept-hero-3_6b913376.jpg

For a new Manus WebDev project, keep originals outside the project and upload them before publishing:

```bash
manus-upload-file --webdev /absolute/path/to/image.jpg
```

Then replace the relevant path in `client/src/pages/Home.tsx` with the returned `/manus-storage/...` path. Avoid committing large images into the frontend project because that can slow or block deployment.

## Content status

This is a visual concept and should not be treated as approved production copy. Before production launch, replace conceptual imagery and validate every business claim, phone number, service description, credential, testimonial, project permission, form consent notice, and analytics configuration.

## Publishing

The existing public Manus deployment is available at the link above. A future agent can publish an approved branch through its own authorized Manus WebDev account or through another authorized hosting workflow. This repository intentionally contains no Manus, hosting, or GitHub credentials.
