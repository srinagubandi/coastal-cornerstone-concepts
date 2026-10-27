# Twelve-design rebuild

The user authorized rebuilding all twelve concepts, maximum structural variety, different commercial/residential/ICF lead stories and two review loops. Existing public audience and source logo are preserved.

| Route | Direction | Lead | Structural signature |
|---|---|---|---|
| /concept-01 | The Column | Commercial | editorial |
| /concept-02 | The Monograph | Residential | index |
| /concept-03 | The Site Office | Commercial | poster |
| /concept-04 | The Waterfront | Residential | panorama |
| /concept-05 | The Specification | Commercial | technical |
| /concept-06 | The Material Lab | ICF | material |
| /concept-07 | The Assembly | Commercial | stage |
| /concept-08 | The Climate Section | ICF | section |
| /concept-09 | The Open House | Residential | choice |
| /concept-10 | The Field Atlas | Commercial | atlas |
| /concept-11 | The Decision Desk | ICF | dialogue |
| /concept-12 | The Everyday | Residential | journal |

Each concept now has Home, Commercial, Residential, ICF, Process, About, Projects, Contact and Resources. The shared implementation provides semantic behaviors and factual consistency; each hero is a separate composition and each style has dedicated navigation, typography, responsive and content-treatment rules. Every page has original primary and secondary headings. Core construction facts are intentionally consistent.

## Two loops

Loop 1: authored twelve content systems, 96 supporting-page introductions, twelve separate hero compositions, responsive styling, page-specific illustration/photographic motion and navigation. TypeScript and production build passed.

Loop 2: audited 108 rendered pages, identified repeated supporting headings and insufficient navigation/type separation, authored 108 distinct section headings, strengthened navigation arrangements and display typography, refined mobile layouts and revalidated. Result: 108 unique H1s, 108 unique section headings, 12 hero compositions, 12 gallery entries, no missing referenced source images or required pause controls. See docs/redesign-two-loop-audit.json.

Browser visual QA remains incomplete: browser automation failed to start, and native computer-use reported that its app-server program was unavailable. Automated rendering is not evidence of actual viewport fit or interaction success. Do not describe visual or mobile browser checks as passed.

## Implementation

client/src/redesign/data.ts stores original copy; section-headings.ts stores page-specific secondary headings; Redesign.tsx contains the comparison gallery, twelve hero compositions, page content, project filters, inquiry draft form and accessible navigation. redesign.css holds isolated design systems and responsive rules. scripts/build.mjs emits direct-route HTML entries for every page.

Motion is pausable, bounded to the page's visual study and disabled under prefers-reduced-motion. Contact forms prepare email drafts only; no lead backend, analytics or messaging is added. ICF copy avoids hurricane-proof, flood-proof, quantified energy-savings or insurance claims. Imagery is sourced from the existing site; attribution and project scope require confirmation.
