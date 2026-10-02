'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePortfolioTheme } from '@/components/PortfolioShell';
import profileImage from '../../assets/profile.jpeg';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Lightning,
  Sparkle,
  Star,
  GithubLogo,
  FileText,
  Cpu,
  Database,
  ShieldCheck,
  GraduationCap,
  Medal,
  GitBranch,
} from 'phosphor-react';

const tools = [
  'React', 'Next.js', 'Tailwind', 'Make.com', 'Flytables',
  'Node.js', 'TypeScript', 'PostgreSQL', 'AI Automation', 'Vercel',
];

const services = ['Code Funnels', 'GHL Automation', 'CRM Setup', 'Website', 'Apps'];

const testimonials = [
  ['E-commerce Client', 'Operations Manager', 'Jazzther transformed our product workflows with Make.com and custom React builds.'],
  ['SaaS Founder', 'Growth & AI Lead', 'Helped us automate the repetitive work and shipped our web platform seamlessly on Vercel.'],
  ['Agency Partner', 'Web Dev Specialist', 'Clean system architecture, reliable API integrations, and flawless execution from start to finish.'],
];

export default function Home() {
  const { theme, isDark } = usePortfolioTheme();

  return (
    <>
      <Hero theme={theme} isDark={isDark} />

      {/* Marquee Toolbelt */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        aria-label="Technologies and Tools"
      >
        <div
          className="mt-8 overflow-hidden rounded-[22px] border p-4 transition-colors duration-700"
          style={{ backgroundColor: theme.bluePanel, borderColor: theme.border }}
        >
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: theme.subtle }}>
            <Star size={13} weight="fill" className="text-orange-500" />
            Tools & Tech Stack
          </div>
          <Marquee theme={theme} />
        </div>
      </motion.section>

      {/* High-Impact Featured Showcase Grid */}
      <section className="mt-8" aria-label="Featured Showcase Grid">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: theme.text }}>
              Featured Showcase & Credentials
            </h2>
            <p className="mt-1 text-xs sm:text-sm" style={{ color: theme.muted }}>
              Production-grade builds, verifiable background, and automated workflow engines.
            </p>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1: Featured Live Build: MarketHub */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between rounded-[24px] border p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{
              backgroundColor: isDark ? '#141922' : '#ffffff',
              borderColor: theme.border,
            }}
          >
            <div>
              {/* Header Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  FEATURED LIVE BUILD
                </span>
                <span className="text-[11px] font-semibold text-slate-400">01</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>
                MarketHub Platform
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed" style={{ color: theme.subtle }}>
                A modern local marketplace web app connecting buyers and sellers with real-time WebSocket messaging, custom store creation, and a live database analytics dashboard.
              </p>

              {/* Visual Container: Browser Window Mockup */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-900/90 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-700/40 bg-slate-900 px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">markethub-pi.vercel.app</span>
                  <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">LIVE</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src="/projects/markethub-showcase.jpg"
                    alt="MarketHub Platform UI Showcase"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {['React', 'Tailwind CSS', 'WebSockets', 'Full Stack', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2.5 py-1 text-[11px] font-medium transition-colors"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.chip,
                      color: theme.text,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t" style={{ borderColor: theme.border }}>
              <a
                href="https://markethub-pi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-transform active:scale-95"
                style={{ backgroundColor: theme.button, color: theme.buttonText }}
              >
                View Live Demo
                <ArrowUpRight size={14} weight="bold" />
              </a>
              <a
                href="https://github.com/jazsajonia-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-colors"
                style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}
              >
                <GithubLogo size={15} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </motion.article>

          {/* CARD 2: Proof of Work & Qualifications */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between rounded-[24px] border p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{
              backgroundColor: isDark ? '#141922' : '#ffffff',
              borderColor: theme.border,
            }}
          >
            <div>
              {/* Header Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  <ShieldCheck size={12} weight="bold" />
                  AT A GLANCE
                </span>
                <span className="text-[11px] font-semibold text-slate-400">02</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>
                Background & Credentials
              </h3>

              {/* Verified Credential Badge Mockup Container */}
              <div className="mt-4 rounded-2xl border p-3.5 transition-colors" style={{ backgroundColor: theme.chip, borderColor: theme.border }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    <CheckCircle size={22} weight="fill" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-500">VERIFIED CANDIDATE</span>
                    </div>
                    <p className="text-xs font-medium truncate" style={{ color: theme.text }}>
                      Jazzther Bert Shanne O. Sajonia
                    </p>
                  </div>
                </div>
              </div>

              {/* Qualification List */}
              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl border p-2.5 transition-colors" style={{ backgroundColor: theme.white, borderColor: theme.border }}>
                  <div className="flex items-start gap-2">
                    <GraduationCap size={16} className="mt-0.5 shrink-0 text-orange-500" weight="fill" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.muted }}>Education</div>
                      <div className="text-xs font-semibold" style={{ color: theme.text }}>
                        BS Information Technology Graduate
                      </div>
                      <div className="text-[11px]" style={{ color: theme.subtle }}>
                        South East Asian Institute of Technology
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-2.5 transition-colors" style={{ backgroundColor: theme.white, borderColor: theme.border }}>
                  <div className="flex items-start gap-2">
                    <Medal size={16} className="mt-0.5 shrink-0 text-sky-500" weight="fill" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.muted }}>Proficiency</div>
                      <div className="text-xs font-semibold" style={{ color: theme.text }}>
                        EF SET English Certificate
                      </div>
                      <div className="text-[11px]" style={{ color: theme.subtle }}>
                        Upper Intermediate / Advanced C1 Standard
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-2.5 transition-colors" style={{ backgroundColor: theme.white, borderColor: theme.border }}>
                  <div className="flex items-start gap-2">
                    <Cpu size={16} className="mt-0.5 shrink-0 text-emerald-500" weight="fill" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.muted }}>Key Builds & Stack</div>
                      <div className="text-xs font-semibold" style={{ color: theme.text }}>
                        3+ Full-Stack Web & Enterprise Systems
                      </div>
                      <div className="text-[11px]" style={{ color: theme.subtle }}>
                        Make.com, Next.js, TypeScript, PostgreSQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t" style={{ borderColor: theme.border }}>
              <a
                href="mailto:jaz.sajonia@gmail.com?subject=Request%20Resume%20-%20Jazzther%20Sajonia"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-transform active:scale-95"
                style={{ backgroundColor: theme.button, color: theme.buttonText }}
              >
                <FileText size={15} />
                Download Resume (PDF)
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-colors"
                style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}
              >
                Read Bio
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>

          {/* CARD 3: Workflow & Automation Engine */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between rounded-[24px] border p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{
              backgroundColor: isDark ? '#141922' : '#ffffff',
              borderColor: theme.border,
            }}
          >
            <div>
              {/* Header Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  <Lightning size={12} weight="fill" />
                  WORKFLOW & SYSTEMS
                </span>
                <span className="text-[11px] font-semibold text-slate-400">03</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>
                AI & API Automation Suite
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed" style={{ color: theme.subtle }}>
                Autonomous workflow engines and data pipelines built with Make.com, Python, FastAPI, and PostgreSQL to automate multi-step business logic and 24/7 background tasks.
              </p>

              {/* Visual Container: Node Graph Diagram */}
              <div className="mt-5 rounded-2xl border p-3.5 bg-slate-950 text-white shadow-inner">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2 mb-3">
                  <span>Pipeline Architecture</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ACTIVE 24/7
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 p-2">
                    <GitBranch size={16} className="text-purple-400 mb-1" />
                    <span className="text-[10px] font-bold text-slate-200">Webhooks</span>
                    <span className="text-[8px] text-slate-500">Triggers</span>
                  </div>

                  <div className="relative flex flex-col items-center justify-center rounded-xl border border-purple-500/40 bg-purple-950/40 p-2 shadow-sm">
                    <Cpu size={16} className="text-purple-300 mb-1" />
                    <span className="text-[10px] font-bold text-purple-200">AI Agents</span>
                    <span className="text-[8px] text-purple-400">Processing</span>
                  </div>

                  <div className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 p-2">
                    <Database size={16} className="text-blue-400 mb-1" />
                    <span className="text-[10px] font-bold text-slate-200">DB Sync</span>
                    <span className="text-[8px] text-slate-500">PostgreSQL</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1 text-[9px] font-mono text-purple-300 bg-purple-950/30 rounded-lg py-1 border border-purple-800/20">
                  <span>API Event Payload</span>
                  <span>→</span>
                  <span>AI Extraction</span>
                  <span>→</span>
                  <span>Neon DB</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {['Make.com', 'Python', 'AI Agents', 'PostgreSQL', 'FastAPI'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2.5 py-1 text-[11px] font-medium transition-colors"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.chip,
                      color: theme.text,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t" style={{ borderColor: theme.border }}>
              <Link
                href="/services"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-transform active:scale-95"
                style={{ backgroundColor: theme.button, color: theme.buttonText }}
              >
                Explore Architecture
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://github.com/jazsajonia-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-colors"
                style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}
              >
                <GithubLogo size={15} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </motion.article>

        </div>
      </section>

      {/* Services & Testimonials Section */}
      <section className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_1fr_1.2fr]">
        <Panel title="Credentials Summary" icon={<CheckCircle size={14} />} theme={theme}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center rounded-[18px] p-5"
            style={{ backgroundColor: isDark ? '#20242b' : '#f8f5f2' }}
          >
            <motion.div
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-orange-400 bg-orange-50 text-orange-500"
            >
              <CheckCircle size={32} weight="fill" />
            </motion.div>
          </motion.div>
          <div className="mt-4 text-center text-sm font-semibold" style={{ color: theme.text }}>
            Full-Stack & Automation Developer
          </div>
          <div className="mt-4 space-y-2">
            {['Code Funnels', 'GHL Automation', 'CRM Setup', 'Website', 'Apps'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm shadow-sm transition-colors duration-700"
                style={{ backgroundColor: theme.white, color: theme.subtle }}
              >
                <span>{item}</span>
                <span className="text-orange-500">•</span>
              </motion.div>
            ))}
          </div>
        </Panel>

        <Panel title="Services" icon={<Lightning size={14} />} theme={theme}>
          <ul className="space-y-3">
            {services.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors duration-700"
                style={{ backgroundColor: theme.white }}
              >
                <span className="text-sm" style={{ color: theme.text }}>{service}</span>
                <span className="text-[10px] font-semibold" style={{ color: theme.muted }}>0{i + 1}</span>
              </motion.li>
            ))}
          </ul>
        </Panel>

        <Panel title="Testimonials" icon={<Sparkle size={14} />} theme={theme}>
          <div className="space-y-3">
            {testimonials.map(([name, role, quote], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="rounded-[16px] p-3 shadow-sm transition-colors duration-700"
                style={{ backgroundColor: theme.white }}
              >
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold" style={{ color: theme.text }}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">
                    {name.slice(-1)}
                  </span>
                  {name}
                </div>
                <div className="text-[11px]" style={{ color: theme.muted }}>{role}</div>
                <p className="mt-2 text-sm" style={{ color: theme.subtle }}>“{quote}”</p>
              </motion.div>
            ))}
          </div>
        </Panel>
      </section>
    </>
  );
}

