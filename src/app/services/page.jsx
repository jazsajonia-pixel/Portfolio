'use client';

import { motion } from 'framer-motion';
import { BracketsCurly, Database, Globe, Lightning, PlugsConnected, Robot } from 'phosphor-react';

const capabilityAreas = [
  { title: 'Full-Stack Web Development', icon: BracketsCurly, description: 'Responsive web applications built around clear user flows, reusable UI, APIs, and database-backed features.', items: ['React / Next.js', 'TypeScript', 'PHP', 'Responsive interfaces'] },
  { title: 'API & Database Integration', icon: Database, description: 'Connecting interfaces to structured data and external services with practical, understandable integrations.', items: ['REST APIs', 'MySQL / PostgreSQL', 'JSON', 'Validation and testing'] },
  { title: 'AI-Powered Web Features', icon: Robot, description: 'Exploring useful AI features inside applications rather than treating AI as a replacement for product thinking.', items: ['OpenAI API', 'Gemini API', 'Claude API', 'Prompt design'] },
  { title: 'Workflow Automation', icon: Lightning, description: 'Practical automation experiments using Make.com, webhooks, APIs, and business tools.', items: ['Triggers and actions', 'Filters and routers', 'Scheduling', 'Error handling'] },
  { title: 'Modern Frontend Experiences', icon: Globe, description: 'Mobile-first pages with intentional hierarchy, accessible interactions, and subtle motion.', items: ['Tailwind CSS', 'Interaction states', 'Dark mode', 'Performance-minded UI'] },
  { title: 'Integration Learning', icon: PlugsConnected, description: 'Areas I can contribute to while continuing to build depth through projects and documentation.', items: ['Make.com → Airtable', 'Google Sheets', 'Gmail', 'HTTP/API integrations'] },
];

export default function ServicesPage() {
  return <section className="space-y-8"><header><div className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-500">Capability areas</div><h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">What I can help build.</h1><p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">These are areas I can provide or continue developing through practical work. They are not a claim of a large client portfolio or enterprise consulting history.</p></header><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{capabilityAreas.map((area, index) => { const Icon = area.icon; return <motion.article key={area.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} whileHover={{ y: -5 }} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition dark:border-slate-700 dark:bg-slate-900"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500"><Icon size={23} weight="fill" /></div><h2 className="text-xl font-bold text-slate-900 dark:text-white">{area.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{area.description}</p><div className="mt-5 space-y-2">{area.items.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><span className="h-1.5 w-1.5 rounded-full bg-orange-500" />{item}</div>)}</div></motion.article>; })}</div></section>;
}
