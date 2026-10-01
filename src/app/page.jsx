'use client';

import { motion } from 'framer-motion';
import { usePortfolioTheme } from '@/components/PortfolioShell';
import profileImage from '../../assets/profile.jpeg';
import {
  ArrowRight,
  CheckCircle,
  Lightning,
  Sparkle,
  Star,
} from 'phosphor-react';

const tools = [
  'React', 'Next.js', 'Tailwind', 'Make.com', 'Flytables',
  'Node.js', 'TypeScript', 'PostgreSQL', 'AI Automation', 'Vercel',
];

const cards = [
  {
    title: 'Projects',
    label: 'Recent builds',
    text: 'Funnels, workflows and apps built to solve real business problems.',
    light: '#f9e9d9',
    dark: '#30261f',
  },
  {
    title: 'About',
    label: 'Profile',
    text: 'I build modern digital experiences that turn ideas into polished products.',
    light: '#eef4ff',
    dark: '#202a38',
  },
  {
    title: 'AI Builds',
    label: 'Automation',
    text: 'Agents, automations and business systems that keep workflows running 24/7.',
    light: '#f6f1ff',
    dark: '#29233a',
  },
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

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        <div
          className="mt-8 overflow-hidden rounded-[22px] border p-4 transition-colors duration-700"
          style={{ backgroundColor: theme.bluePanel, borderColor: theme.border }}
        >
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: theme.subtle }}>
            <Star size={13} weight="fill" className="text-orange-500" />
            Tools I work with
          </div>
          <Marquee theme={theme} />
        </div>
      </motion.section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 * index + 0.2, duration: 0.65, type: 'spring', stiffness: 90 }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group rounded-[22px] border p-4 shadow-sm transition-colors duration-700"
            style={{ backgroundColor: isDark ? card.dark : card.light, borderColor: theme.border }}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: theme.subtle }}>
                {card.label}
              </span>
              <motion.span
                whileHover={{ rotate: 45 }}
                className="rounded-full p-2 transition-colors duration-700"
                style={{ backgroundColor: isDark ? '#ffffff12' : '#ffffffcc', color: theme.text }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>
              {card.title}
            </h2>

            <p className="mt-3 text-sm leading-6" style={{ color: theme.subtle }}>
              {card.text}
            </p>

            <motion.div
              whileHover={{ scale: 1.025 }}
              className="mt-5 h-32 rounded-[18px] p-3 text-white shadow-inner"
              style={{ backgroundColor: theme.darkBox }}
            >
              <div
                className="flex h-full items-end justify-between rounded-[12px] border p-3"
                style={{
                  borderColor: '#ffffff1a',
                  background: `linear-gradient(135deg, ${theme.darkBox2}, ${isDark ? '#141922' : '#171d29'}, #0e1724)`,
                }}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">Build</div>
                  <div className="mt-2 text-xl font-bold">Flow</div>
                </div>
                <motion.div
                  animate={{ opacity: [0.45, 1, 0.45], y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="text-xs text-sky-300"
                >
                  Live
                </motion.div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </section>

      <section className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_1fr_1.2fr]">
        <Panel title="Credentials" icon={<CheckCircle size={14} />} theme={theme}>
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
            Certified Admin
          </div>
          <div className="mt-4 space-y-2">
            {['Coding Funnels', 'GHA Automation', 'CRM Setup', 'Website', 'Apps'].map((item, i) => (
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

function Hero({ theme, isDark }) {
  return (
    <header className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-7">
      <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, type: 'spring', stiffness: 110 }}
          whileHover={{ scale: 1.08, rotate: 3 }}
          src={profileImage.src}
          alt="Jazzther Bert Shanne O. Sajonia"
          className="h-14 w-14 shrink-0 rounded-full object-cover object-center shadow-md sm:h-16 sm:w-16"
        />
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="text-lg font-bold tracking-tight sm:text-2xl"
            style={{ color: theme.text }}
          >
            Jazzther Bert Shanne O.
          </motion.div>
          <div className="text-xs sm:text-sm" style={{ color: theme.muted }}>@jazsajonia-pixel</div>
        </div>
      </div>

      <motion.a
        href="/contact"
        whileHover={{ scale: 1.035, x: -2 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-colors duration-700 w-full sm:w-auto"
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
