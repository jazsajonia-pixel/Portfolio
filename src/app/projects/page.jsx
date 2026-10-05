'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowSquareOut, GithubLogo, ShieldCheck, Sparkle, X } from 'phosphor-react';

const projects = [
  {
    id: 'mobdevai',
    title: 'Mobile Development AI',
    eyebrow: 'Featured showcase',
    description: 'A mobile-first development environment where developers connect GitHub, ask an AI agent for changes, review diffs, preview the real app, and ship from their phone.',
    tags: ['React', 'TypeScript', 'Vite', 'GitHub OAuth', 'AI agent', 'Live previews'],
    link: 'https://mobdevai-demo.netlify.app/',
    github: 'https://github.com/jazsajonia-pixel/mobdevai',
    accent: 'from-[#75e4ff] via-[#2f8dff] to-[#b8f3ff]',
    showcaseImage: '/projects/mobdevai-showcase.jpg',
    caseStudy: {
      summary: 'Mobile Development AI brings an AI coding agent, GitHub workflows, and live previews into a mobile-first development environment. Its core promise is simple: everything between a repository and a pull request, designed for a 6-inch screen.',
      problems: ['Designed bottom-sheet navigation, touch-sized controls, and a one-handed workspace for a 6-inch screen.', 'Connected GitHub repositories with OAuth and a reviewable branch-based workflow.', 'Built an AI agent flow that plans first, proposes edits, and shows the exact diff before acceptance.', 'Added sandboxed live previews, multiple AI provider support, and a clear Commit / PR handoff.'],
      metrics: [{ label: 'Primary device', value: '6-inch' }, { label: 'Workflow', value: 'Repo → PR' }, { label: 'Agent mode', value: 'Plan first' }, { label: 'Preview', value: 'Sandboxed' }],
    },
  },
  {
    id: 'markethub',
    title: 'MarketHub',
    eyebrow: 'Full-stack marketplace',
    description: 'A local marketplace for buying and selling new or pre-loved items, with discovery, secure checkout, seller dashboards, and live data flows.',
    tags: ['React 19', 'Tailwind CSS', 'TypeScript', 'Hono', 'PostgreSQL', 'Prisma'],
    link: 'https://markethub-pi.vercel.app/',
    github: 'https://github.com/jazsajonia-pixel/markethub',
    accent: 'from-[#b8f3ff] via-[#4287ff] to-[#2f8dff]',
    showcaseImage: '/projects/markethub-showcase.jpg',
    caseStudy: {
      summary: 'MarketHub was designed as a realistic local marketplace with role-based experiences for buyers, sellers, and admins.',
      problems: ['Built multi-seller checkout logic with atomic stock validation.', 'Created product discovery with filters and shared URL state.', 'Designed seller dashboards and admin tools around real metrics.', 'Structured messaging and order tracking for both buyers and sellers.'],
      metrics: [{ label: 'User roles', value: '3' }, { label: 'Filter types', value: '6+' }, { label: 'Live flows', value: '4' }, { label: 'Order model', value: 'Multi-seller' }],
    },
  },
];

