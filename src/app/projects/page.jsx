'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowSquareOut, GithubLogo, ShieldCheck, Sparkle, X } from 'phosphor-react';

const projects = [
  {
    id: 'mobdevai',
    title: 'Mobile Development AI',
    eyebrow: 'Featured showcase',
    description: 'A mobile-first AI coding environment that lets developers connect GitHub, edit projects, review diffs, preview changes, and ship from their phone.',
    tags: ['React', 'TypeScript', 'Vite', 'Netlify Functions', 'GitHub OAuth', 'AI Agents'],
    link: 'https://mobdevai-demo.netlify.app/',
    github: 'https://github.com/jazsajonia-pixel/mobdevai',
    accent: 'from-[#ffcf4a] via-[#ff6b9f] to-[#62e6ff]',
    showcaseImage: '/projects/mobdevai-showcase.jpg',
    caseStudy: {
      summary: 'Mobile Development AI turns a phone into a practical development workstation. The product keeps secrets server-side while giving developers a focused loop for repository exploration, AI proposals, diff review, preview, and Git shipping.',
      problems: ['Designed a compact workspace for editing and reviewing code on small screens.', 'Connected GitHub repositories with OAuth while keeping tokens in secure HTTP-only cookies.', 'Built an AI agent flow around proposals, diffs, previews, and human approval instead of blind edits.', 'Added provider abstraction, structured errors, tests, and Netlify deployment guidance for a production-ready foundation.'],
      metrics: [{ label: 'Primary device', value: 'Phone' }, { label: 'Core flow', value: 'AI → diff' }, { label: 'Source control', value: 'GitHub' }, { label: 'Hosting', value: 'Netlify' }],
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
    accent: 'from-[#62e6ff] via-[#6d7aff] to-[#ff6b9f]',
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
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffcf4a]"><Sparkle size={14} weight="fill" /> Selected work</div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Two builds. One clear direction.</h1>
        <p className="max-w-2xl text-base leading-7 text-[#b8acd5] sm:text-lg">A featured showcase for the latest product, plus the marketplace system that set the foundation. Explore the decisions behind each build.</p>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.id} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="group overflow-hidden rounded-[28px] border border-[#493477] bg-[#170d31]/90 shadow-[0_22px_60px_rgba(6,3,20,.34)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b9f] hover:shadow-[0_26px_70px_rgba(255,79,154,.16)]">
            <div className={`border-b border-[#493477] bg-gradient-to-br ${project.accent} p-[1px]`}><ProjectShowcase project={project} /></div>
            <div className="p-6">
              <div className="mb-3 flex items-start justify-between gap-3"><div><div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ffcf4a]">{project.eyebrow}</div><h2 className="text-2xl font-bold tracking-tight text-white">{project.title}</h2></div><span className="rounded-full border border-[#ff6b9f]/40 bg-[#ff6b9f]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ffb4d0]">{project.id === 'mobdevai' ? 'New' : 'Built'}</span></div>
              <p className="mb-5 text-sm leading-6 text-[#b8acd5]">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#493477] bg-[#271852] px-2.5 py-1 text-[11px] font-medium text-[#d4c9ec]">{tag}</span>)}</div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.a whileHover={{ x: 3 }} href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#ffcf4a] px-4 py-2.5 text-sm font-semibold text-[#1b102e] shadow-[0_8px_22px_rgba(255,207,74,.2)]">View Live <ArrowSquareOut size={15} /></motion.a>
                <motion.a whileHover={{ x: 3 }} href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#493477] bg-[#25164a] px-4 py-2.5 text-sm font-semibold text-[#f8f6ff] hover:border-[#62e6ff]">GitHub <GithubLogo size={15} /></motion.a>
                <motion.button whileHover={{ x: 3 }} type="button" onClick={() => setActiveCaseStudy(project.id)} className="inline-flex items-center gap-2 rounded-full border border-[#ff6b9f]/40 bg-[#ff6b9f]/10 px-4 py-2.5 text-sm font-semibold text-[#ffb4d0] hover:bg-[#ff6b9f]/20">Case study <Sparkle size={15} /></motion.button>
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
  return <div className="bg-[#0b061a] p-3"><div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-[#1a0f38]/90 px-3 py-2 shadow-lg"><div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffcf4a] to-[#ff6b9f] text-[10px] font-bold text-[#1b102e]">{project.id === 'mobdevai' ? 'AI' : 'MH'}</div><span className="text-sm font-bold text-white">{project.title}</span></div><span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-[#d4c9ec]">{project.id === 'mobdevai' ? 'Build from your phone' : 'Local marketplace'}</span></div><div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#120a2a]"><img src={project.showcaseImage} alt={`${project.title} platform showcase`} className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.025]" /></div></div>;
}

function CaseStudyModal({ project, onClose }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#05030f]/80 p-4 backdrop-blur-sm" onClick={onClose}><motion.div initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: .98 }} className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-[#493477] bg-[#170d31] shadow-2xl" onClick={(event) => event.stopPropagation()}>
    <div className="flex items-center justify-between border-b border-[#493477] bg-[#1a0f38] px-6 py-4"><div><div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ffcf4a]">Case Study</div><h2 className="mt-1 text-2xl font-bold text-white">{project.title}</h2></div><button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#493477] bg-[#25164a] text-[#d4c9ec] hover:text-white" aria-label="Close case study"><X size={18} /></button></div>
    <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]"><div><div className="mb-5 rounded-2xl border border-[#ff6b9f]/30 bg-[#ff6b9f]/10 p-4"><div className="text-sm font-semibold text-[#ffcf4a]">Product overview</div><p className="mt-2 text-sm leading-6 text-[#c8bde0]">{project.caseStudy.summary}</p></div><h3 className="mb-3 text-lg font-bold text-white">Key challenges solved</h3><ul className="space-y-3">{project.caseStudy.problems.map((problem) => <li key={problem} className="flex gap-3 rounded-2xl border border-[#493477] bg-[#211349] p-3 text-sm text-[#c8bde0]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#62e6ff]/15 text-[10px] font-bold text-[#62e6ff]">✓</span><span>{problem}</span></li>)}</ul></div><div><div className="rounded-2xl border border-[#493477] bg-[#211349] p-4"><h3 className="mb-4 text-lg font-bold text-white">At a glance</h3><div className="grid grid-cols-2 gap-3">{project.caseStudy.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-[#493477] bg-[#170d31] p-3 text-center"><div className="text-xl font-bold text-[#ffcf4a]">{metric.value}</div><div className="text-[10px] uppercase tracking-[0.12em] text-[#8f82b7]">{metric.label}</div></div>)}</div></div><div className="mt-4 rounded-2xl border border-[#62e6ff]/20 bg-[#0b061a] p-4 text-white"><div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#62e6ff]"><ShieldCheck size={12} /> Built for trust</div><ul className="space-y-2 text-sm text-[#c8bde0]"><li>• Human-reviewed product flows</li><li>• Responsive experience across devices</li><li>• Clear deployment and source links</li></ul></div></div></div>
  </motion.div></motion.div>;
}
