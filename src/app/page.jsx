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

const tools = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Laravel', 'PHP', 'PostgreSQL', 'MySQL', 'Prisma', 'Hono', 'Zod', 'REST APIs', 'Git', 'GitHub', 'Vercel', 'Make.com', 'OpenAI API', 'Gemini API', 'Claude API'];

const featuredProjects = [
  {
    slug: 'chrono',
    title: 'Chrono',
    eyebrow: 'AI-assisted developer tooling',
    description: 'A mobile-first workspace for connecting GitHub, reviewing code changes, and previewing an app while working with an AI coding assistant.',
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
    description: 'A marketplace built with seeded data and buyer, seller, and admin flows. Checkout is simulated; it does not process real payments.',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    animation: '/projects/markethub-demo.gif',
    href: '/projects#markethub',
    liveDemo: 'https://markethub-pi.vercel.app/',
    accent: 'teal',
  },
  {
    slug: 'chrauto-ai',
    title: 'Chrauto AI',
    eyebrow: 'Android accessibility assistant',
    description: 'A native Android assistant prototype for bounded accessibility actions. Consequential actions pause for approval.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    animation: '/projects/chrauto-ai-demo.gif',
    href: '/projects#chrauto-ai',
    accent: 'violet',
  },
  {
    slug: 'speedsight',
    title: 'SpeedSight',
    eyebrow: 'Computer vision / traffic analytics',
    description: 'A browser-based traffic monitoring dashboard for vehicle detection, tracking, estimated speeds, and session analytics. Speed estimates are not certified for enforcement.',
    tags: ['React', 'TypeScript', 'TensorFlow.js'],
    animation: '/projects/speedsight-demo.gif',
    href: '/projects#speedsight',
    liveDemo: 'https://project-2-speed-sight2.vercel.app/',
    accent: 'blue',
  },
  {
    slug: 'igit',
    title: 'igit',
    eyebrow: 'Android Git client',
    description: 'A local-first Git client for Android, with repository browsing, branch and commit workflows, sync, and conflict handling.',
    tags: ['Kotlin', 'Jetpack Compose', 'Git'],
    animation: '/projects/igit-demo.gif',
    href: '/projects#igit',
    accent: 'sky',
  },
  {
    slug: 'flowpilot',
    title: 'FlowPilot AI',
    eyebrow: 'Visual workflow automation',
    description: 'A visual workflow builder for connecting triggers, AI steps, conditions, and actions, with run history for reviewing executions.',
    tags: ['React', 'TypeScript', 'Workflow automation'],
    animation: '/projects/flowpilot-demo.gif',
    href: '/projects#flowpilot',
    liveDemo: 'https://flowpilot-sage-delta.vercel.app/',
    accent: 'indigo',
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
              Personal builds · university projects
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl">
              Full-stack web developer <span className="text-orange-400">learning by building.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I build web apps through personal projects and university work. My current focus is React and TypeScript, APIs, and database-backed features; I also experiment with AI-assisted tools and workflow automation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">
                Browse projects <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70">
                About my approach
              </Link>
            </div>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <img src={profileImage.src} alt="Jazzther Bert Shanne Sajonia" className="h-12 w-12 rounded-2xl object-cover" />
              <div>
                <div className="font-semibold text-white">Jazzther Bert Shanne Sajonia</div>
                <div className="text-sm text-slate-300">Web developer · project-based learning</div>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              I started programming seriously in 2024. Most of my experience comes from coursework and projects I build myself. I use AI tools to help explore and implement ideas, then review and test the result.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><div className="text-lg font-bold text-white">2024</div><div className="mt-1 text-slate-300">Started coding seriously</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><div className="text-lg font-bold text-white">6</div><div className="mt-1 text-slate-300">Featured project demos</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[22px] border p-4" style={{ backgroundColor: theme.bluePanel, borderColor: theme.border }}>
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: theme.text }}><Star size={13} weight="fill" className="text-orange-500" /> Tools I use and explore</div>
        <div className="toolkit-marquee" aria-label="Technologies and tools used or explored in projects" role="group">
          <div className="toolkit-marquee__track">
            {[0, 1].map((copy) => (
              <div className="toolkit-marquee__group" key={copy} aria-hidden={copy === 1}>
                {tools.map((tool) => <span key={tool} className="toolkit-marquee__item" style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}>{tool}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-700">Selected work</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight" style={{ color: theme.text }}>Personal builds and university projects</h2>
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
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-orange-600"><Lightning size={14} weight="fill" /> Areas I’m practicing</div>
          <h2 className="mt-3 text-2xl font-bold" style={{ color: theme.text }}>Web apps, APIs, and useful integrations.</h2>
          <p className="mt-3 text-sm leading-6" style={{ color: theme.subtle }}>My projects focus on responsive interfaces, database-backed features, and API integrations. I’m also exploring AI APIs and workflow automation.</p>
          <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800">See areas of practice <ArrowRight size={15} /></Link>
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
