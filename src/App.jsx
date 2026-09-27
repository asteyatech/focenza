import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, CheckCircle2, ChevronDown,
  CircleHelp, Clock3, EyeOff, Focus, GraduationCap, Menu, MonitorPlay, NotebookPen, Play, Search,
  ShieldCheck, Sparkles, Timer, UsersRound, X, Youtube, Lightbulb, Bug, MessageSquareText,
  Compass, ListChecks, Chrome, CircleDot, LockKeyhole, ExternalLink,
} from 'lucide-react'
import { CHROME_WEB_STORE_URL, SUPPORT_SUBMISSION_ENDPOINT, featureData, faqData, productLinks, roadmapData } from './config'

const iconMap = { EyeOff, NotebookPen, Timer, ShieldCheck }
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Installation', to: '/installation' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

function Brand({ footer = false }) {
  return <Link className={`brand${footer ? ' brand-footer' : ''}`} to="/" aria-label="BingeBlocker home">
    <span className="brand-mark"><Focus size={19} strokeWidth={2.2} /></span>
    <span className="brand-name">binge<span>blocker</span></span>
  </Link>
}

function InstallLink({ className = 'button button-primary', children = 'Add to Chrome' }) {
  return CHROME_WEB_STORE_URL
    ? <a className={className} href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={16} /></a>
    : <Link className={className} to="/installation#store">{children}<ArrowRight size={16} /></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return <header className="site-header">
    <div className="nav-shell">
      <Brand />
      <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {navigation.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
        <InstallLink className="button button-primary mobile-install">Add to Chrome</InstallLink>
      </nav>
      <div className="nav-actions">
        <InstallLink className="button button-primary nav-install">Add to Chrome</InstallLink>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </div>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <Brand footer />
        <p className="footer-tagline">Focus Without Friction.</p>
        <p className="footer-copy">A calmer, more intentional YouTube experience for learning.</p>
      </div>
      <div className="footer-column"><h3>Explore</h3>{productLinks.map(x => <Link key={x.to} to={x.to}>{x.label}</Link>)}<Link to="/changelog">Changelog</Link><Link to="/roadmap">Roadmap</Link></div>
      <div className="footer-column"><h3>Help & info</h3><Link to="/installation">Installation guide</Link><Link to="/support">Support & feedback</Link><Link to="/privacy">Privacy policy</Link><span className="footer-placeholder">Terms of service · coming later</span></div>
      <div className="footer-note"><span className="tiny-icon"><Sparkles size={16} /></span><p>Designed for more meaningful time online.</p><span>A venture by <strong>Asteya.</strong></span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} BingeBlocker</span><span>Made for learning, not scrolling.</span></div>
  </footer>
}

function Layout() {
  return <><Header /><main><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/features" element={<FeaturesPage />} />
    <Route path="/how-it-works" element={<HowItWorksPage />} />
    <Route path="/installation" element={<InstallationPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="/changelog" element={<ChangelogPage />} />
    <Route path="/roadmap" element={<RoadmapPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></main><Footer /></>
}

const pageMeta = {
  '/': ['BingeBlocker — Focus Without Friction', 'Turn YouTube into your learning space. Less scrolling, fewer distractions, more meaningful learning.'],
  '/features': ['Features — BingeBlocker', 'Explore focus mode, learning notes, session timing, and channel controls.'],
  '/how-it-works': ['How It Works — BingeBlocker', 'A simple guide to getting started with focused learning on YouTube.'],
  '/installation': ['Installation Guide — BingeBlocker', 'Learn how to install and set up BingeBlocker in Chrome.'],
  '/about': ['About — BingeBlocker', 'Our mission is to help people take control of their YouTube experience.'],
  '/faq': ['FAQ — BingeBlocker', 'Answers to common questions about BingeBlocker.'],
  '/privacy': ['Privacy — BingeBlocker', 'Privacy information for BingeBlocker.'],
  '/support': ['Support — BingeBlocker', 'Get help or share feedback about BingeBlocker.'],
  '/changelog': ['Changelog — BingeBlocker', 'Product updates and release notes.'],
  '/roadmap': ['Roadmap — BingeBlocker', 'A transparent look at ideas under consideration.'],
}

function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ['Page not found — BingeBlocker', 'Explore BingeBlocker.']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [pathname])
  return null
}

function App() {
  return <><PageMeta /><Layout /></>
}

function Eyebrow({ children, icon: Icon = Sparkles }) {
  return <div className="eyebrow"><span><Icon size={13} /></span>{children}</div>
}

