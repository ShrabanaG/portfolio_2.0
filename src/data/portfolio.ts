/**
 * Single source of truth for everything the site renders.
 * Edit text here and the whole page updates — no need to touch components.
 * Content is mapped straight from Shrabana Goswami's resume.
 */

export const profile = {
  name: 'Shrabana Goswami',
  initials: 'SG',
  role: 'Frontend Engineer',
  stack: 'React · Next.js · TypeScript',
  location: 'Kolkata, India',
  available: true,
  // NOTE: this is the contact email printed on the resume. Swap if needed.
  email: 'shrabanagoswami8@gmail.com',
  github: 'https://github.com/ShrabanaG',
  linkedin: 'https://www.linkedin.com/in/shrabana-goswami-363219236',
  resumeUrl: '/SHRABANA_GOSWAMI.pdf',
  // The hero headline. The word in *asterisks* is rendered italic (serif).
  tagline: 'Interfaces that *perform*.',
  pitch:
    'Frontend engineer with 4 years building responsive, accessible and high-performance web apps in React, Next.js and TypeScript — owning features end to end, from architecture to production.',
}

/** Headline metrics for the hero / about strip. */
export const stats = [
  { value: '4+', label: 'Years building for the web' },
  { value: '90+', label: 'Lighthouse performance' },
  { value: '40%', label: 'Faster data-heavy UIs' },
  { value: '15K', label: 'Lines owned solo' },
]

/** Grouped skills, lifted from the resume's skills section. */
export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Python'],
  },
  {
    title: 'Frameworks',
    items: ['React.js', 'Next.js (SSR/SSG)', 'Redux Toolkit', 'Material UI'],
  },
  {
    title: 'Styling & UI',
    items: ['Tailwind CSS', 'Responsive / Mobile-first', 'Design Systems', 'Figma-to-code'],
  },
  {
    title: 'Real-time & API',
    items: ['WebSockets (Socket.io)', 'REST APIs', 'JWT / OAuth 2.0'],
  },
  {
    title: 'Performance & A11y',
    items: ['Core Web Vitals', 'Lighthouse 90+', 'Code Splitting', 'WCAG / ARIA'],
  },
  {
    title: 'Testing & Tooling',
    items: ['Jest', 'React Testing Library', 'Vite', 'GitHub Actions'],
  },
  {
    title: 'Data Visualisation',
    items: ['D3.js', 'Chart.js', 'ag-Grid'],
  },
  {
    title: 'Cloud',
    items: ['AWS (S3, EC2, IAM)', 'Vercel'],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  points: string[]
}

export const experience: Experience[] = [
  {
    company: 'Upskilling — Python & AI/ML',
    role: 'Transition · self-directed',
    period: 'Nov 2025 — Present',
    current: true,
    points: [
      'Deep-diving Python and AI/ML fundamentals alongside the Next.js App Router and full-stack patterns.',
      'Available for immediate joining.',
    ],
  },
  {
    company: 'Gaming Prism Pvt Ltd — Consumer Social Engagement Platform',
    role: 'Frontend Engineer · sole frontend engineer',
    period: 'Feb 2025 — Nov 2025',
    points: [
      'Introduced Next.js SSR and code splitting to an existing portal in a TypeScript-first codebase, cutting initial load time by 25–30%.',
      'Built high-performance, cross-browser UIs across 5+ breakpoints with React, CSS3 and Tailwind.',
      'Lifted Lighthouse performance above 90 via image optimisation and lazy loading, with WCAG-focused accessibility reviews.',
      'Enhanced and extended a real-time notification system with WebSockets (Socket.io), contributing to a team-wide 20% engagement lift.',
    ],
  },
  {
    company: 'Freelance & Contract',
    role: 'Software Engineer · Advanced Structures India / TIF Labs',
    period: 'Jun 2023 — Oct 2024',
    points: [
      'Crafted 15+ reusable React components and a shared component library, reducing duplication by ~30%.',
      'Centralised state with Redux and Context across 6+ modules and refactored 5+ REST integrations.',
      'Delivered a full-stack course platform (MongoDB, Express, Next.js, Node) with JWT/OAuth, streamlining enrollment by 15%.',
    ],
  },
  {
    company: 'Aeonix Research & Innovations LLP',
    role: 'Frontend Engineer · promoted from intern in 6 months',
    period: 'Dec 2021 — May 2023',
    points: [
      'Owned a ~15,000-line React/TypeScript codebase with Context API and Git-based review workflows.',
      'Held 65%+ coverage with Jest and React Testing Library.',
      'Improved data-viz dashboard performance by 40% via lazy loading and memoization, mentoring 2 junior engineers.',
    ],
  },
]

export type Project = {
  title: string
  blurb: string
  tags: string[]
  metric: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Real-time Notification System',
    blurb:
      'WebSocket-driven notifications for a social engagement platform — instant delivery, optimistic UI and Redux-managed state.',
    tags: ['React', 'Socket.io', 'Redux', 'Webpack'],
    metric: '+20% engagement',
    link: profile.github,
  },
  {
    title: 'Course Management Platform',
    blurb:
      'Full-stack platform for course enrollment and management with secure JWT/OAuth 2.0 auth and a Next.js front end.',
    tags: ['Next.js', 'Node', 'Express', 'MongoDB'],
    metric: '+15% enrollment',
    link: profile.github,
  },
  {
    title: 'Workflow Generator UI',
    blurb:
      'A configurable React + TypeScript builder that turns up to 8 steps into end-to-end process automation.',
    tags: ['React', 'TypeScript', 'Automation'],
    metric: '−3 hrs setup / workflow',
    link: profile.github,
  },
  {
    title: 'Data-viz Dashboards',
    blurb:
      'Data-heavy analytics dashboards tuned with memoization and lazy loading for smooth interaction at scale.',
    tags: ['React', 'D3.js', 'Chart.js'],
    metric: '+40% UI performance',
    link: profile.github,
  },
]
