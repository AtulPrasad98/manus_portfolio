import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Moon,
  Asterisk,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Database,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
  Phone,
  Sparkles,
  Sun,
  Workflow,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Strategic Networking CRM Dashboard",
    category: "Selected project",
    description:
      "A CRM-style dashboard for relationship management, stakeholder engagement tracking, activity prioritisation, and pipeline visualisation.",
    tags: ["CRM", "Dashboard", "Power BI"],
    kind: "crm",
    image: "images/portfolio/project-crm.webp",
    alt: "Abstract relationship map with connected contacts and data cards",
    link: null,
  },
  {
    number: "02",
    title: "AI Email Automation Workflow",
    category: "Published on Gumroad & Payhip",
    description:
      "Designed, tested, and published an end-to-end n8n workflow for automated email triage and response handling.",
    tags: ["n8n", "AI workflow", "Automation"],
    kind: "email",
    image: "images/portfolio/project-email.webp",
    alt: "Abstract automated email-sorting workflow with branching paths",
    link: null,
  },
  {
    number: "03",
    title: "Market sizing & CAGR",
    category: "Allied Analytics · internship workstream",
    description:
      "Applied market-sizing methods and CAGR forecasting using secondary databases and company filings.",
    tags: ["Market research", "Forecasting"],
    kind: "chart",
    image: null,
    alt: "",
    link: null,
  },
  {
    number: "04",
    title: "Competitive benchmarking",
    category: "Allied Analytics · internship workstream",
    description:
      "Structured secondary research and SWOT analysis to compare competitive landscapes across industries.",
    tags: ["SWOT", "Benchmarking"],
    kind: "matrix",
    image: null,
    alt: "",
    link: null,
  },
  {
    number: "05",
    title: "Research-ready Excel",
    category: "Allied Analytics · internship workstream",
    description:
      "Built pivot-ready workbooks with lookup and data-cleaning formulas for high-volume research datasets.",
    tags: ["Excel", "Data cleaning"],
    kind: "spreadsheet",
    image: null,
    alt: "",
    link: null,
  },
  {
    number: "06",
    title: "Research into clear briefs",
    category: "Allied Analytics · internship workstream",
    description:
      "Synthesised multi-industry research into executive summaries for non-technical, client-facing stakeholders.",
    tags: ["Reporting", "Client services"],
    kind: "brief",
    image: null,
    alt: "",
    link: null,
  },
];

const credentials = [
  { issuer: "BNY Mellon", name: "Client Service Job Simulation", source: "Forage" },
  {
    issuer: "Tata",
    name: "Data Visualisation: Empowering Business with Effective Insights",
    source: "Forage",
  },
  { issuer: "Google", name: "Fundamentals of Digital Marketing", source: "Training" },
  { issuer: "DataOwl", name: "Prompt Engineering", source: "Training" },
];

