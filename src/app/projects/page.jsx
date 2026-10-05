'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowSquareOut,
  GithubLogo,
  ShieldCheck,
  Sparkle,
  Storefront,
  X,
} from 'phosphor-react';

const projects = [
  {
    id: 0,
    title: 'Mobile Development AI',
    description:
      'A mobile-first development environment for connecting GitHub, asking an AI agent for changes, reviewing diffs, previewing the real app, and shipping from a phone.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'CodeMirror', 'GitHub OAuth'],
    link: 'https://mobdevai-demo.netlify.app/',
    github: 'https://github.com/jazsajonia-pixel/mobdevai',
    accent: 'from-orange-500 via-fuchsia-500 to-violet-600',
    hasCaseStudy: true,
    featured: true,
    caseStudy: {
      summary:
        'Mobile Development AI brings an AI coding agent, GitHub workflows, and live previews into a mobile-first development environment. Its core promise is everything between a repository and a pull request, designed for a 6-inch screen.',
      problems: [
        'Designed bottom-sheet navigation, touch-sized controls, and a one-handed workspace for a 6-inch screen.',
        'Connected GitHub repositories with OAuth and a reviewable branch-based workflow.',
        'Built an AI agent flow that plans first, proposes edits, and shows the exact diff before acceptance.',
        'Added sandboxed live previews and a clear Commit / PR handoff.',
      ],
      metrics: [
        { label: 'Primary device', value: '6-inch' },
        { label: 'Workflow', value: 'Repo → PR' },
        { label: 'Agent mode', value: 'Plan first' },
        { label: 'Preview', value: 'Sandboxed' },
      ],
    },
  },
  {
    id: 1,
    title: 'MarketHub',
    description:
      'A full-stack local marketplace for people to buy and sell pre-loved or new items with a secure checkout, real product discovery, and seller dashboards built from live data.',
    tags: ['React 19', 'Tailwind CSS', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'TanStack Query'],
    link: 'https://markethub-pi.vercel.app/',
    github: 'https://github.com/jazsajonia-pixel/markethub',
    accent: 'from-emerald-500 via-emerald-600 to-teal-700',
    hasCaseStudy: true,
    showcaseImage: '/projects/markethub-showcase.jpg',
    caseStudy: {
      summary:
        'MarketHub was designed as a realistic local marketplace with role-based experiences for buyers, sellers, and admins. The biggest challenges were keeping data consistent across inventory, checkout, and multi-seller order flows while still delivering a polished, fast UI.',
      problems: [
        'Built secure, multi-seller checkout logic with atomic stock validation to prevent overselling and preserve transaction consistency.',
        'Created a product discovery flow with filters, shared URL state, and live category-driven listings without hardcoded mock data.',
        'Designed seller-side dashboards and admin tools using real metrics from orders, revenue, and inventory instead of static placeholders.',
        'Structured the product messaging and order experience so buyers and sellers could communicate and track purchases cleanly in one place.',
      ],
      metrics: [
        { label: 'User roles', value: '3' },
        { label: 'Filter types', value: '6+' },
        { label: 'Live flows', value: '4' },
        { label: 'Order model', value: 'Multi-seller' },
      ],
    },
  },
];

export default function ProjectsPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          A featured showcase of my full-stack web applications, marketplace experiences, and digital products.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f9f7f4] shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-orange-300 hover:shadow-[0_24px_48px_rgba(249,115,22,0.12)]"
          >
            <div className={`border-b border-slate-200 bg-gradient-to-br ${project.featured ? 'from-orange-50 via-fuchsia-50 to-violet-50' : 'from-slate-50 to-slate-100'} p-4`}>
              {project.featured ? <MobileDevelopmentShowcase /> : <MarketHubShowcase image={project.showcaseImage} />}
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{project.title}</h3>
                <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${project.featured ? 'border-orange-200 bg-orange-50 text-orange-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>
                  {project.featured ? 'Featured live build' : 'Featured'}
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-slate-600">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ x: 3 }}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm ${project.featured ? 'bg-orange-500 hover:bg-orange-400' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                >
                  View Live <ArrowSquareOut size={15} />
                </motion.a>

                <motion.a
                  whileHover={{ x: 3 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900"
                >
                  GitHub <GithubLogo size={15} />
                </motion.a>

                {project.hasCaseStudy && (
                  <motion.button
                    whileHover={{ x: 3 }}
                    type="button"
                    onClick={() => setActiveCaseStudy(project.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold ${project.featured ? 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100' : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
                  >
                    Read Case Study <Sparkle size={15} />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeCaseStudy && (
          <CaseStudyModal
            project={projects.find((project) => project.id === activeCaseStudy)}
            onClose={() => setActiveCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function MobileDevelopmentShowcase() {
  return (
    <div className="mx-auto max-w-[720px] rounded-[22px] border border-slate-900/10 bg-[#0b0d12] p-3 shadow-inner">
      <div className="mb-3 flex items-center gap-1.5 rounded-[10px] border border-white/10 bg-[#171a22] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fdbb2d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[9px] text-slate-400">mobdevai-demo.netlify.app</span>
      </div>
      <div className="relative mx-auto aspect-[16/9] max-w-[650px] overflow-hidden rounded-[14px] border border-white/10 bg-[#0d0f12] shadow-[inset_0_30px_34px_rgba(0,0,0,.9),inset_0_-30px_34px_rgba(0,0,0,.95)]">
        <img src="/projects/mobdevai-landing.webp" alt="Mobile Development AI landing page" className="absolute inset-0 h-full w-full object-cover object-top opacity-90" />
        <div className="absolute right-3 top-8 h-[72%] w-[68%] overflow-hidden rounded-[10px] border border-white/20 bg-[#11131b] shadow-[0_14px_26px_rgba(0,0,0,.72)]">
          <img src="/projects/mobdevai-workspace.webp" alt="Mobile Development AI workspace" className="h-full w-full object-cover object-top" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black via-black/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/55 to-transparent" />
      </div>
    </div>
  );
}

function MarketHubShowcase({ image }) {
  return (
    <div className="mx-auto max-w-[720px] rounded-[22px] border border-emerald-100 bg-[#f4f2ee] p-3 shadow-inner">
      <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/80 px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-[10px] font-bold text-white">MH</div>
          <span className="text-sm font-bold text-slate-800">MarketHub</span>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">Local marketplace</div>
      </div>
      <div className="relative mx-auto max-w-[650px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[inset_0_28px_30px_rgba(0,0,0,.22),inset_0_-28px_30px_rgba(0,0,0,.3)]">
        <img src={image} alt="MarketHub Platform Demo Showcase" className="h-auto w-full rounded-[18px] object-cover" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </div>
  );
}

function CaseStudyModal({ project, onClose }) {
  if (!project || !project.caseStudy) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-slate-200 bg-[#f9f7f4] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
              Case Study
            </div>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900"
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <Storefront size={16} /> Product overview
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.caseStudy.summary}</p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">Key challenges solved</h3>
              <ul className="space-y-3">
                {project.caseStudy.problems.map((problem) => (
                  <li key={problem} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                      ✓
                    </span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-4 text-lg font-bold text-slate-900">At a glance</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <div className="text-xl font-bold text-slate-900">{metric.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-white">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                <ShieldCheck size={12} /> Built for trust
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Auth & role-based access control</li>
                <li>• Secure checkout and order tracking</li>
                <li>• Real marketplace inventory and analytics</li>
                <li>• Responsive UI for desktop and mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
