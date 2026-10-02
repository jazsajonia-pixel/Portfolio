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
    id: 1,
    title: 'MarketHub',
    description:
      'A full-stack local marketplace for people to buy and sell pre-loved or new items with a secure checkout, real product discovery, and seller dashboards built from live data.',
    tags: ['React 19', 'Tailwind CSS', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma', 'TanStack Query'],
    link: 'https://markethub-pi.vercel.app/',
    github: 'https://github.com/jazsajonia-pixel/markethub',
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
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">
          My Projects
        </h1>
        <p className="max-w-2xl text-base text-portfolio-subtle sm:text-lg">
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
            className="overflow-hidden rounded-[28px] border border-portfolio-border bg-portfolio-card shadow-sm transition-all duration-300 hover:border-primary-500/50 hover:shadow-md"
          >
            <div className="border-b border-portfolio-border bg-portfolio-chip/30 p-4">
              <MarketHubShowcase image={project.showcaseImage} />
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight text-portfolio-text">
                  {project.title}
                </h3>
                <span className="rounded-full border border-primary-500/30 bg-primary-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-500">
                  Featured
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-portfolio-subtle">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-portfolio-border bg-portfolio-chip px-2.5 py-1 text-[11px] font-medium text-portfolio-subtle"
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
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors"
                >
                  View Live <ArrowSquareOut size={15} />
                </motion.a>

                <motion.a
                  whileHover={{ x: 3 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-portfolio-border bg-portfolio-card px-4 py-2.5 text-sm font-semibold text-portfolio-text hover:border-portfolio-subtle transition-colors"
                >
                  GitHub <GithubLogo size={15} />
                </motion.a>

                {project.hasCaseStudy && (
                  <motion.button
                    whileHover={{ x: 3 }}
                    type="button"
                    onClick={() => setActiveCaseStudy(project.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2.5 text-sm font-semibold text-primary-500 hover:bg-primary-500/20 transition-colors"
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

function MarketHubShowcase({ image }) {
  return (
    <div className="rounded-[22px] border border-portfolio-border bg-portfolio-chip/50 p-3 shadow-inner">
      <div className="mb-3 flex items-center justify-between rounded-2xl border border-portfolio-border bg-portfolio-card px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-[10px] font-bold text-white">
            MH
          </div>
          <span className="text-sm font-bold text-portfolio-text">MarketHub</span>
        </div>
        <div className="rounded-full border border-portfolio-border bg-portfolio-chip px-2 py-1 text-[10px] font-medium text-portfolio-muted">
          Local marketplace
        </div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-portfolio-border bg-portfolio-card">
        <img
          src={image}
          alt="MarketHub Platform Demo Showcase"
          className="h-auto w-full object-cover rounded-[18px]"
        />
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-portfolio-border bg-portfolio-card text-portfolio-text shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-portfolio-border bg-portfolio-card px-6 py-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-500">
              Case Study
            </div>
            <h2 className="mt-1 text-2xl font-bold text-portfolio-text">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-portfolio-border bg-portfolio-chip text-portfolio-text hover:border-portfolio-subtle"
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 rounded-2xl border border-primary-500/30 bg-primary-500/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-500">
                <Storefront size={16} /> Product overview
              </div>
              <p className="mt-2 text-sm leading-6 text-portfolio-subtle">{project.caseStudy.summary}</p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-portfolio-text">Key challenges solved</h3>
              <ul className="space-y-3">
                {project.caseStudy.problems.map((problem) => (
                  <li key={problem} className="flex gap-3 rounded-2xl border border-portfolio-border bg-portfolio-chip/60 p-3 text-sm text-portfolio-subtle">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/20 text-[10px] font-bold text-primary-500 shrink-0">
                      ✓
                    </span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-portfolio-border bg-portfolio-chip/40 p-4">
              <h3 className="mb-4 text-lg font-bold text-portfolio-text">At a glance</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-portfolio-border bg-portfolio-card p-3 text-center">
                    <div className="text-xl font-bold text-portfolio-text">{metric.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-portfolio-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-portfolio-border bg-portfolio-chip p-4">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-500">
                <ShieldCheck size={12} /> Built for trust
              </div>
              <ul className="space-y-2 text-sm text-portfolio-subtle">
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
