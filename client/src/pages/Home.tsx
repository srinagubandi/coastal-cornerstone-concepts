import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Menu,
  MoveRight,
  Phone,
  Play,
  Plus,
  X,
} from "lucide-react";

const CONTACT_URL = "https://cccbuild.com/contact-us/";

const images = {
  foundry: "/manus-storage/coastal-concept-hero-1_b3af4bad.jpg",
  archive: "/manus-storage/coastal-concept-hero-2_df32b059.jpg",
  field: "/manus-storage/coastal-concept-hero-3_6b913376.jpg",
};

type Concept = {
  id: string;
  route: string;
  label: string;
  title: string;
  descriptor: string;
  detail: string;
  palette: string;
};

const concepts: Concept[] = [
  {
    id: "01",
    route: "/concept-01",
    label: "The Foundry",
    title: "An editorial site with a human pulse.",
    descriptor: "Quiet confidence · project-led",
    detail:
      "A rich, image-led direction that makes the work feel considered before the visitor reads a word.",
    palette: "Warm sand / iron / coastal blue",
  },
  {
    id: "02",
    route: "/concept-02",
    label: "The Archive",
    title: "A portfolio built like a field journal.",
    descriptor: "Architecture-first · precise",
    detail:
      "A restrained, typographic direction for a team that wants its project detail and process to carry the story.",
    palette: "Chalk / graphite / limestone",
  },
  {
    id: "03",
    route: "/concept-03",
    label: "The Field Office",
    title: "A direct route from jobsite to quote.",
    descriptor: "High-contrast · operational",
    detail:
      "An energetic, conversion-focused direction designed around fast scanning, immediate service clarity, and a confident next step.",
    palette: "Graphite / signal orange / salt white",
  },
];

