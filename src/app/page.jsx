'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedProjectPreview from '@/components/AnimatedProjectPreview';
import { usePortfolioTheme } from '@/components/PortfolioShell';
import profileImage from '../../assets/profile.jpeg';
import {
  ArrowRight,
  ArrowSquareOut,
  CheckCircle,
  GithubLogo,
  Lightning,
  Star,
} from 'phosphor-react';

const tools = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PHP', 'PostgreSQL', 'MySQL', 'Neon', 'Prisma', 'Drizzle', 'Hono', 'Zod', 'Kotlin', 'Jetpack Compose', 'React Native (Expo)', 'Flutter', 'Dart', 'Godot 4', 'GDScript', 'Android', 'REST APIs', 'Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Make.com', 'Webhooks', 'Airtable', 'Google Sheets', 'Gmail', 'OpenAI API', 'Gemini API', 'Claude API'];

const automationFlow = ['Web form / email', 'Custom webhook', 'OpenAI → JSON', 'Router + filters', 'Airtable CRM', 'Gmail alert', 'Human approval', 'Sheets run log'];

const featuredProjects = [
  {
    slug: 'flowpilot',
    title: 'FlowPilot AI',
    eyebrow: 'Workflow automation platform',
    description: 'I built an n8n/Zapier-style workflow builder with webhook and scheduled triggers, AI steps, conditions, and a server-side execution engine with retries and run history.',
    tags: ['React', 'TypeScript', 'Workflow automation'],
    animation: '/projects/flowpilot-demo.gif',
    href: '/projects#flowpilot',
    liveDemo: 'https://flowpilot-sage-delta.vercel.app/',
    accent: 'indigo',
  },
  {
    slug: 'chrauto-ai',
    title: 'Chrauto AI',
    eyebrow: 'Android AI automation agent',
    description: 'I built a native Android AI agent that reads the screen, gets structured next actions from AI, validates them locally, and pauses for approval. It also has a hands-free voice mode.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    animation: '/projects/chrauto-ai-demo.gif',
    href: '/projects#chrauto-ai',
    accent: 'violet',
  },
  {
    slug: 'chrono',
    title: 'Chrono',
    eyebrow: 'AI-assisted developer tooling',
    description: 'I built a mobile-first AI coding workspace that pulls GitHub repositories, edits code with AI, previews the app, and pushes and merges changes.',
    tags: ['React', 'TypeScript', 'GitHub'],
    animation: '/projects/mobdevai-demo.gif',
    href: '/projects#chrono',
    liveDemo: 'https://chrono-tau.vercel.app/',
    accent: 'orange',
  },
  {
    slug: 'markethub',
    title: 'MarketHub',
    eyebrow: 'Full-stack marketplace prototype',
    description: 'I built a full-stack marketplace with buyer, seller, and admin flows: listings, orders, messaging, moderation, and analytics. Checkout is simulated.',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    animation: '/projects/markethub-demo.gif',
    href: '/projects#markethub',
    liveDemo: 'https://markethub-pi.vercel.app/',
    accent: 'teal',
  },
  {
    slug: 'speedsight',
    title: 'SpeedSight',
    eyebrow: 'Computer vision / traffic analytics',
    description: 'I built a browser-based traffic monitoring dashboard for vehicle detection, tracking, estimated speeds, and session analytics. Speed estimates are not certified for enforcement.',
    tags: ['React', 'TypeScript', 'TensorFlow.js'],
    animation: '/projects/speedsight-demo.gif',
    href: '/projects#speedsight',
    liveDemo: 'https://project-2-speed-sight2.vercel.app/',
    accent: 'blue',
  },
  {
    slug: 'retext',
    title: 'Retext',
    eyebrow: 'Local-first Android image editing',
    description: 'I built a non-destructive Android editor for changing text in images while preserving every untouched pixel.',
    tags: ['Flutter', 'Dart', 'Android'],
    animation: '/projects/retext-demo.gif',
    href: '/projects#retext',
    accent: 'orange',
  },
  {
    slug: 'igit',
    title: 'igit',
    eyebrow: 'Android Git client',
    description: 'I built a local-first Git client for Android, with repository browsing, branch and commit workflows, sync, and conflict handling.',
    tags: ['Kotlin', 'Jetpack Compose', 'Git'],
    animation: '/projects/igit-demo.gif',
    href: '/projects#igit',
    accent: 'sky',
  },
  {
    slug: 'petalbound',
    title: 'Petalbound',
    eyebrow: 'Offline pixel-art action adventure',
    description: 'I built a landscape Godot adventure with exploration, quests, guardian fights, crafting, and touch controls.',
    tags: ['Godot 4', 'GDScript', 'Android'],
    animation: '/projects/petalbound-demo.gif',
    href: '/projects#petalbound',
    accent: 'teal',
  },
];

const buildNotes = [
  ['01', 'Plan the feature and user flow'],
  ['02', 'Use AI as an implementation aid'],
  ['03', 'Review, adjust, debug, and test'],
  ['04', 'Integrate and deploy the result'],
];