function ProjectVisual({ kind, image, alt }: { kind: string; image: string | null; alt: string }) {
  if (image) {
    return <img className={`project-art project-art--${kind}`} src={`${import.meta.env.BASE_URL}${image}`} alt={alt} loading="lazy" />;
  }

  if (kind === "chart") {
    return (
      <div className="project-graphic graphic-chart" aria-hidden="true">
        <div className="graphic-chart__label">MARKET SIGNAL / GROWTH</div>
        <div className="graphic-chart__plot">
          <span className="chart-bar bar-1" /><span className="chart-bar bar-2" />
          <span className="chart-bar bar-3" /><span className="chart-bar bar-4" />
          <span className="chart-bar bar-5" /><span className="chart-bar bar-6" />
          <svg viewBox="0 0 360 120" preserveAspectRatio="none"><path d="M8 100 C55 91 71 76 111 82 S176 61 207 67 S259 45 286 43 S325 18 352 12" /></svg>
        </div>
        <div className="graphic-chart__foot"><span>BASELINE</span><span>FORECAST</span><span className="graphic-chart__dot">↗</span></div>
      </div>
    );
  }

  if (kind === "matrix") {
    return (
      <div className="project-graphic graphic-matrix" aria-hidden="true">
        <div className="matrix-top"><span>COMPETITIVE LANDSCAPE</span><Asterisk size={18} /></div>
        <div className="matrix-grid">
          {["Strengths", "Gaps", "Openings", "Risks"].map((label, i) => (
            <div className={`matrix-cell matrix-cell--${i + 1}`} key={label}>
              <span className="matrix-cell__index">0{i + 1}</span><b>{label}</b><i /><i />
            </div>
          ))}
        </div>
        <div className="matrix-foot"><span>COMPARE</span><ChevronRight size={13} /><span>SYNTHESISE</span></div>
      </div>
    );
  }

  if (kind === "spreadsheet") {
    return (
      <div className="project-graphic graphic-sheet" aria-hidden="true">
        <div className="sheet-toolbar"><span className="sheet-dot" /><span className="sheet-dot" /><span className="sheet-dot" /><span className="sheet-formula">ƒx &nbsp; Clean inputs → useful pivots</span></div>
        <div className="sheet-table">
          <div className="sheet-row sheet-row--head"><span>INDUSTRY</span><span>REGION</span><span>SIZE</span><span>GROWTH</span></div>
          {[["Healthcare", "APAC", "$42B", "6.8%"], ["Energy", "Global", "$31B", "4.2%"], ["Logistics", "EMEA", "$18B", "7.1%"], ["Materials", "Global", "$26B", "5.4%"]].map((row) => (
            <div className="sheet-row" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>
          ))}
        </div>
        <div className="sheet-foot"><Check size={13} /> <span>FORMULAS IN PLACE</span></div>
      </div>
    );
  }

  return (
    <div className="project-graphic graphic-brief" aria-hidden="true">
      <div className="brief-stamp">FIELD NOTE <span>№ 093</span></div>
      <div className="brief-lines"><i /><i /><i /><i /></div>
      <div className="brief-highlight"><BarChart3 size={19} /><span>Insight, in plain language.</span></div>
      <div className="brief-foot"><span>RESEARCH</span><ArrowRight size={14} /><span>DECISION</span></div>
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);

  function moveHeroPointer(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
    event.currentTarget.style.setProperty("--pointer-rx", `${((x / rect.width) - 0.5) * 7}deg`);
    event.currentTarget.style.setProperty("--pointer-ry", `${((y / rect.height) - 0.5) * -7}deg`);
  }

  function resetHeroPointer(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pointer-rx", "0deg");
    event.currentTarget.style.setProperty("--pointer-ry", "0deg");
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Atul Raj Prasad, back to top">
          <span className="brand-mark" aria-hidden="true"><span /><i /></span>
          <span className="brand-name">ATUL<span> / </span>PRASAD</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={14} /></a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => toggleTheme?.()}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            aria-pressed={theme === "dark"}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <main id="main">
        <section
          className="hero section-wrap"
          id="top"
          ref={heroRef}
          onPointerMove={moveHeroPointer}
          onPointerLeave={resetHeroPointer}
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> ANALYTICS · RESEARCH · AUTOMATION</p>
            <h1 id="hero-title">Making<br /><span>messy info</span><br />make sense<span className="hero-period">.</span></h1>
            <div className="hero-bottomline">
              <p>Market research, data clarity, and smart workflows that help people make better decisions.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={20} /></a>
            </div>
          </div>
          <div className="hero-art-wrap" aria-label="Animated abstract data sculpture that responds to pointer movement">
            <div className="hero-art" />
            <div className="hero-art-grid" aria-hidden="true" />
            <div className="hero-art-caption"><span>FIG. 01</span><span>Signal over noise</span><Asterisk size={16} /></div>
            <div className="hero-orbit orbit-one" aria-hidden="true"><i /></div>
            <div className="hero-orbit orbit-two" aria-hidden="true"><i /></div>
          </div>
          <div className="hero-meta"><span><MapPin size={14} /> Pune, India</span><span>OPEN TO ANALYTICS · CX · OPERATIONS</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span></div>
        </section>

        <section className="signal-strip" aria-label="Career highlights">
          <div className="signal-inner">
            <div className="signal-note"><span className="signal-marker">↗</span><span>Built on real<br />research work.</span></div>
            <div className="stat"><strong>93</strong><span>client-ready<br />research reports</span></div>
            <div className="stat"><strong>10<span className="stat-plus">+</span></strong><span>industries<br />researched</span></div>
            <div className="stat"><strong>&lt;2</strong><span>months to deliver<br />the internship work</span></div>
            <div className="signal-end">A better<br />question changes<br /><em>everything.</em></div>
          </div>
        </section>

        <section className="section section-wrap about-section" id="about" aria-labelledby="about-title">
          <div className="section-kicker"><span>A LITTLE CONTEXT</span><span>THE METHOD, THE MAKING</span></div>
          <div className="about-heading"><h2 id="about-title">Curious by training.<br /><span>Clear by design.</span></h2><p>I bring together market thinking, engineering discipline, and an instinct for making complex things easier to act on.</p></div>
          <div className="about-grid">
            <article className="bento-card bento-intro">
              <div className="bento-overline"><Sparkles size={15} /> THE THROUGH-LINE</div>
              <p>From chemical engineering to marketing management, I’ve always been drawn to how systems work and what the data is really saying.</p>
              <span className="bento-index">01 / POINT OF VIEW</span>
              <div className="intro-scribble" aria-hidden="true">↗</div>
            </article>
            <article className="bento-card bento-capabilities">
              <div className="bento-overline"><Workflow size={15} /> WHAT I BRING</div>
              <div className="capability-list"><span>Market research <ArrowUpRight size={13} /></span><span>Data visualisation <ArrowUpRight size={13} /></span><span>Workflow automation <ArrowUpRight size={13} /></span><span>Customer insights <ArrowUpRight size={13} /></span></div>
            </article>
            <article className="bento-card bento-education">
              <div className="bento-overline"><GraduationCap size={16} /> TWO LENSES, ONE PRACTICE</div>
              <div className="degree-line"><span className="degree-mark">M</span><div><b>PGDM · Marketing Management</b><span>Dr. D.Y. Patil B-School · 2024 to 2026</span></div></div>
              <div className="degree-line"><span className="degree-mark degree-mark--orange">C</span><div><b>B.Tech · Chemical Engineering</b><span>GIET · 2016 to 2021</span></div></div>
            </article>
            <article className="bento-card bento-tools">
              <div className="bento-overline"><Database size={15} /> IN THE TOOLKIT</div>
              <div className="tool-pills"><span>Excel</span><span>Power BI</span><span>n8n</span><span>Zapier</span><span>Prompt engineering</span><span>ChatGPT</span><span>Claude AI</span><span>Microsoft Copilot</span></div>
            </article>
            <article className="bento-card bento-location">
              <div className="bento-overline"><MapPin size={15} /> CURRENTLY BASED</div>
              <div className="location-place">Pune<span>, India</span></div>
              <span className="location-status"><i /> Thinking globally, working thoughtfully.</span>
            </article>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-wrap">
            <div className="section-kicker"><span>SELECTED WORK</span><span>PROJECTS & INTERNSHIP WORKSTREAMS</span></div>
            <div className="work-heading"><div><h2 id="work-title">From signal<br />to <span>something useful.</span></h2><p>Two projects, plus four parts of a fast-moving research practice.</p></div><span className="work-count">06 <i>selected pieces</i></span></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card project-card--${project.kind}`} key={project.number}>
                  <div className="project-visual"><ProjectVisual kind={project.kind} image={project.image} alt={project.alt} /><span className="project-number">{project.number}</span>{project.kind === "crm" && <span className="visual-float visual-float--crm">PEOPLE / PRIORITY / MOMENTUM <ArrowUpRight size={12} /></span>}{project.kind === "email" && <span className="visual-float visual-float--email"><Sparkles size={12} /> SORT. RESPOND. REPEAT.</span>}</div>
                  <div className="project-info"><div className="project-kicker">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
            <p className="work-footnote"><Asterisk size={13} /> The four Allied Analytics entries are internship workstreams, not separate client engagements.</p>
          </div>
        </section>

        <section className="section section-wrap path-section" id="experience" aria-labelledby="path-title">
          <div className="section-kicker"><span>THE PATH SO FAR</span><span>EXPERIENCE & EDUCATION</span></div>
          <div className="path-layout">
            <div className="path-intro"><h2 id="path-title">Work with<br /><span>a point of view.</span></h2><p>Strong analysis doesn’t stop at the spreadsheet. It makes the next step clearer.</p><div className="path-stamp"><BriefcaseBusiness size={18} /><span>EXPERIENCE<br /><b>01 ROLE</b></span></div></div>
            <div className="timeline">
              <article className="timeline-item timeline-item--current"><div className="timeline-rail"><i /><span /></div><div className="timeline-copy"><div className="timeline-top"><span>JUN 2025 TO AUG 2025</span><span className="timeline-badge">INTERNSHIP</span></div><h3>Market Research Intern</h3><p className="timeline-org">Allied Analytics <span>· Pune, India</span></p><p className="timeline-description">Delivered 93 client-ready reports across 10+ industries in under two months. Turned secondary research, market sizing, forecasting, and competitive analysis into clear workbooks and executive summaries.</p><div className="timeline-chips"><span>Market sizing</span><span>CAGR forecasting</span><span>SWOT</span><span>Excel</span></div></div></article>
              <div className="timeline-divider"><span>THE STUDY THAT SHAPED THE PRACTICE</span></div>
              <article className="timeline-item"><div className="timeline-rail"><i /><span /></div><div className="timeline-copy timeline-copy--education"><div className="timeline-top"><span>2024 TO 2026</span><span className="timeline-badge timeline-badge--gold">PGDM</span></div><h3>PGDM, Marketing Management</h3><p className="timeline-org">Dr. D.Y. Patil B-School <span>· Pune, India</span></p></div></article>
              <article className="timeline-item"><div className="timeline-rail"><i /><span /></div><div className="timeline-copy timeline-copy--education"><div className="timeline-top"><span>2016 TO 2021</span><span className="timeline-badge timeline-badge--neutral">COMPLETED</span></div><h3>B.Tech, Chemical Engineering</h3><p className="timeline-org">Gandhi Institute of Engineering and Technology <span>· Gunupur, India</span></p></div></article>
            </div>
          </div>
        </section>

        <section className="section credentials-section" id="credentials" aria-labelledby="credentials-title">
          <div className="section-wrap">
            <div className="credentials-layout">
              <div className="credentials-intro"><div className="section-kicker"><span>KEEPING CURIOUS</span></div><h2 id="credentials-title">A few useful<br /><span>extra lenses.</span></h2><p>Certifications and training listed in my résumé. Talks and awards aren’t listed there, so I’ve left the spotlight where the facts are.</p><a className="text-link" href="https://linkedin.com/in/atulrajprasad" target="_blank" rel="noreferrer">More on LinkedIn <MoveUpRight size={15} /></a></div>
              <div className="credential-list">{credentials.map((item, index) => <article className="credential-row" key={item.name}><span className="credential-index">0{index + 1}</span><div><span className="credential-issuer">{item.issuer} <i>· {item.source}</i></span><h3>{item.name}</h3></div><ArrowUpRight size={16} className="credential-arrow" /></article>)}</div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-wrap section-wrap">
            <div className="contact-orbit" aria-hidden="true"><span /><i /><b /></div>
            <div className="contact-content"><p className="eyebrow"><span className="live-dot" /> OPEN TO ANALYTICS · CX · OPERATIONS</p><h2 id="contact-title">Have a good<br />question<span>?</span></h2><p className="contact-subline">Let’s turn it into a useful next step.</p>
              <div className="contact-links"><a href="mailto:atulprasad1557@gmail.com"><span className="contact-icon"><Mail size={16} /></span>atulprasad1557@gmail.com<ArrowUpRight size={15} /></a><a href="tel:+918407801849"><span className="contact-icon"><Phone size={16} /></span>+91 8407801849<ArrowUpRight size={15} /></a><a href="https://linkedin.com/in/atulrajprasad" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={16} /></span>LinkedIn profile<ArrowUpRight size={15} /></a></div>
            </div>
            <div className="contact-note"><span>THE BEST WORK STARTS WITH</span><b>“What if we<br />look at it differently?”</b><Asterisk size={21} /></div>
          </div>
          <footer className="site-footer section-wrap"><a className="footer-brand" href="#top">ARP<span>↗</span></a><span>Market research · Data clarity · Smart workflows</span><span>© {new Date().getFullYear()} Atul Raj Prasad</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
        </section>
      </main>
    </div>
  );
}