function ConceptRibbon({ active }: { active: string }) {
  return (
    <div className="concept-ribbon" aria-label="Website concept switcher">
      <a className="ribbon-mark" href="/" aria-label="Return to concept gallery">
        <span>CCC</span>
        <i />
      </a>
      <div className="ribbon-links">
        {concepts.map((concept) => (
          <a
            className={active === concept.id ? "is-active" : ""}
            href={concept.route}
            key={concept.id}
          >
            <span>{concept.id}</span>
            {concept.label}
          </a>
        ))}
      </div>
      <a className="ribbon-back" href="/">
        All concepts <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

function SiteHeader({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), []);

  return (
    <header className={`site-header ${dark ? "on-dark" : ""} ${compact ? "compact" : ""}`}>
      <a className="site-wordmark" href="#top" aria-label="Coastal Cornerstone Construction home">
        <span>COASTAL</span>
        <strong>CORNERSTONE</strong>
        <em>CONSTRUCTION</em>
      </a>
      <nav className={`site-links ${open ? "open" : ""}`} aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#approach">Approach</a>
        <a href={CONTACT_URL} target="_blank" rel="noreferrer">
          Start a project <ArrowUpRight size={16} />
        </a>
      </nav>
      <button
        className="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Gallery() {
  return (
    <main className="gallery-shell">
      <section className="gallery-hero" id="top">
        <div className="gallery-grid-line gallery-line-one" />
        <div className="gallery-grid-line gallery-line-two" />
        <div className="gallery-nav">
          <div className="gallery-brand">
            <div className="gallery-brand-mark">C</div>
            <div>
              <span>COASTAL CORNERSTONE</span>
              <strong>CONSTRUCTION</strong>
            </div>
          </div>
          <span className="gallery-note">Three web directions / 2026</span>
        </div>
        <div className="gallery-intro">
          <p className="eyebrow-light">CONCEPT GALLERY / MOBILE-FIRST</p>
          <h1>
            Three ways to
            <br />
            make the work <em>matter.</em>
          </h1>
          <div className="gallery-intro-bottom">
            <p>
              A set of responsive homepage concepts for Coastal Cornerstone Construction. Each direction gives the same
              business a different visual voice, visitor journey, and conversion rhythm.
            </p>
            <span className="gallery-scroll">
              Explore directions <ArrowDownRight size={18} />
            </span>
          </div>
        </div>
      </section>

      <section className="gallery-concepts" aria-label="Website concept directions">
        {concepts.map((concept, index) => (
          <a href={concept.route} className={`gallery-concept-card card-${concept.id}`} key={concept.id}>
            <span className="card-index">0{index + 1}</span>
            <div className="concept-card-art" aria-hidden="true">
              <span className="art-dot" />
              <span className="art-line art-line-a" />
              <span className="art-line art-line-b" />
              <span className="art-block" />
            </div>
            <div className="concept-card-copy">
              <p>{concept.descriptor}</p>
              <h2>{concept.label}</h2>
              <h3>{concept.title}</h3>
              <span className="concept-open">
                Open concept <ArrowUpRight size={17} />
              </span>
            </div>
            <span className="card-palette">{concept.palette}</span>
          </a>
        ))}
      </section>

      <section className="gallery-footnote">
        <p>
          Built to be evaluated on desktop and on the jobsite. Every composition is intentionally different, but each
          prioritizes immediate contact, readable hierarchy, and accessible navigation.
        </p>
        <span>COASTAL CORNERSTONE / DIGITAL DIRECTION</span>
      </section>
    </main>
  );
}

function FoundryConcept() {
  return (
    <main className="concept-page concept-foundry" id="top">
      <ConceptRibbon active="01" />
      <div className="foundry-hero">
        <img src={images.foundry} alt="Conceptual coastal building under construction" />
        <div className="hero-scrim" />
        <SiteHeader dark />
        <div className="foundry-hero-copy">
          <p className="hero-kicker">COASTAL CORNERSTONE CONSTRUCTION</p>
          <h1>
            Built for the
            <br />
            <em>long view.</em>
          </h1>
          <p className="hero-support">
            A grounded, people-first construction partner for the details that define a place.
          </p>
          <div className="hero-actions">
            <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="button-sand">
              Start a project <ArrowUpRight size={18} />
            </a>
            <a href="#work" className="text-link-light">
              Explore our work <MoveRight size={18} />
            </a>
          </div>
        </div>
        <div className="foundry-hero-caption">
          <span>01 / 03</span>
          <span>CONCEPT: THE FOUNDRY</span>
          <span>SCROLL TO DISCOVER</span>
        </div>
      </div>

      <section className="foundry-statement">
        <p className="section-marker">01 — A PARTNER WITH PERSPECTIVE</p>
        <div className="statement-layout">
          <h2>
            Serious about the build.
            <br />
            Thoughtful about <em>everything around it.</em>
          </h2>
          <p>
            This direction treats every page as an introduction to care, collaboration, and capable execution. It uses
            editorial pace, intimate project photography, and room to let the right details land.
          </p>
        </div>
      </section>

      <section className="foundry-work" id="work">
        <div className="section-head-dark">
          <p className="section-marker">02 — SELECTED WORK</p>
          <h2>Spaces that ask more of the process.</h2>
        </div>
        <div className="foundry-project-grid">
          <article className="foundry-project project-tall">
            <div className="project-surface surface-one"><span>FIELD STUDY / 01</span></div>
            <div className="project-meta">
              <div><span>FEATURED SECTOR</span><strong>Commercial & civic</strong></div>
              <p>Thoughtful, durable work that is made to support the people who use it.</p>
            </div>
          </article>
          <article className="foundry-project project-wide">
            <div className="project-meta intro-meta">
              <span>HOW WE THINK</span>
              <h3>Every decision earns its place.</h3>
              <a href="#approach">See our approach <ArrowUpRight size={16} /></a>
            </div>
            <div className="project-surface surface-two"><span>FIELD STUDY / 02</span></div>
          </article>
        </div>
      </section>

      <section className="foundry-services" id="services">
        <p className="section-marker">03 — WHAT WE BRING</p>
        <div className="service-list-foundry">
          {[
            ["01", "Preconstruction", "Clearer decisions before a shovel moves."],
            ["02", "Construction", "Disciplined teams, active communication, and a site that stays in motion."],
            ["03", "Renovation", "Smart sequencing for spaces that need to keep doing their job."],
          ].map(([num, name, copy]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
              <ArrowUpRight size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="foundry-approach" id="approach">
        <div className="approach-art"><div /><span>DETAIL / DISCIPLINE / DIALOGUE</span></div>
        <div className="approach-copy">
          <p className="section-marker">04 — OUR WAY OF WORKING</p>
          <h2>The plan is only the beginning.</h2>
          <p>
            Good construction is a running conversation between the people, the site, and the next decision. This
            experience makes that conversation visible without ever making it feel complicated.
          </p>
          <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="button-ink">
            Tell us what you&apos;re building <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <ConceptFooter variant="foundry" />
    </main>
  );
}

function ArchiveConcept() {
  return (
    <main className="concept-page concept-archive" id="top">
      <ConceptRibbon active="02" />
      <div className="archive-frame">
        <SiteHeader compact />
        <section className="archive-hero">
          <div className="archive-hero-copy">
            <p className="archive-eyebrow">COASTAL CORNERSTONE / EST. FOR THE WORK AHEAD</p>
            <h1>
              Built space.
              <br />
              <span>Proven</span> stewardship.
            </h1>
            <p>
              A calm, architectural direction for a construction brand that lets its discipline speak clearly.
            </p>
            <a href="#work" className="archive-circle-link" aria-label="View selected work">
              <ArrowDownRight size={25} />
              <span>VIEW WORK</span>
            </a>
          </div>
          <div className="archive-hero-image">
            <img src={images.archive} alt="Conceptual architecture detail in concrete and bronze" />
            <div className="image-caption">PROJECT INDEX / WORK THAT HOLDS UP</div>
          </div>
        </section>
      </div>

      <section className="archive-intro" id="work">
        <div className="archive-index">A — 01</div>
        <div className="archive-intro-text">
          <p className="archive-label">THE WORK / A SELECTED INDEX</p>
          <h2>Every project starts with a careful read of what the place needs.</h2>
          <p>
            In this direction, projects don&apos;t sit inside a generic card grid. They unfold like a considered archive:
            disciplined typography, editorial crops, and project detail with enough space to matter.
          </p>
        </div>
      </section>

      <section className="archive-project-list">
        {[
          ["01", "New ground-up work", "A complete build system, translated for the people who will move through it."],
          ["02", "Adaptive renovation", "New performance, respect for context, and a clear path through the existing conditions."],
          ["03", "Public-facing spaces", "Highly visible work built around coordination, care, and the realities of an active community."],
        ].map(([number, title, description]) => (
          <article className="archive-project-row" key={number}>
            <span className="archive-row-no">{number}</span>
            <div className="archive-row-title"><h3>{title}</h3><p>{description}</p></div>
            <div className="archive-row-visual"><span>PROJECT RECORD</span></div>
            <ArrowUpRight size={25} />
          </article>
        ))}
      </section>

      <section className="archive-method" id="services">
        <div className="archive-method-number">02</div>
        <div className="archive-method-content">
          <p className="archive-label">WHAT WE DO / HOW IT CONNECTS</p>
          <h2>A better process makes room for better work.</h2>
          <div className="method-grid">
            {[
              ["Preconstruction", "The right questions, on the table early."],
              ["Field coordination", "A site with a working rhythm and a clear next move."],
              ["Project closeout", "A finished space that begins its next chapter prepared."],
            ].map(([title, text], index) => (
              <div className="method-item" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="archive-cta" id="approach">
        <p>Whether it&apos;s a first conversation or a complicated next phase—</p>
        <h2>Let&apos;s give it a strong foundation.</h2>
        <a href={CONTACT_URL} target="_blank" rel="noreferrer">Talk with the team <ArrowUpRight size={20} /></a>
      </section>

      <ConceptFooter variant="archive" />
    </main>
  );
}

function FieldConcept() {
  return (
    <main className="concept-page concept-field" id="top">
      <ConceptRibbon active="03" />
      <section className="field-hero">
        <img src={images.field} alt="Conceptual elevated construction jobsite view" />
        <div className="field-overlay" />
        <SiteHeader dark />
        <div className="field-stamp">CCC<br /><span>BUILT<br />TO MOVE.</span></div>
        <div className="field-hero-copy">
          <p>COMMERCIAL · CIVIC · RENOVATION</p>
          <h1>When the work<br />has to move,<br /><i>we do too.</i></h1>
          <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="field-cta">
            Request a conversation <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="field-bottom-note">
          <span>01 / 03</span>
          <span>THE FIELD OFFICE</span>
          <span>SCROLL TO SEE HOW WE WORK <ArrowDownRight size={16} /></span>
        </div>
      </section>

      <section className="field-intro" id="services">
        <p className="field-tag">CONSTRUCTION WITHOUT THE RUNAROUND.</p>
        <div className="field-intro-grid">
          <h2>One team.<br />A clear path.<br /><em>Better momentum.</em></h2>
          <div>
            <p>
              This direction puts decision-making, service clarity, and a direct line to the team in front of every visual flourish.
              It&apos;s designed for owners who need a contractor to be easy to reach and even easier to understand.
            </p>
            <a href="#process">HOW WE GET IT DONE <MoveRight size={19} /></a>
          </div>
        </div>
      </section>

      <section className="field-service-tape">
        <div><span>PRECONSTRUCTION</span><i /> <span>GROUND-UP</span><i /> <span>RENOVATION</span><i /> <span>PROJECT MANAGEMENT</span><i /></div>
      </section>

      <section className="field-process" id="process">
        <div className="field-process-head">
          <p>OUR WORKING SYSTEM</p>
          <h2>A build should never feel like a black box.</h2>
        </div>
        <div className="field-process-list">
          {[
            ["01", "Read the room.", "Start with the site, the program, the constraints, and the people who need answers."],
            ["02", "Get everyone moving.", "Align the right people around a plan that can hold up in the field."],
            ["03", "Keep the signal clear.", "Surface what matters, communicate it directly, and make the next decision useful."],
          ].map(([num, title, copy]) => (
            <article key={num}>
              <div className="field-step-num">{num}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Plus size={24} />
            </article>
          ))}
        </div>
      </section>

      <section className="field-work" id="work">
        <div className="field-work-heading"><p>THE RECEIPTS</p><h2>The kind of work that earns the next call.</h2></div>
        <div className="field-work-cards">
          <article className="field-work-card card-a"><span>01</span><h3>Built for use,<br />not just the reveal.</h3><ArrowUpRight size={22} /></article>
          <article className="field-work-card card-b"><span>02</span><h3>Sequenced around<br />real conditions.</h3><ArrowUpRight size={22} /></article>
          <article className="field-work-card card-c"><span>03</span><h3>Close-out that<br />feels complete.</h3><ArrowUpRight size={22} /></article>
        </div>
      </section>

      <section className="field-contact" id="approach">
        <div className="field-contact-copy">
          <p>READY WHEN YOU ARE.</p>
          <h2>Let&apos;s get the<br /><em>right people</em><br />on the next call.</h2>
        </div>
        <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="field-contact-card">
          <span>START A PROJECT</span>
          <ArrowUpRight size={35} />
          <p>Tell us what is on the table. We&apos;ll make the first conversation simple.</p>
        </a>
      </section>

      <ConceptFooter variant="field" />
    </main>
  );
}

function ConceptFooter({ variant }: { variant: "foundry" | "archive" | "field" }) {
  return (
    <footer className={`concept-footer footer-${variant}`}>
      <div className="footer-mark"><span>CCC</span><i /></div>
      <div><p>COASTAL CORNERSTONE CONSTRUCTION</p><span>CONCEPT EXPERIENCE / MOBILE-FIRST</span></div>
      <a href="/">Return to all concepts <ArrowUpRight size={16} /></a>
    </footer>
  );
}

export default function Home() {
  const route = window.location.pathname;
  if (route === "/concept-01") return <FoundryConcept />;
  if (route === "/concept-02") return <ArchiveConcept />;
  if (route === "/concept-03") return <FieldConcept />;
  return <Gallery />;
}
