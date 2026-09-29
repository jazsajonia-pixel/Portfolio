'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  Lightning,
  LinkedinLogo,
  MapPin,
  Spa rkle,
  Star,
} from 'phosphor-react';

const tools = [
  'React',
  'Next.js',
  'Tailwind',
  'Framer Motion',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'Python',
  'AI Automation',
  'Cloud',
];

const cards = [
  {
    title: 'Projects',
    text: 'Funnels, workflows and apps built to solve real business problems.',
    accent: 'bg-[#f9e9d9]',
    label: 'Recent builds',
  },
  {
    title: 'About',
    text: 'I build modern digital experiences that turn ideas into polished products.',
    accent: 'bg-[#eef4ff]',
    label: 'Profile',
  },
  {
    title: 'AI Builds',
    text: 'Agents, automations and business systems that keep workflows running 24/7.',
    accent: 'bg-[#f6f1ff]',
    label: 'Automation',
  },
];

const credentials = [
  'Coding Funnels',
  'GHA Automation',
  'CRM Setup',
  'Website',
  'Apps',
];

const testimonials = [
  { name: 'Client 1', role: 'Operations Manager @ GHL Specialist', quote: 'Very thoughtful, fast, and detail-oriented.' },
  { name: 'Client 2', role: 'Growth & AI Engineer', quote: 'Helped us automate the busy work and ship faster.' },
  { name: 'Client 3', role: 'Web Dev & GHL Specialist', quote: 'Clean systems and flawless execution from start to finish.' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020202] p-0">
      <div className="mx-auto flex h-screen w-full max-w-[100vw] flex-col overflow-hidden bg-[#f5f1ee] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
        <div className="flex h-12 items-center justify-between border-b border-[#e4ded7] bg-[#f1efe9] px-4">
          <div className="flex items-center gap-2 text-[11px] text-[#6b7280]">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#fdbb2d]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#6b7280]">
            <span className="rounded-full border border-[#d9d2ca] bg-white/60 px-2 py-1">jazzthersajonia.com</span>
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          <aside className="flex w-[260px] flex-col border-r border-[#e4ded7] bg-[#f8f5f1] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f4d8c4] via-[#d9d4ef] to-[#d2edfa] text-sm font-bold text-[#1f2937]">
                JS
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[#0f172a]">Jazzther Bert Shanne O. Sajonia</div>
                <div className="text-[11px] text-[#6b7280]">@jaz.sajonia@gmail.com</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              {[GithubLogo, LinkedinLogo, Globe].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4ded7] bg-white text-[#1f2937] shadow-sm"
                >
                  <Icon size={16} weight="fill" />
                </motion.a>
              ))}
            </div>

            <nav className="mt-8 space-y-2">
              {[{ name: 'Home', icon: 'House', href: '/' }, { name: 'Projects', icon: 'FolderOpen', href: '/projects' }, { name: 'Services', icon: 'GearSix', href: '/services' }, { name: 'About', icon: 'User', href: '/about' }, { name: 'Contact', icon: 'EnvelopeSimple', href: '/contact' }].map((item) => {
                const Icon = item.icon === 'House' ? Sparkle : item.icon === 'FolderOpen' ? Briefcase : item.icon === 'GearSix' ? Lightning : item.icon === 'User' ? CheckCircle : EnvelopeSimple;

                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#3f3f46] transition-colors hover:bg-white hover:text-[#0f172a]"
                    >
                      <Icon size={18} weight="regular" />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
              
            <div className="mt-auto pt-5">
              <div className="border-t border-[#e4ded7] pt-4 text-[11px] text-[#6b7280]">
                <div className="flex items-center gap-2">
                  <span className="text-[#111827]">© 2026</span>
                  <span>•</span>
                  <span>Jazzther Sajonia</span>
                </div>
                <p className="mt-2">All rights reserved.</p>
              </div>
            </div>
          </aside>

          <div className="flex-1 overflow-y-auto bg-[#f7f3ef] p-4 md:p-6 lg:p-8">
            <div className="rounded-[24px] bg-[#f9f5f2] p-4 md:p-6">
              <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f7d8be] via-[#d4d2e4] to-[#dceefa] text-lg font-bold text-[#1f2937] shadow-inner">
                    JS
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight text-[#111827]">Jazzther Sajonia</div>
                    <div className="text-sm text-[#6b7280]">@jazzther</div>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-200"
                >
                  Get in touch
                  <ArrowRight size={16} />
                </motion.a>
              </header>

              <section className="mt-7 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-[#111827] md:text-[4rem]"
                >
                  Build it once. Run it forever.
                </motion.h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm text-[#4b5563] md:text-base">
                  Lost leads are never found again. A workflow built once works forever, and the follow-up that fires itself never asks for a raise.
                </p>
              </section>

              <div className="mt-8 rounded-[20px] border border-[#dfe5ee] bg-[#dfeaf7] p-4">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b5563]">
                  <Star size={12} weight="fill" className="text-[#ef8f3d]" />
                  Tools I work with
                </div>

                <div className="overflow-hidden">
                  <Marquee />
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className={`rounded-[22px] border border-[#e1d9d2] ${card.accent} p-4`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b5563]">{card.label}</div>
                      <span className="rounded-full bg-white/80 p-2 text-[#111827]">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#4b5563]">{card.text}</p>
                    <div className="mt-5 h-32 rounded-[18px] bg-[#161a20] p-3 text-white shadow-inner">
                      <div className="flex h-full items-end justify-between rounded-[12px] border border-white/10 bg-gradient-to-br from-[#101827] via-[#171d29] to-[#0e1724] p-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.12em] text-[#94a3b8]">Build</div>
                          <div className="mt-2 text-xl font-bold">Flow</div>
                        </div>
                        <div className="text-xs text-[#7dd3fc]">Live</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_1fr_1.2fr]">
                <div className="rounded-[22px] border border-[#e1d9d2] bg-[#fffaf5] p-5">
                  <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b5563]">
                    <CheckCircle size={14} className="text-[#ef8f3d]" />
                    Credentials
                  </div>
                  <div className="flex items-center justify-center rounded-[18px] bg-[#f8f5f2] p-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#ef8f3d] bg-[#fff6eb] text-[#ef8f3d]">
                      <CheckCircle size={32} weight="fill" />
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-medium text-[#111827]">Certified Admin</div>
                  <div className="mt-4 space-y-2">
                    {credentials.map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm text-[#374151] shadow-sm">
                        <span>{item}</span>
                        <span className="text-[#f97316]">•</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-[#e1d9d2] bg-[#fffaf5] p-5">
                  <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b5563]">
                    <Lightning size={14} className="text-[#ef8f3d]" />
                    Services
                  </div>
                  <ul className="space-y-3">
                    {['Code Funnels', 'GHL Automation', 'CRM Setup', 'Website', 'Apps'].map((service, i) => (
                      <li key={service} className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                        <span className="text-sm text-[#111827]">{service}</span>
                        <span className="text-[10px] font-semibold text-[#6b7280]">0{i + 1}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[22px] border border-[#e1d9d2] bg-[#fffaf5] p-5">
                  <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b5563]">
                    <Sparkle size={14} className="text-[#ef8f3d]" />
                    Testimonials
                  </div>
                  <div className="space-y-3">
                    {testimonials.map((item) => (
                      <div key={item.name} className="rounded-[16px] bg-white p-3 shadow-sm">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#111827]">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111827] text-[10px] text-white">{item.name.split(' ')[1]?.charAt(0) || 'C'}</span>
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#6b7280]">{item.role}</div>
                        <p className="mt-2 text-sm text-[#374151]">“{item.quote}”</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-w-full gap-3 whitespace-nowrap"
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="flex w-max items-center gap-3"
      >
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={`${tool}-${index}`}
            className="flex items-center gap-2 rounded-full border border-[#d8dfe8] bg-white/80 px-3 py-2 text-sm font-medium text-[#111827] shadow-sm"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f2f5f9] text-[#111827]">
              <Star size={12} weight="fill" className="text-[#ef8f3d]" />
            </span>
            {tool}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