function Hero({ theme }) {
  return (
    <header className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, type: 'spring', stiffness: 110 }}
          whileHover={{ scale: 1.08, rotate: 3 }}
          src={profileImage.src}
          alt="Jazzther Bert Shanne O. Sajonia"
          className="h-16 w-16 shrink-0 rounded-full object-cover object-center shadow-md"
        />
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="text-xl font-bold tracking-tight sm:text-2xl"
            style={{ color: theme.text }}
          >
            Jazzther Bert Shanne O.
          </motion.div>
          <div className="text-sm" style={{ color: theme.muted }}>@jazzther</div>
        </div>
      </div>

      <motion.a
        href="/contact"
        whileHover={{ scale: 1.035, x: -2 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-colors duration-700"
        style={{ backgroundColor: theme.button, color: theme.buttonText }}
      >
        Get in touch
        <ArrowRight size={16} />
      </motion.a>
    </header>
  );
}

function Panel({ title, icon, theme, children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[22px] border p-5 transition-colors duration-700"
      style={{ backgroundColor: theme.panelSoft, borderColor: theme.border }}
    >
      <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: theme.subtle }}>
        <span className="text-orange-500">{icon}</span>
        {title}
      </div>
      {children}
    </motion.div>
  );
}

function Marquee({ theme }) {
  const list = [...tools, ...tools];

  return (
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      className="flex w-max gap-3"
    >
      {list.map((tool, index) => (
        <motion.div
          key={`${tool}-${index}`}
          whileHover={{ y: -3, scale: 1.04 }}
          className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium shadow-sm transition-colors duration-700"
          style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: theme.chip }}>
            <Star size={12} weight="fill" className="text-orange-500" />
          </span>
          {tool}
        </motion.div>
      ))}
    </motion.div>
  );
}
