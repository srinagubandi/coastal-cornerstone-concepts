# AI Agent Handoff — Coastal Cornerstone Construction

## Objective

Continue and, when authorized, publish a polished mobile-first website for Coastal Cornerstone Construction. The current work is a concept gallery, not a live replacement for https://cccbuild.com/. It gives stakeholders three high-fidelity directions to choose from before expanding the selected direction into a complete production site.

## Current verified state

- The project builds successfully with `pnpm check && pnpm build`.
- The desktop and 390 px mobile landing states were visually checked for all three concept routes.
- A Manus deployment is live at https://coastalcc-pqgdyngy.manus.space.
- Hero visuals load from Manus Storage and were confirmed publicly reachable when this handoff was created.
- There are no secrets or access credentials in this repository.

## The three directions

### 1. The Foundry — `/concept-01`

**Character:** Editorial, assured, warm, image-led.  
**Best when:** The brand needs to feel relationship-led and considered.  
**System:** Sand, iron green, coastal blue, Fraunces display typography, open editorial pacing.  
**Primary visitor journey:** Hero → statement of care → selected work → services → approach → contact.

### 2. The Archive — `/concept-02`

**Character:** Architectural, exacting, portfolio-first.  
**Best when:** The quality and variety of completed work should do the selling.  
**System:** Chalk, graphite, limestone, Manrope typography, project-index rhythm, ruled layouts.  
**Primary visitor journey:** Hero → work index → project record rows → method → contact.

### 3. The Field Office — `/concept-03`

**Character:** Direct, energetic, operational, high contrast.  
**Best when:** The site needs to drive fast inquiries and clearly communicate a capable working process.  
**System:** Graphite, signal orange, salt white, heavy Manrope typography, prominent actions.  
**Primary visitor journey:** Hero → service clarity → process → proof-of-work cards → contact.

## Code map

```text
client/
  index.html                  Page metadata and viewport configuration
  src/
    App.tsx                   Route registration
    index.css                 All responsive styles and design systems
    pages/Home.tsx            Gallery and the three complete concept pages
    components/               Existing shared template components
```

`Home.tsx` intentionally keeps all three directions together to make comparison and review fast. Once one direction is selected for production, split it into reusable layout, section, and page components before expanding the site.

## Asset instructions

The concept images are original, text-free visuals hosted by Manus Storage. Do not place large media files inside `client/public` or `client/src/assets`.

The current visual mappings are at the top of `client/src/pages/Home.tsx`. If creating a new Manus WebDev project, upload original media with `manus-upload-file --webdev`, then use the returned storage path. For another host, either move the images into that host's approved object storage/CDN or use the public URLs documented in the README.

## Content and compliance guardrails

Do not represent conceptual visuals as Coastal Cornerstone jobs. Do not add or repeat unverified claims about licenses, insurance, years in business, government work, certifications, project outcomes, response time, reviews, or contact numbers. Validate these with the business owner first.

The audit that led to these concepts found public contact inconsistencies. Confirm the approved primary telephone/SMS number, legal business name, service areas, credential details, privacy/consent language, project permissions, and testimonial permissions before releasing any production version.

## Design guardrails learned from the supplied references

- Avoid generic AI-site conventions such as centered pill-badge heroes, interchangeable cards, arbitrary glows, and equal-weight actions.
- Give the primary conversion action visibly stronger hierarchy than secondary navigation.
- Use project-specific, meaningful visuals instead of generic hardhat imagery or fake metrics.
- Treat mobile as a dedicated design pass: preserve headline hierarchy, increase touch targets, keep menus easy to use, and keep short screens in normal document flow.
- Keep interactions purposeful. Respect `prefers-reduced-motion`.

## Recommended next implementation sequence

1. Ask the stakeholder to choose one direction.
2. Build the production information architecture: Home, Services, Project Index, Project Detail, About, Contact, and Privacy.
3. Replace concepts with approved project photography, case-study copy, owner-supplied credentials, and actual contact routing.
4. Add a real lead form, analytics, consent language, and form-event measurement in the authorized production environment.
5. Perform content, responsive, keyboard, contrast, form, and metadata QA.
6. Publish only with authorized hosting/project access.

## Git and publishing procedure

1. Start from `main` and create a specific branch, for example `feat/foundry-production-pages`.
2. Do not force-push, rewrite `main`, or commit build output, credentials, or heavy source media.
3. Run `pnpm check && pnpm build` before handoff.
4. Include the affected routes and mobile breakpoints tested in the pull request body.
5. Merge through a reviewed pull request.
6. Use the agent's own authorized Manus account/project or authorized hosting credentials to publish. Never request or store another person's credentials in this repository.

## Deployment note

The current Manus deployment is a concept preview. A GitHub clone cannot automatically control that deployment without an authorized Manus project connection. The GitHub repository provides the code handoff; publishing permissions remain bound to the destination hosting account.