function PageIntro({ eyebrow, title, subtitle, centered = true }) {
  return <div className={`page-intro${centered ? ' centered' : ''}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </div>
}

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return <div className={`section-heading align-${align}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
}

function SectionLink({ to, children = 'Explore all features' }) {
  return <Link className="text-link" to={to}>{children}<ArrowRight size={16} /></Link>
}

function FeatureCard({ feature, compact = false }) {
  const Icon = iconMap[feature.icon] || Sparkles
  return <article className={`feature-card${compact ? ' compact' : ''}`}>
    <div className="feature-icon"><Icon size={21} /></div>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
    <Link className="card-link" to={`/features#${feature.id}`}>Learn more<ArrowRight size={15} /></Link>
  </article>
}

function ProductMockup({ type = 'dashboard', small = false }) {
  return <div className={`mockup mockup-${type}${small ? ' mockup-small' : ''}`} aria-label="Illustrative BingeBlocker interface preview">
    <div className="mock-topbar"><span className="mock-logo"><Focus size={14} /></span><span className="mock-wordmark">binge<span>blocker</span></span><div className="mock-top-spacer" /><span className="mock-window-dot" /><span className="mock-window-dot" /><span className="mock-window-dot" /></div>
    {type === 'youtube' || type === 'dashboard' ? <div className="mock-content">
      <aside className="mock-side"><span className="side-active"><Youtube size={15} /></span><span><BookOpen size={15} /></span><span><Clock3 size={15} /></span></aside>
      <div className="mock-main">
        <div className="mock-video"><div className="play-button"><Play size={15} fill="currentColor" /></div><div className="video-caption">LESS NOISE. MORE LEARNING.</div><div className="video-progress"><span /></div></div>
        <div className="mock-video-title">Understanding the fundamentals</div>
        <div className="mock-subtext">A focused lesson · 18 min</div>
        <div className="mock-channel"><span className="channel-avatar">L</span><span>Learning studio<small>Educational video</small></span><span className="follow-pill">Learning</span></div>
      </div>
      <div className="mock-panel">
        <div className="panel-title"><span><Focus size={13} /> Focus session</span><span className="live-dot" /></div>
        <div className="timer-value">24<span>:</span>08</div>
        <span className="timer-label">TIME IN SESSION</span>
        <div className="mock-divider" />
        <div className="setting-row"><span>Focus Mode</span><span className="switch on"><i /></span></div>
        <div className="setting-row"><span>Notes panel</span><Check size={14} className="check-blue" /></div>
        <div className="note-mini"><span>QUICK NOTE</span><p>Review the key idea<br />before moving on...</p></div>
      </div>
    </div> : type === 'notes' ? <div className="notes-preview">
      <div className="notes-toolbar"><span><NotebookPen size={14} /> My learning notes</span><span className="save-state">Example preview</span></div>
      <h4>Understanding the fundamentals</h4><p className="notes-meta">Learning session · Today</p>
      <div className="note-rule" /><p className="note-copy">Key ideas to remember</p>
      <div className="note-lines"><span>Start with the core concept.</span><span>Connect each new idea to an example.</span><span>Pause and summarize in my own words.</span></div>
      <div className="notes-footer"><span>Example content</span><span>Notes interface preview</span></div>
    </div> : type === 'timer' ? <div className="timer-preview">
      <div className="timer-preview-icon"><Timer size={17} /></div><span className="timer-preview-label">FOCUS SESSION</span><div className="timer-large">24:08</div><span className="timer-description">A little progress adds up.</span>
      <div className="timer-controls" aria-label="Illustrative timer controls"><span><i className="pause-symbol" /></span><span><i className="stop-symbol" /></span></div>
      <div className="session-summary"><span>SESSION SUMMARY <small>Preview</small></span><strong><Clock3 size={15} /> 24 min <small>focused</small></strong></div>
    </div> : <div className="whitelist-preview">
      <div className="whitelist-title"><span><ShieldCheck size={16} /> Allowed channels</span><button type="button">+ Add channel</button></div>
      {['Learning studio', 'The Study Room', 'Science, simply'].map((item, i) => <div className="channel-list-row" key={item}><span className={`channel-avatar avatar-${i}`}>{item[0]}</span><span>{item}<small>youtube.com</small></span><Check size={15} /></div>)}
      <div className="whitelist-footnote">Example settings preview</div>
    </div>}
  </div>
}

function CtaSection() {
  return <section className="container cta-section">
    <div className="cta-card"><div className="cta-orb orb-one" /><div className="cta-orb orb-two" />
      <div className="cta-content"><Eyebrow>YOUR NEXT SESSION STARTS HERE</Eyebrow><h2>Ready to take control<br />of your focus?</h2><p>Install BingeBlocker and experience YouTube the way you want.</p>
        <div className="button-row"><InstallLink /><Link className="button button-quiet" to="/features">Explore features<ArrowRight size={16} /></Link></div>
      </div><div className="cta-art"><div className="cta-art-ring ring-a" /><div className="cta-art-ring ring-b" /><span><Focus size={39} /></span><i className="art-dot dot-a" /><i className="art-dot dot-b" /></div>
    </div>
  </section>
}

function HomePage() {
  const audiences = [
    [GraduationCap, 'Students', 'Build focused study habits, one session at a time.'],
    [ListChecks, 'Exam aspirants', 'Stay intentional while preparing for what matters.'],
    [Lightbulb, 'Self-learners', 'Make space for curiosity without the rabbit holes.'],
    [UsersRound, 'Educators', 'Support more focused learning sessions.'],
  ]
  return <>
    <section className="hero-section">
      <div className="container hero-grid"><div className="hero-copy">
        <Eyebrow>FOCUS WITHOUT FRICTION</Eyebrow>
        <h1>Turn YouTube into your <span>learning space.</span></h1>
        <p className="hero-subtitle">Less scrolling. Fewer distractions.<br className="desktop-break" /> More meaningful learning.</p>
        <div className="button-row"><InstallLink /><Link className="button button-secondary" to="/features">Explore features<ArrowRight size={16} /></Link></div>
        <div className="hero-trust"><span><CheckCircle2 size={15} /> Free to start*</span><span className="trust-divider" /><span>Made for Chrome</span></div>
        <span className="fine-print">*Availability and pricing details are subject to the official listing.</span>
      </div><div className="hero-visual"><div className="visual-glow" /><div className="visual-label"><span className="live-dot" /> A more intentional YouTube</div><ProductMockup /></div></div>
      <div className="hero-bottom container"><span>MAKE ROOM FOR WHAT MATTERS</span><ArrowDownRight size={15} /><span className="hero-bottom-line" /></div>
    </section>
    <section className="section-block problem-section"><div className="container"><SectionHeading eyebrow="A BETTER WAY TO WATCH" title="You came to learn. Let’s keep it that way." subtitle="YouTube is full of knowledge—but distractions can make it easy to lose your place." />
      <div className="problem-grid">
        <article className="contrast-card problem-card"><div className="contrast-card-top"><span className="contrast-icon muted"><CircleHelp size={19} /></span><span className="tag tag-muted">THE CHALLENGE</span></div><h3>YouTube is designed to keep you scrolling.</h3><p>Endless recommendations, Shorts, and side quests can interrupt the video you came to watch.</p><div className="challenge-list"><span><ArrowRight size={14} /> One video turns into many</span><span><ArrowRight size={14} /> A feed competes with your focus</span><span><ArrowRight size={14} /> It’s easy to lose your learning flow</span></div></article>
        <article className="contrast-card solution-card"><div className="contrast-card-top"><span className="contrast-icon blue"><Focus size={19} /></span><span className="tag tag-blue">A CALMER EXPERIENCE</span></div><h3>Meet BingeBlocker.</h3><p>A simple Chrome extension that helps you reduce distractions and make YouTube a more productive learning space.</p><div className="solution-pills"><span><EyeOff size={14} /> Clear the noise</span><span><Timer size={14} /> Stay intentional</span><span><NotebookPen size={14} /> Keep learning</span></div></article>
      </div>
    </div></section>
    <section className="section-block feature-section"><div className="container"><SectionHeading eyebrow="LESS NOISE, MORE PROGRESS" title="Powerful features. Thoughtfully simple." subtitle="Everything you need to build better learning habits." />
      <div className="feature-grid">{featureData.map(f => <FeatureCard feature={f} key={f.id} />)}</div>
      <div className="section-footer"><span>Small tools. A more focused experience.</span><SectionLink to="/features" /></div>
    </div></section>
    <section className="section-block steps-section"><div className="container"><SectionHeading eyebrow="A SIMPLE ROUTINE" title="How it works" subtitle="Get started in four simple steps." />
      <div className="step-grid">{[
        [Chrome, 'Install', 'Add BingeBlocker from the Chrome Web Store.'],
        [ListChecks, 'Configure', 'Set your preferences and choose allowed channels.'],
        [MonitorPlay, 'Start learning', 'Open YouTube and enjoy a focused experience.'],
        [Clock3, 'Track progress', 'Use the timer and notes to stay consistent.'],
      ].map(([Icon, title, text], i) => <article className="step-card" key={title}><div className="step-number">{String(i + 1).padStart(2, '0')}<span /></div><div className="step-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="steps-action"><SectionLink to="/how-it-works">See how it works</SectionLink></div>
    </div></section>
    <section className="section-block preview-section"><div className="container"><SectionHeading eyebrow="A PEEK INSIDE" title="See it in action" subtitle="A cleaner YouTube. A calmer mind." />
      <div className="preview-grid">{[
        ['youtube', EyeOff, 'Focus Mode', 'Make more room for the video you came to watch.', 'focus-mode'],
        ['notes', NotebookPen, 'Notes Panel', 'Keep important ideas close as you learn.', 'notes-panel'],
        ['timer', Timer, 'Session timer', 'Give your learning time a clear beginning.', 'session-timer'],
      ].map(([type, Icon, title, copy, id]) => <article className="preview-card" key={type}><ProductMockup type={type} small /><div className="preview-card-copy"><div className="preview-icon"><Icon size={17} /></div><h3>{title}</h3><p>{copy}</p><Link className="card-link" to={`/features#${id}`}>Explore feature<ArrowRight size={15} /></Link></div></article>)}</div>
    </div></section>
    <section className="section-block audience-section"><div className="container"><SectionHeading eyebrow="MADE FOR CURIOUS MINDS" title="Built for learners" subtitle="Wherever you are in your learning journey, make YouTube work for you." />
      <div className="audience-grid">{audiences.map(([Icon, title, copy]) => <article className="audience-card" key={title}><span><Icon size={19} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <CtaSection />
  </>
}

function FeatureShowcase({ feature, reverse = false }) {
  const Icon = iconMap[feature.icon] || Sparkles
  const type = feature.id === 'notes-panel' ? 'notes' : feature.id === 'session-timer' ? 'timer' : feature.id === 'channel-whitelist' ? 'whitelist' : 'youtube'
  return <section className={`feature-showcase${reverse ? ' reverse' : ''}`} id={feature.id}>
    <div className="feature-detail-copy"><div className="feature-icon"><Icon size={21} /></div><span className="detail-kicker">0{featureData.indexOf(feature) + 1} / 04 · {feature.title.toUpperCase()}</span><h2>{feature.detail}</h2><p>{feature.body}</p><ul className="check-list">{feature.bullets.map(b => <li key={b}><CheckCircle2 size={16} />{b}</li>)}</ul><InstallLink className="button button-primary">Get started<ArrowRight size={16} /></InstallLink></div>
    <div className="feature-detail-visual"><span className="visual-backdrop" /><ProductMockup type={type} /></div>
  </section>
}

function FeaturesPage() {
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="DESIGNED AROUND YOUR FOCUS" title={<>Everything you need to stay<br className="desktop-break" /> focused and learn.</>} subtitle="Small, thoughtful tools to make your time on YouTube feel like your own." />
    <div className="feature-quicklinks">{featureData.map((f, i) => <a key={f.id} href={`#${f.id}`}><span>0{i + 1}</span>{f.title}<ArrowDownRight size={15} /></a>)}</div>
    {featureData.map((f, i) => <FeatureShowcase feature={f} reverse={i % 2 === 1} key={f.id} />)}
    <div className="info-callout"><LockKeyhole size={17} /><p>Product previews are illustrative. Available controls and data handling depend on the extension version you install.</p><Link to="/privacy">Read privacy information<ArrowRight size={14} /></Link></div>
    <CtaSection />
  </div></div>
}

function HowItWorksPage() {
  const items = [
    [Chrome, 'Install the extension', 'Start with the official Chrome Web Store listing. Review its current permissions and install it from Chrome.', 'installation'],
    [ListChecks, 'Configure your preferences', 'Open the extension and review the available focus settings. Add channels you want to keep accessible if whitelist controls are available.', 'features#channel-whitelist'],
    [Youtube, 'Start a focused YouTube session', 'Head to YouTube, enable Focus Mode, and settle into the educational video you came to watch.', 'features#focus-mode'],
    [NotebookPen, 'Track time and take notes', 'Use the session timer and Notes Panel when they are available in your installed version to support your learning routine.', 'features#notes-panel'],
  ]
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="FROM INSTALL TO INTENTION" title={<>A little setup.<br /><span className="blue-text">A more focused session.</span></>} subtitle="Four steps to a calmer, more intentional YouTube learning routine." />
    <div className="journey-list">{items.map(([Icon, title, text, to], i) => <article className="journey-step" key={title}><div className="journey-rail"><span>{String(i + 1).padStart(2, '0')}</span>{i < items.length - 1 && <i />}</div><div className="journey-body"><div className="journey-text"><div className="step-icon"><Icon size={18} /></div><h2>{title}</h2><p>{text}</p><Link className="text-link" to={`/${to}`}>{i === 0 ? 'Read installation guide' : 'Explore this step'}<ArrowRight size={15} /></Link></div><div className="journey-preview"><ProductMockup type={i === 1 ? 'whitelist' : i === 3 ? 'notes' : i === 2 ? 'youtube' : 'timer'} small /></div></div></article>)}</div>
    <CtaSection />
  </div></div>
}

function InstallationPage() {
  const steps = [
    ['01', 'Open the official listing', 'Use the Chrome Web Store button above to visit the official listing. Verify the publisher and listing details before installing.'],
    ['02', 'Click “Add to Chrome”', 'Choose Add to Chrome on the listing page to begin the installation.'],
    ['03', 'Review permissions', 'Read the permissions requested by the extension in Chrome, then confirm only if you are comfortable.'],
    ['04', 'Pin BingeBlocker', 'Open Chrome’s Extensions menu and use the pin control to keep BingeBlocker within easy reach.'],
    ['05', 'Open YouTube and configure', 'Visit YouTube, open the extension, and review the controls available in your installed version.'],
  ]
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="YOUR FOCUS STARTS HERE" title="Get started with BingeBlocker." subtitle="Install the extension and set up your focused learning environment in minutes." />
    <section className="install-card" id="store"><div className="install-card-glow" /><div className="store-product"><div className="chrome-icon"><Chrome size={25} /></div><div className="product-icon"><Focus size={24} /></div><div><span className="store-overline">CHROME WEB STORE</span><h2>BingeBlocker</h2><p>Focus Without Friction.</p></div></div>
      <p className="store-description">A focused YouTube experience for students and lifelong learners.</p>
      {CHROME_WEB_STORE_URL ? <InstallLink className="button button-primary">Install from Chrome Web Store<ExternalLink size={15} /></InstallLink> : <div className="config-notice"><CircleHelp size={16} /><span>Official listing URL not configured. Set <code>VITE_CHROME_WEB_STORE_URL</code> before publishing this install link.</span></div>}
      <span className="store-footnote">Always review the publisher, listing details, and requested permissions before installing.</span>
    </section>
    <section className="installation-guide"><div className="guide-heading"><Eyebrow icon={ListChecks}>QUICK START</Eyebrow><h2>From the store to your study session.</h2><p>Follow these steps in Chrome to get set up.</p></div>
      <div className="install-steps">{steps.map(([number, title, text], i) => <article className="install-step" key={number}><div className="install-step-number">{number}</div><div className="install-step-copy"><h3>{title}</h3><p>{text}</p></div><div className="install-step-visual"><div className={`step-visual-card step-visual-${i}`}><span className="step-visual-symbol">{i === 0 ? <Chrome size={19} /> : i === 1 ? <ArrowDownRight size={19} /> : i === 2 ? <ShieldCheck size={19} /> : i === 3 ? <ListChecks size={19} /> : <Youtube size={19} />}</span><span>{['Official Chrome listing', 'Add to Chrome', 'Permission review', 'Extensions menu', 'Focused learning'][i]}</span><small>Illustrative setup step</small></div></div></article>)}</div>
    </section>
    <div className="setup-grid"><article className="setup-card"><span><MonitorPlay size={18} /></span><h3>Browser requirements</h3><p>BingeBlocker is intended for Google Chrome. Exact minimum browser versions and compatibility requirements have not been provided; check the official listing for current details.</p></article><article className="setup-card"><span><PinIcon /></span><h3>Pin the extension</h3><p>In Chrome, open the Extensions menu from the toolbar, find BingeBlocker, then select the pin icon if available.</p></article><article className="setup-card"><span><Focus size={18} /></span><h3>Enable Focus Mode</h3><p>Open the extension popup and use the Focus Mode control offered by your installed version. See the feature guide for an overview.</p><Link to="/features#focus-mode">Focus Mode guide<ArrowRight size={14} /></Link></article><article className="setup-card"><span><ShieldCheck size={18} /></span><h3>Configure your channels</h3><p>If supported in your version, add the YouTube channels you want to keep accessible to the Channel Whitelist.</p><Link to="/features#channel-whitelist">Whitelist guide<ArrowRight size={14} /></Link></article><article className="setup-card"><span><NotebookPen size={18} /></span><h3>Use the Notes Panel</h3><p>Open the Notes Panel from the extension interface to jot down ideas while you learn. Save and sync options depend on your version.</p><Link to="/features#notes-panel">Notes guide<ArrowRight size={14} /></Link></article><article className="setup-card"><span><Timer size={18} /></span><h3>Start a focus session</h3><p>Use the session timer controls presented in your installed extension. This website does not assume session history or analytics behavior.</p><Link to="/features#session-timer">Timer guide<ArrowRight size={14} /></Link></article></div>
    <section className="troubleshoot"><div><Eyebrow icon={CircleHelp}>NEED A HAND?</Eyebrow><h2>Having trouble getting set up?</h2><p>Confirm Chrome is up to date, revisit the permissions prompt, and check that the extension is enabled in Chrome’s Extensions page. If it still isn’t working, you can share feedback.</p><Link to="/support" className="button button-secondary">Visit support<ArrowRight size={15} /></Link></div><div className="trouble-icon"><Bug size={35} /></div></section>
  </div></div>
}

function PinIcon() { return <ArrowUpRight size={18} /> }

function AboutPage() {
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="A NOTE ON WHY WE’RE HERE" title={<>About <span className="blue-text">BingeBlocker</span></>} subtitle="A more intentional relationship with the videos we choose to watch." />
    <section className="about-mission"><div className="about-art"><div className="about-art-grid" /><div className="about-orbit orbit-1" /><div className="about-orbit orbit-2" /><span className="about-art-center"><Focus size={40} /></span><span className="about-art-chip chip-1"><BookOpen size={16} /></span><span className="about-art-chip chip-2"><Lightbulb size={16} /></span></div><div className="about-copy"><Eyebrow icon={Compass}>OUR MISSION</Eyebrow><h2>Make room for the reason you opened YouTube.</h2><p>BingeBlocker was created to help people take control of their YouTube experience and build a more focused learning environment.</p><p>We believe a little more intention can change how time online feels. BingeBlocker aims to reduce supported distractions while keeping educational videos at the center of the experience.</p></div></section>
    <div className="about-principles"><article><span>01</span><h3>Why we exist</h3><p>Learning online should feel less like navigating a maze of recommendations and more like making progress on what you came to learn.</p></article><article><span>02</span><h3>What we aim to do</h3><p>Give learners practical controls that help shape a calmer YouTube experience, without promising a perfect or distraction-free internet.</p></article><article><span>03</span><h3>Where we’re going</h3><p>We envision digital learning spaces that respect people’s time, attention, and curiosity.</p></article></div>
    <div className="asteya-note"><Sparkles size={17} /><p><strong>BingeBlocker is a venture by Asteya.</strong><br />An independent product focused on supporting more intentional learning.</p></div>
    <CtaSection />
  </div></div>
}

function FAQPage() {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(null)
  const matches = faqData.filter(([q, a]) => `${q} ${a}`.toLowerCase().includes(query.toLowerCase().trim()))
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="GOOD QUESTIONS" title="Questions, answered." subtitle="Clear, honest answers to help you get to know BingeBlocker." />
    <div className="faq-search"><Search size={18} /><input aria-label="Search frequently asked questions" placeholder="Search questions..." value={query} onChange={e => setQuery(e.target.value)} />{query && <button type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={16} /></button>}</div>
    <div className="faq-layout"><aside className="faq-side-note"><div className="faq-aside-icon"><CircleHelp size={20} /></div><h3>Still curious?</h3><p>We’re happy to help. Visit support for bug reports and feedback.</p><Link to="/support">Get support<ArrowRight size={14} /></Link><div className="faq-side-rule" /><span>14 questions</span><span>Thoughtful answers</span></aside><div className="accordion-list" aria-live="polite">
      {matches.length ? matches.map(([question, answer], i) => <article className={`faq-item${expanded === question ? ' expanded' : ''}`} key={question}><button className="faq-question" type="button" aria-expanded={expanded === question} onClick={() => setExpanded(expanded === question ? null : question)}><span className="faq-number">{String(faqData.findIndex(f => f[0] === question) + 1).padStart(2, '0')}</span><span>{question}</span><ChevronDown size={17} /></button>{expanded === question && <div className="faq-answer"><p>{answer}</p></div>}</article>) : <div className="empty-state"><Search size={20} /><h3>No matching questions</h3><p>Try a different search term, or reach out to support.</p></div>}
    </div></div>
    <div className="faq-disclaimer"><LockKeyhole size={15} /><span>Some extension details depend on the version available to you. Always refer to the current Chrome Web Store listing and in-product settings.</span></div>
  </div></div>
}

function PrivacyPage() {
  const policies = [
    ['Introduction', 'This page covers the BingeBlocker website and the information currently available about the extension. The extension’s production data practices have not been supplied for verification. Before publishing, review the shipped extension, its permissions, and any services it uses.'],
    ['This website', 'The website does not include analytics code. When support is in demo mode, form entries are validated in your browser and are not sent or saved. If a submission endpoint is configured, support form fields are sent to that endpoint by a POST request; the endpoint operator’s handling and retention practices must be disclosed separately.'],
    ['External services', 'The website loads the DM Sans and Manrope typefaces from Google Fonts. Your browser requests those font files from Google when they are needed. Hosting and infrastructure providers may also process connection data when you visit the site; their practices depend on the chosen hosting provider.'],
    ['Extension data collected', 'Not verified. This website does not make a claim about what the browser extension collects. Consult the extension’s verified privacy disclosures before installation.'],
    ['Data stored locally', 'Not verified. Whether notes, preferences, or session information are stored locally—and for how long—must be confirmed against the extension implementation.'],
    ['Data sent to external services', 'Not verified. Any network requests, analytics, or third-party services used by the extension must be documented here before launch.'],
    ['Browser permissions', 'Permissions may vary by release. Review Chrome’s permission prompt and the official store listing. Explain the purpose of each permission here after verifying it against the shipped code.'],
    ['Third-party services', 'This website uses Google Fonts as described above. No analytics service is included in this website code. Verify all third-party services used by the extension separately before publication.'],
    ['Data retention and your controls', 'Retention periods and available data controls have not been verified. Add accurate instructions for viewing, exporting, or deleting data once confirmed.'],
    ['Contact', 'Add a verified privacy contact address or support channel before publishing this policy. Do not send sensitive data until an official contact method is provided.'],
  ]
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="YOUR PRIVACY MATTERS" title="Privacy, in plain language." subtitle="An honest overview of what is known—and what still needs to be verified." />
    <div className="privacy-layout"><aside className="privacy-aside"><div className="privacy-mark"><LockKeyhole size={20} /></div><span>PRIVACY NOTICE</span><p>Last updated: <strong>[Date to be added]</strong></p><Link to="/"> <ArrowLeft size={14} /> Back to home</Link><div className="privacy-aside-rule" /><small>This template is not a substitute for a verified privacy review.</small></aside><article className="privacy-document"><div className="privacy-warning"><CircleHelp size={18} /><div><strong>Publication note</strong><p>Extension data practices were not available to verify while building this website. This page intentionally avoids unsupported privacy promises and must be completed before launch.</p></div></div>{policies.map(([title, text], i) => <section className="policy-section" key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</article></div>
  </div></div>
}

function SupportForm({ kind }) {
  const bug = kind === 'bug'
  const [state, setState] = useState({ status: 'idle', message: '' })
  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (!SUPPORT_SUBMISSION_ENDPOINT) {
      setState({ status: 'demo', message: 'Demo only: your form was validated in this browser but was not sent or saved. Configure VITE_SUPPORT_SUBMISSION_ENDPOINT to enable delivery.' })
      return
    }
    setState({ status: 'sending', message: '' })
    try {
      const response = await fetch(SUPPORT_SUBMISSION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: kind, ...data }),
      })
      if (!response.ok) throw new Error(`Submission failed (${response.status}). Please try again later.`)
      form.reset()
      setState({ status: 'success', message: bug ? 'Your bug report was submitted. Thank you for helping us improve.' : 'Your suggestion was submitted. Thank you for sharing your idea.' })
    } catch (error) {
      setState({ status: 'error', message: error instanceof Error ? error.message : 'We could not submit your message. Please try again.' })
    }
  }
  return <form className="support-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Name <span>(optional)</span><input name="name" autoComplete="name" placeholder="Your name" /></label><label>Email <span>(optional)</span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label></div>
    {bug ? <><label>Issue category<select name="category" required defaultValue=""><option value="" disabled>Select a category</option><option>Focus Mode</option><option>Notes Panel</option><option>Session timer</option><option>Channel Whitelist</option><option>Installation</option><option>Other</option></select></label><div className="form-row"><label>Browser<input name="browser" placeholder="e.g. Chrome" /></label><label>Extension version<input name="version" placeholder="If known" /></label></div><label>Describe the issue<textarea name="description" rows="5" required minLength="12" placeholder="What happened? What did you expect to happen?" /></label></>
      : <><label>Feature title<input name="title" required maxLength="120" placeholder="A short title for your idea" /></label><label>Tell us more<textarea name="description" rows="5" required minLength="12" placeholder="How would this help your learning experience?" /></label></>}
    <button className="button button-primary" type="submit" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending…' : bug ? 'Submit bug report' : 'Submit feedback'}{state.status !== 'sending' && <ArrowRight size={15} />}</button>
    {state.message && <p className={`form-feedback ${state.status}`} role="status">{state.status === 'success' ? <CheckCircle2 size={17} /> : state.status === 'error' ? <CircleHelp size={17} /> : <CircleHelp size={17} />}{state.message}</p>}
  </form>
}

function SupportPage() {
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="WE’RE HERE TO HELP" title="Let’s make it better." subtitle="Found a snag or have an idea? Share it with us." />
    {!SUPPORT_SUBMISSION_ENDPOINT && <div className="demo-banner"><CircleHelp size={18} /><p><strong>Forms are in demo mode.</strong> Entries are validated in your browser only and are not delivered. Set <code>VITE_SUPPORT_SUBMISSION_ENDPOINT</code> to connect a backend.</p></div>}
    <div className="support-grid"><section className="support-card"><div className="support-card-heading"><span className="support-icon bug-icon"><Bug size={19} /></span><div><span className="form-label-top">HELP US FIX IT</span><h2>Report a bug</h2></div></div><p className="support-card-intro">Tell us what went wrong so we can understand the issue.</p><SupportForm kind="bug" /></section><section className="support-card"><div className="support-card-heading"><span className="support-icon idea-icon"><Lightbulb size={19} /></span><div><span className="form-label-top">SHARE AN IDEA</span><h2>Suggest a feature</h2></div></div><p className="support-card-intro">What would make your learning sessions better?</p><SupportForm kind="feedback" /></section></div>
    <div className="support-footnote"><LockKeyhole size={15} /> Don’t include passwords, sensitive personal information, or private video links.</div>
  </div></div>
}

function ChangelogPage() {
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="PRODUCT NOTES" title="What’s new." subtitle="A clear record of product updates, when release notes are available." />
    <div className="changelog-empty"><div className="changelog-icon"><CircleDot size={22} /></div><span className="tag tag-muted">RELEASE NOTES PENDING</span><h2>No published releases yet.</h2><p>Verified version numbers and release notes have not been provided. We’ll add updates here once they are available.</p><Link to="/roadmap" className="text-link">See what’s being explored<ArrowRight size={15} /></Link></div>
    <div className="changelog-placeholder"><span>RELEASE FORMAT</span><div><small>VERSION · DATE</small><h3>New features, improvements, and fixes</h3><p>Release notes will be published here after each verified update.</p></div><span className="placeholder-pill">No versions fabricated</span></div>
  </div></div>
}

function RoadmapPage() {
  const categories = ['Planned', 'In Progress', 'Completed']
  return <div className="page-shell"><div className="container"><PageIntro eyebrow="A WORK IN PROGRESS" title={<>What’s coming <span className="blue-text">next.</span></>} subtitle="An honest look at possibilities. Plans can change, and nothing here is a released feature." />
    <div className="roadmap-board">{categories.map((category, index) => {
      const items = category === 'Planned' ? roadmapData.filter(x => x.status === category) : []
      return <section className="roadmap-column" key={category}><div className="roadmap-column-heading"><span className={`roadmap-dot dot-${index}`} /><h2>{category}</h2><span>{items.length || '—'}</span></div>{items.length ? items.map((item, i) => <article className="roadmap-card" key={item.title}><span className="roadmap-card-label">IDEA 0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p><span className="tag tag-blue">Under consideration</span></article>) : <div className="roadmap-empty"><div className="empty-icon"><CircleDot size={17} /></div><p>{category === 'Planned' ? 'No confirmed roadmap items have been published yet.' : category === 'In Progress' ? 'No work has been publicly confirmed as in progress.' : 'No completed roadmap items are published here yet.'}</p></div>}</section>
    })}</div>
    <div className="roadmap-note"><CircleHelp size={16} /><p><strong>Roadmap items are not commitments.</strong> These ideas are forward-looking and are not available functionality. We’ll update the board as work is confirmed.</p><Link to="/support">Share an idea<ArrowRight size={14} /></Link></div>
  </div></div>
}

function NotFoundPage() {
  return <div className="page-shell"><div className="container not-found"><span className="not-found-mark"><Search size={25} /></span><span className="tag tag-blue">404 · PAGE NOT FOUND</span><h1>That page wandered off.</h1><p>The page may have moved, or the address may be mistyped.</p><Link to="/" className="button button-primary">Back to home<ArrowRight size={16} /></Link></div></div>
}

export default App
