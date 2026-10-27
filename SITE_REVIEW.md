# Current-site review and download

Hosting repair: review access was changed to public with the owner's explicit authorization. The initial static deployment did not supply Vite's SPA fallback, so direct concept URLs returned 404 after removing the sign-in gate. The build now creates HTML entry files for every supported route to make direct links work on static hosting.

Reviewed cccbuild.com, its public navigation and sitemap, and the one publicly linked capability PDF. Download: `source-archive/cccbuild/`. Reproduce with `node scripts/archive-site.mjs`. The manifest records URL, status, MIME type, byte count, path and remaining queue.

Final capture: 138 successful responses; no remaining queue; eight 404 responses including an alternate sitemap probe and broken legacy decorative images. HTML includes Home, About Us, Services, Our Projects, Contact Us, Testimonials, Privacy Policy and Communication Policy. Trailing-slash aliases produce duplicate records.

Scope is publicly discoverable same-origin pages, images, styles, scripts, fonts and PDFs. This is source capture, not a WordPress/database backup or guaranteed offline executable mirror. External services, private content, unlinked files and backend functionality are outside the capture. The archive is excluded from Git.

## Findings applied

- Preserve the original blue/gray logo.
- Give commercial and residential services dedicated pages; current navigation points both to one Services page.
- Feature ICF on every new concept. The capability statement includes ICF walls and framing.
- Remove source template leftovers from new designs: placeholder number, Latin filler, broken decoration and inconsistent spelling.
- Do not turn source filenames containing “hurricane-proof” into performance claims. Explain whole-building engineering without promises of storm immunity or quantified energy savings.
- Contact information is inconsistent across source pages. The capability PDF corroborates (727) 771-5672 and ben@cccbuild.com. Confirm before production launch.
- PDF reviewed visually and via extraction: 1 page, 763,508 bytes. Kept unchanged. Its company identifiers, sector codes and self-reported credentials were not independently verified.

## Sources

- https://cccbuild.com/
- https://cccbuild.com/about-us/
- https://cccbuild.com/services/
- https://cccbuild.com/our-projects/
- https://cccbuild.com/contact-us/
- https://cccbuild.com/wp-content/uploads/2025/07/CoastalCornerstoneConstruction_CapabilityStatement.pdf
- https://basc.pnnl.gov/resource-guides/insulated-concrete-forms-icfs
- https://bsesc.energy.gov/energy-basics/insulated-concrete-forms
- https://www.a1.gallery/websites/3d-ai
- https://shop.zimaspace.com/blogs/tech-ai-hub/10-best-ai-design-skills-tools-for-better-ui-ux
- https://github.com/pbakaus/impeccable (Apache 2.0; guidance read, not installed)
- https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

## Routes and lead behavior

Animated follow-up: concepts 07, 08 and 09 add another 24 routes with the same supporting-page structure. All nine directions appear in the gallery. Animated concepts retain the existing logo, source assets and PDF; no paid services or new runtime packages were required.

`/concept-04`, `/concept-05`, `/concept-06`, each with `/commercial`, `/residential`, `/icf`, `/projects`, `/about`, `/resources`, `/contact`. Root gallery includes all six directions, with new work first. Forms validate and prepare an email draft; no backend delivery or analytics is configured.

## GitHub delivery blocker

Requested branch: `feat/three-florida-builder-concepts` in `srinagubandi/coastal-cornerstone-concepts`. Local branch creation failed under read-only Git metadata permissions; connected GitHub branch creation was rejected because approval is unavailable in this session. Changes remain in the working directory. Do not report a branch, push, PR or merge as completed until verified remotely.
