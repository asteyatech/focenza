export const CHROME_WEB_STORE_URL = import.meta.env.VITE_CHROME_WEB_STORE_URL || ''
export const SUPPORT_SUBMISSION_ENDPOINT = import.meta.env.VITE_SUPPORT_SUBMISSION_ENDPOINT || ''

export const productLinks = [
  { label: 'Features', to: '/features' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Installation', to: '/installation' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export const featureData = [
  {
    id: 'focus-mode',
    title: 'Focus Mode',
    icon: 'EyeOff',
    description: 'Hide distracting YouTube elements and focus on what matters.',
    detail: 'Take control of your YouTube experience.',
    body: 'Focus Mode is designed to reduce visual distractions while you learn. Depending on the extension settings available in your installed version, supported YouTube surfaces such as the homepage feed, Shorts, suggested videos, or comments can be hidden.',
    bullets: ['Reduce supported on-page distractions', 'Choose what to hide in your settings', 'Turn it on when you are ready to focus'],
  },
  {
    id: 'notes-panel',
    title: 'Notes Panel',
    icon: 'NotebookPen',
    description: 'Keep your learning notes close while watching videos.',
    detail: 'Your learning notes, always within reach.',
    body: 'Capture key ideas without leaving the video. The Notes Panel gives you a dedicated place to jot down what you are learning alongside your YouTube session.',
    bullets: ['Write notes while a video is open', 'Keep your notes close to the lesson', 'Available save, export, or sync options depend on the installed version'],
  },
  {
    id: 'session-timer',
    title: 'Session Timer & Tracker',
    icon: 'Timer',
    description: 'Track your focused sessions and build consistent habits.',
    detail: 'Make every learning session count.',
    body: 'Start a focused session and use the timer to stay intentional about your learning time. The interface shown here is illustrative; session summaries and history depend on the extension version.',
    bullets: ['Start a focused learning session', 'See your current session timer', 'No advanced analytics are implied by this preview'],
  },
  {
    id: 'channel-whitelist',
    title: 'Channel Whitelist',
    icon: 'ShieldCheck',
    description: 'Keep selected channels accessible while using Focus Mode.',
    detail: 'Keep your learning channels accessible.',
    body: 'Choose channels you want to keep available while Focus Mode is enabled. The exact matching behavior follows the controls provided by the extension you install.',
    bullets: ['Add channels you trust for learning', 'Review your allowed channels in settings', 'Whitelist behavior is limited to supported YouTube surfaces'],
  },
]

export const faqData = [
  ['What is BingeBlocker?', 'BingeBlocker is a Chrome extension designed to help students and lifelong learners reduce YouTube distractions and create a more focused learning environment.'],
  ['Who is BingeBlocker designed for?', 'It is designed for students, exam aspirants, self-learners, educators, and anyone who wants a more intentional YouTube learning session.'],
  ['How can I install BingeBlocker?', 'Use the official Chrome Web Store listing when its URL is configured on this site. The Installation Guide explains the standard Chrome installation steps.'],
  ['Is BingeBlocker free?', 'Pricing has not been confirmed here. Please check the official Chrome Web Store listing for current availability and pricing details.'],
  ['Which browser does it support?', 'BingeBlocker is intended for Chrome. Support for other Chromium-based browsers has not been confirmed.'],
  ['What does Focus Mode hide?', 'Focus Mode is described as hiding supported distracting YouTube surfaces, which may include the homepage feed, Shorts, suggestions, and comments. Exact controls depend on your installed version. It does not claim to block ads or other websites.'],
  ['Can I use my own Channel Whitelist?', 'The feature is designed to let you select channels to keep accessible while Focus Mode is enabled. Refer to the controls in your installed version for exact behavior.'],
  ['How does the Notes Panel work?', 'It provides a place to write learning notes while watching. Saving, exporting, and syncing capabilities have not been verified on this website; check the extension interface for the options available to you.'],
  ['Does BingeBlocker track my browsing activity?', 'The extension’s data practices have not been verified for this website. Review the extension’s published privacy disclosures and permissions on its official listing before installing.'],
  ['What permissions does the extension require?', 'Permissions can vary by release. Review the permission prompt in Chrome and the official listing before installation; this site does not guess or promise a permission set.'],
  ['Does BingeBlocker work on mobile devices?', 'The extension is intended for desktop Chrome. Mobile browser support has not been confirmed.'],
  ['What should I do if the extension stops working?', 'Check that Chrome and the extension are up to date, then review the installation and troubleshooting guidance. If the issue persists, use Support & Feedback once a submission endpoint is configured.'],
  ['How can I report a bug?', 'Use the bug report form on the Support page. Until a submission endpoint is configured, the form runs in demo mode and does not send your report.'],
  ['How can I request a new feature?', 'Use the feature suggestion form on the Support page. In demo mode, your entry is not transmitted or saved.'],
]

export const roadmapData = []