export default function ProjectsPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  return (
    <section className="w-full">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#75e4ff]"><Sparkle size={14} weight="fill" /> Selected work</div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#102a43] sm:text-4xl">Two builds. One clear direction.</h1>
        <p className="max-w-2xl text-base leading-7 text-[#b8acd5] sm:text-lg">A featured showcase for the latest product, plus the marketplace system that set the foundation. Explore the decisions behind each build.</p>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.id} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="group overflow-hidden rounded-[28px] border border-[#d7e3ed] bg-white shadow-[0_22px_60px_rgba(6,3,20,.34)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2f8dff] hover:shadow-[0_26px_70px_rgba(47,141,255,.18)]">
            <div className={`border-b border-[#21456f] bg-gradient-to-br ${project.accent} p-[1px]`}><ProjectShowcase project={project} /></div>
            <div className="p-6">
              <div className="mb-3 flex items-start justify-between gap-3"><div><div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#75e4ff]">{project.eyebrow}</div><h2 className="text-2xl font-bold tracking-tight text-[#102a43]">{project.title}</h2></div><span className="rounded-full border border-[#2f8dff]/40 bg-[#2f8dff]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a9ddff]">{project.id === 'mobdevai' ? 'New' : 'Built'}</span></div>
              <p className="mb-5 text-sm leading-6 text-[#b8acd5]">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#21456f] bg-[#f0f7fb] px-2.5 py-1 text-[11px] font-medium text-[#5d748a]">{tag}</span>)}</div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.a whileHover={{ x: 3 }} href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#75e4ff] px-4 py-2.5 text-sm font-semibold text-[#06111e] shadow-[0_8px_22px_rgba(117,228,255,.2)]">View Live <ArrowSquareOut size={15} /></motion.a>
                <motion.a whileHover={{ x: 3 }} href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d7e3ed] bg-white px-4 py-2.5 text-sm font-semibold text-[#102a43] hover:border-[#b8f3ff]">GitHub <GithubLogo size={15} /></motion.a>
                <motion.button whileHover={{ x: 3 }} type="button" onClick={() => setActiveCaseStudy(project.id)} className="inline-flex items-center gap-2 rounded-full border border-[#2f8dff]/40 bg-[#2f8dff]/10 px-4 py-2.5 text-sm font-semibold text-[#a9ddff] hover:bg-[#2f8dff]/20">Case study <Sparkle size={15} /></motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>{activeCaseStudy && <CaseStudyModal project={projects.find((project) => project.id === activeCaseStudy)} onClose={() => setActiveCaseStudy(null)} />}</AnimatePresence>
    </section>
  );
}

function ProjectShowcase({ project }) {
  return <div className="bg-[#040b16] p-3"><div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d2948]/90 px-3 py-2 shadow-lg"><div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#75e4ff] to-[#2f8dff] text-[10px] font-bold text-[#06111e]">{project.id === 'mobdevai' ? 'AI' : 'MH'}</div><span className="text-sm font-bold text-white">{project.title}</span></div><span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-[#bfd7eb]">{project.id === 'mobdevai' ? 'Repo to pull request' : 'Local marketplace'}</span></div><div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#071225]"><img src={project.showcaseImage} alt={`${project.title} platform showcase`} className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.025]" /></div></div>;
}

function CaseStudyModal({ project, onClose }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#050b16]/80 p-4 backdrop-blur-sm" onClick={onClose}><motion.div initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: .98 }} className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-[#21456f] bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
    <div className="flex items-center justify-between border-b border-[#d7e3ed] bg-[#f4f8fb] px-6 py-4"><div><div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#75e4ff]">Case Study</div><h2 className="mt-1 text-2xl font-bold text-[#102a43]">{project.title}</h2></div><button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#21456f] bg-[#102846] text-[#bfd7eb] hover:text-white" aria-label="Close case study"><X size={18} /></button></div>
    <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]"><div><div className="mb-5 rounded-2xl border border-[#2f8dff]/30 bg-[#2f8dff]/10 p-4"><div className="text-sm font-semibold text-[#75e4ff]">Product overview</div><p className="mt-2 text-sm leading-6 text-[#5d748a]">{project.caseStudy.summary}</p></div><h3 className="mb-3 text-lg font-bold text-[#102a43]">Key challenges solved</h3><ul className="space-y-3">{project.caseStudy.problems.map((problem) => <li key={problem} className="flex gap-3 rounded-2xl border border-[#d7e3ed] bg-[#f7fbfd] p-3 text-sm text-[#5d748a]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b8f3ff]/15 text-[10px] font-bold text-[#b8f3ff]">✓</span><span>{problem}</span></li>)}</ul></div><div><div className="rounded-2xl border border-[#d7e3ed] bg-[#f7fbfd] p-4"><h3 className="mb-4 text-lg font-bold text-[#102a43]">At a glance</h3><div className="grid grid-cols-2 gap-3">{project.caseStudy.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-[#d7e3ed] bg-white p-3 text-center"><div className="text-xl font-bold text-[#75e4ff]">{metric.value}</div><div className="text-[10px] uppercase tracking-[0.12em] text-[#7694b1]">{metric.label}</div></div>)}</div></div><div className="mt-4 rounded-2xl border border-[#c7eaf6] bg-[#eaf7fc] p-4 text-[#102a43]"><div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8f3ff]"><ShieldCheck size={12} /> Built for trust</div><ul className="space-y-2 text-sm text-[#9db5cc]"><li>• Human-reviewed product flows</li><li>• Responsive experience across devices</li><li>• Clear deployment and source links</li></ul></div></div></div>
  </motion.div></motion.div>;
}