export default function Home() {
  const { theme, isDark } = usePortfolioTheme();

  return (
    <div className="space-y-8">
      <section
        className="relative overflow-hidden rounded-[26px] border p-5 sm:p-7 lg:p-10"
        style={{ backgroundColor: isDark ? '#141b24' : '#101827', borderColor: isDark ? '#354151' : '#1f3047' }}
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-1/3 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Full-stack developer · AI automation specialist
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl">
              Full-stack developer &amp; <span className="text-orange-400">AI automation specialist.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I’m an IT graduate who builds web apps, Android apps, and AI-powered automations. I connect webhooks, AI models (OpenAI, Gemini, Claude), Airtable, and Google Workspace with structured AI outputs, conditional routing, error handling, and human review.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">
                Browse projects <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70">
                About me
              </Link>
            </div>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <img src={profileImage.src} alt="Jazzther Bert Shanne Sajonia" className="h-12 w-12 rounded-2xl object-cover" />
              <div>
                <div className="font-semibold text-white">Jazzther Bert Shanne Sajonia</div>
                <div className="text-sm text-slate-300">Full-stack developer · AI automation specialist</div>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              BS Information Technology graduate (SEAIT, 2022–2026) based in General Santos City. I build with TypeScript, React, Next.js, Node.js, PostgreSQL, Flutter, and Kotlin, and ship with Git, GitHub Actions CI/CD, and Vercel.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><div className="text-lg font-bold text-white">BS IT</div><div className="mt-1 text-slate-300">Graduate, 2022–2026</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><div className="text-lg font-bold text-white">{featuredProjects.length}</div><div className="mt-1 text-slate-300">Featured project demos</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[22px] border p-4" style={{ backgroundColor: theme.bluePanel, borderColor: theme.border }}>
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: theme.text }}><Star size={13} weight="fill" className="text-orange-500" /> Tools I use</div>
        <div className="toolkit-marquee" aria-label="Technologies and tools used in projects" role="group">
          <div className="toolkit-marquee__track">
            {[0, 1].map((copy) => (
              <div className="toolkit-marquee__group" key={copy} aria-hidden={copy === 1}>
                {tools.map((tool) => <span key={tool} className="toolkit-marquee__item" style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}>{tool}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[24px] border p-5 sm:p-6" style={{ backgroundColor: theme.white, borderColor: theme.border }}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-orange-700"><Lightning size={14} weight="fill" /> Automation spotlight</div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: theme.text }}>AI Lead Intake &amp; Support Triage</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6" style={{ color: theme.subtle }}>A multi-scenario Make.com automation: web-form and email inquiries arrive through custom webhooks, the OpenAI API classifies intent, urgency, and sentiment into structured JSON, and routers send each record to an Airtable CRM with duplicate checks, Gmail alerts for urgent cases, AI-drafted replies held for approval, and a Google Sheets run log.</p>
          </div>
          <Link href="/projects#ai-lead-intake" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800">Project details <ArrowRight size={15} /></Link>
        </div>
        <ol className="mt-5 flex flex-wrap items-center gap-2" aria-label="Automation steps">{automationFlow.map((step, index) => <li key={step} className="flex items-center gap-2"><span className="rounded-xl border px-3 py-2 text-xs font-semibold" style={{ borderColor: theme.border, backgroundColor: theme.chip, color: theme.text }}>{step}</span>{index < automationFlow.length - 1 && <ArrowRight size={14} aria-hidden="true" className="text-orange-600" />}</li>)}</ol>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-700">Selected work</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight" style={{ color: theme.text }}>Featured projects</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800">Browse the project archive <ArrowRight size={15} /></Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredProjects.map((project, index) => <motion.article key={project.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .07 }} whileHover={{ y: -4 }} className="overflow-hidden rounded-[24px] border" style={{ backgroundColor: theme.white, borderColor: theme.border }}>
            <div className="relative aspect-[8/5] overflow-hidden bg-slate-950">
              <AnimatedProjectPreview src={project.animation} alt={`${project.title} animated preview`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">{project.eyebrow}</span>
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>{project.title}</h3>
              <p className="mt-3 text-sm leading-6" style={{ color: theme.subtle }}>{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ backgroundColor: theme.chip, color: theme.subtle }}>{tag}</span>)}</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={project.href} className="inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-orange-400" style={{ borderColor: theme.border, color: theme.text }}>
                  Project details <ArrowRight size={15} />
                </Link>
                {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-orange-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
                  Live demo <ArrowSquareOut size={15} />
                </a>}
              </div>
            </div>
          </motion.article>)}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-[22px] border p-5" style={{ backgroundColor: theme.white, borderColor: theme.border }}>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-orange-600"><Lightning size={14} weight="fill" /> What I do</div>
          <h2 className="mt-3 text-2xl font-bold" style={{ color: theme.text }}>Automations, AI agents, and full-stack apps.</h2>
          <p className="mt-3 text-sm leading-6" style={{ color: theme.subtle }}>I build Make.com automations that route leads and support requests with AI, AI agents that pause for approval, and full-stack web and Android apps with tests and CI.</p>
          <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800">See services <ArrowRight size={15} /></Link>
        </div>
        <div className="rounded-[22px] border p-5" style={{ backgroundColor: theme.panelSoft, borderColor: theme.border }}>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: theme.subtle }}><CheckCircle size={14} className="text-emerald-600" /> How I use AI while building</div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">{buildNotes.map(([number, label]) => <div key={number} className="flex gap-3 rounded-2xl border p-3" style={{ borderColor: theme.border, backgroundColor: theme.white }}><span className="font-mono text-xs text-orange-600">{number}</span><span className="text-sm" style={{ color: theme.text }}>{label}</span></div>)}</div>
          <div className="mt-4 flex items-center gap-3 text-xs" style={{ color: theme.muted }}><GithubLogo size={16} /> ChatGPT · Gemini · Claude · Manus · Codex · Copilot</div>
        </div>
      </section>
    </div>
  );
}
