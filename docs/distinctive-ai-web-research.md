# Distinctive AI-assisted website design

Research synthesis and implementation brief, October 27, 2026.

## What makes AI output converge

An underspecified prompt leaves the model to choose familiar compositions: a split hero, trust metrics, interchangeable cards, oversized rounded containers and a generic benefits list. Banning a color does not solve structural repetition. Anthropic's aesthetics guidance supports specifying a coherent visual direction and independently deciding typography, color, motion and composition. This is vendor guidance, not controlled evidence of conversion improvement.

## What the studio examples demonstrate

Clay's portfolio connects branding to web experiences across different industries. Active Theory's account of its fifth studio website explains environments rooted in its founders, offices and project history. These examples suggest using a business's own material as the starting point. They do not establish that copying a studio's WebGL effects improves a contractor's leads. For CCC, construction constraints, decision-making and everyday occupancy provide more useful ideas than abstract AI orbs.

## Content is the differentiator

Start with the buyer's questions, then develop the page outline before selecting components. Commercial owners need to understand scope, access, operational requirements and coordination. Residential owners need to connect their routines to layout, additions or a new home. ICF needs a clear explanation of permanent insulation, reinforced concrete and whole-building design. Avoid interchangeable claims about excellence, fabricated testimonials and unsupported wind, energy or insurance guarantees.

## Motion has a job

Nielsen Norman Group distinguishes helpful motion for state, relationships and navigation from distracting decorative motion. The implementation gives every page a relevant visual study: commercial modules connect, residential plans trace, ICF layers separate, process stages rise in sequence, contact shows a communication connection, and the home/project studies combine site contours with building geometry. The three visual systems give those studies different contexts. One global pause control freezes motion. Reduced-motion CSS renders the information statically. Native controls and visible text remain usable without animation.

Google recommends transform and opacity rather than repeatedly changing layout geometry. These are the default animation properties used here. The one-shot residential SVG trace also changes stroke offset; that bounded paint effect must be considered during performance QA. No claim of measured frame rate is made. W3C requires controls for qualifying automatically moving content and supports disabling nonessential interaction-triggered motion. No scroll hijacking or cursor replacement is introduced.

## Three genuinely different directions

| Concept | Organizing idea | Composition | Content voice |
| --- | --- | --- | --- |
| 10 / The Site Atlas | Read the place before specifying the building | Wide editorial typography, contour study and marginal notes | Site conditions, relationships and construction decisions |
| 11 / The Decision Room | Ask useful questions before fixing the solution | Cobalt/white split, condensed display type, interactive priority index | Questions, tradeoffs and clarity at each stage |
| 12 / The Occupied Life | Begin with the day after handover | Photographic contact sheet, plum tones and annotated image studies | Ordinary routines, working days and people using space |

Each has original headings and introductory copy for Home, Commercial, Residential, ICF, Process, About, Projects and Contact. Shared supporting factual descriptions preserve consistency; they are not presented as invented project evidence. Source imagery and the current logo are retained. Photographs carry source/attribution caveats. Contact links open an email client or dialer; they do not submit leads silently.

## Practical workflow

1. Confirm audience, desired action, constraints and actual business evidence.
2. Derive visual systems from the subject rather than AI-product conventions.
3. Write specific page questions and copy; reject copy interchangeable with another builder.
4. Compare layouts that differ in composition and information order, not merely color.
5. Assign a motion purpose to every page while keeping the reading surface calm.
6. Build semantic controls, focus states, pause and reduced-motion behavior from the beginning.
7. Test content at mobile sizes and verify direct URLs on the real static host.
8. Measure performance and validate real lead routing before production cutover.

## Sources

- Anthropic: https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
- Anthropic frontend design source: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
- Clay web portfolio: https://clay.global/work/web
- Active Theory: https://activetheory.net/
- Active Theory interview: https://www.webbyawards.com/crafted-with-code/active-theory/
- Nielsen Norman Group: https://www.nngroup.com/articles/animation-purpose-ux/
- Google animation performance: https://web.dev/articles/animations-and-performance/
- W3C automatic motion: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- W3C interaction motion: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions

## Limits

This is a qualitative source review and design synthesis, not a conversion experiment or certification. The existing business claims and source photography have not been independently audited. Implementation checks are recorded separately; successful compilation is not a substitute for browser inspection.
