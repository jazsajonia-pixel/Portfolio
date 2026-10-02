'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowSquareOut,
  ChatCircleDots,
  GithubLogo,
  ShieldCheck,
  ShoppingBag,
  Sparkle,
  Storefront,
  TrendUp,
  X,
} from 'phosphor-react';

const projects = [
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
    showcaseImages: [
      '/projects/markethub-home.png',
      '/projects/markethub-marketplace.png',
    ],
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
  {
    id: 2,
    title: 'AI Workflow Automation Suite',
    description:
      'An autonomous business workflow system for orchestrating multi-step processes, synchronizing data pipelines, and reducing manual admin work with AI-assisted automations.',
    tags: ['Python', 'AI Automation', 'FastAPI', 'PostgreSQL'],
    link: '#',
    github: '#',
    accent: 'from-violet-500 via-fuchsia-500 to-indigo-600',
    hasCaseStudy: false,
  },
  {
    id: 3,
    title: 'High-Converting Sales Funnel Engine',
    description:
      'A campaign and CRM automation platform built to streamline lead capture, nurture journeys, and support sales conversions with measurable funnel logic.',
    tags: ['Next.js', 'GHL Automation', 'CRM Integration', 'Tailwind CSS'],
    link: '#',
    github: '#',
    accent: 'from-amber-400 via-orange-500 to-rose-500',
    hasCaseStudy: false,
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
          A collection of products and systems I&apos;ve built across full-stack web apps,
          marketplace experiences, and business automation flows.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-5 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f9f7f4] shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_48px_rgba(16,185,129,0.12)]"
          >
            <div className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4">
              {project.id === 1 ? <MarketHubShowcase images={project.showcaseImages} /> : <GenericMockup accent={project.accent} />}
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{project.title}</h3>
                {project.id === 1 && (
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Featured
                  </span>
                )}
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
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
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
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-100"
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

function MarketHubShowcase({ images }) {
  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    display: 'block',
    borderRadius: '18px',
  };

  return (
    <div className="rounded-[22px] border border-emerald-100 bg-[#f4f2ee] p-3 shadow-inner">
      <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/80 px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-[10px] font-bold text-white">
            MH
          </div>
          <span className="text-sm font-bold text-slate-800">MarketHub</span>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
          Local marketplace
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images.map((src, index) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-[18px] border border-slate-200 bg-white ${index === 0 ? 'col-span-2 h-52' : 'h-36'}`}
          >
            <img
              src={src}
              alt={`MarketHub screenshot ${index + 1}`}
              style={imageStyle}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                const fallback = event.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div
              className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-slate-100 text-center text-[11px] font-semibold text-slate-600"
              style={{ display: 'none' }}
            >
              {index === 0 ? 'MarketHub home' : 'Marketplace listing'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GenericMockup({ accent }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-inner">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${accent}`} />
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Project</div>
            <div className="text-sm font-semibold text-slate-700">System overview</div>
          </div>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
          Live
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 p-3">
          <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
            <ShoppingBag size={12} /> Sales
          </div>
          <div className="mt-3 text-xl font-bold text-slate-900">₱48K</div>
          <div className="mt-2 h-20 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" />
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
            <TrendUp size={12} /> Growth
          </div>
          <div className="mt-3 text-xl font-bold text-slate-900">+18.4%</div>
          <div className="mt-2 flex h-20 items-end gap-1">
            {[34, 48, 42, 52, 64, 72, 90].map((height, idx) => (
              <span
                key={idx}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-emerald-400 to-emerald-200"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-100 p-2 text-center">
          <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Users</div>
          <div className="mt-1 text-sm font-bold text-slate-800">12k</div>
        </div>
        <div className="rounded-xl bg-slate-100 p-2 text-center">
          <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Orders</div>
          <div className="mt-1 text-sm font-bold text-slate-800">842</div>
        </div>
        <div className="rounded-xl bg-slate-100 p-2 text-center">
          <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Rating</div>
          <div className="mt-1 text-sm font-bold text-slate-800">4.9</div>
        </div>
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
