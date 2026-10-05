'use client';

import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Wrench } from 'phosphor-react';

const skillGroups = [
  { title: 'Advanced', tone: 'orange', items: ['HTML'] },
  { title: 'Intermediate', tone: 'teal', items: ['CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'PHP', 'MySQL', 'PostgreSQL', 'Git', 'GitHub'] },
  { title: 'Beginner / developing', tone: 'slate', items: ['Node.js', 'Express', 'Laravel'] },
];

export default function AboutPage() {
  return <section className="space-y-8">
    <header><div className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-500">About the builder</div><h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Learning by shipping real projects.</h1><p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">I’m Jazzther Bert Shanne Sajonia, a Full-Stack Web Developer building skills through university coursework, self-directed learning, documentation, and practical projects.</p></header>
    <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center gap-3 text-orange-500"><GraduationCap size={21} weight="fill" /><h2 className="text-xl font-bold text-slate-900 dark:text-white">My path</h2></div><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">I started seriously programming in early 2024. Since then, I’ve combined university work with independent practice, tutorials, research, and personal builds to understand how interfaces, APIs, databases, and deployment fit together.</p><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">My main focus is web development. AI-assisted software development and practical workflow automation are important secondary capabilities that I’m actively developing.</p></div>
        <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm"><div className="flex items-center gap-3 text-cyan-300"><Wrench size={21} weight="fill" /><h2 className="text-xl font-bold">How I work with AI</h2></div><ol className="mt-5 grid gap-3 sm:grid-cols-2">{['Design the feature', 'Explain the requirement', 'Review generated code', 'Modify and debug', 'Test the behavior', 'Integrate and deploy'].map((item, index) => <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200"><span className="font-mono text-orange-300">0{index + 1}</span>{item}</li>)}</ol><p className="mt-5 text-sm leading-6 text-slate-400">The goal is not to outsource understanding. AI helps me move faster while I remain responsible for reviewing, testing, and integrating the result.</p></div>
      </motion.div>
      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"><div className="mb-5 flex items-center justify-between gap-4"><div><div className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-500">Current toolkit</div><h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Skill levels</h2></div><CheckCircle size={27} className="text-emerald-500" weight="fill" /></div><div className="space-y-5">{skillGroups.map((group) => <div key={group.title}><div className="mb-2 flex items-center justify-between"><h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3><span className={`h-2 w-2 rounded-full ${group.tone === 'orange' ? 'bg-orange-500' : group.tone === 'teal' ? 'bg-teal-500' : 'bg-slate-400'}`} /></div><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">{item}</span>)}</div></div>)}</div><div className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600 dark:border-slate-600 dark:text-slate-300">Also developing practical experience with OpenAI, Gemini, and Claude APIs; prompt engineering; AI-powered web features; function/tool calling; AI agents; and Make.com workflow integrations.</div></div>
    </div>
  </section>;
}
