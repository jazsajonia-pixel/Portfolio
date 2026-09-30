'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import profileImage from '../../assets/profile.jpeg';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Globe,
  Lightning,
  Moon,
  Sparkle,
  Star,
  Sun,
} from 'phosphor-react';

const tools = [
  'React', 'Next.js', 'Tailwind', 'Framer Motion', 'Node.js',
  'TypeScript', 'PostgreSQL', 'Python', 'AI Automation', 'Cloud',
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
  ['Client 1', 'Operations Manager @ GHL Specialist', 'Very thoughtful, fast, and detail-oriented.'],
  ['Client 2', 'Growth & AI Engineer', 'Helped us automate the busy work and ship faster.'],
  ['Client 3', 'Web Dev & GHL Specialist', 'Clean systems and flawless execution from start to finish.'],
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [transition, setTransition] = useState(null);
  const toggleRef = useRef(null);
  const transitionTimer = useRef(null);

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    if (saved === 'dark') setIsDark(true);

    return () => window.clearTimeout(transitionTimer.current);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    if (transition) return;

    const nextDark = !isDark;
    const rect = toggleRef.current?.getBoundingClientRect();

    if (!rect) {
      setIsDark(nextDark);
      return;
    }

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    ) * 1.08;

    setTransition({
      x,
      y,
      radius,
      color: nextDark ? '#0b0d10' : '#f7f3ef',
      nextDark,
    });

    transitionTimer.current = window.setTimeout(() => {
      setIsDark(nextDark);
      window.setTimeout(() => setTransition(null), 70);
    }, 650);
  };

  const theme = isDark
    ? {
        page: '#080a0d',
        window: '#101318',
        sidebar: '#13171c',
        panel: '#171b21',
        panelSoft: '#1b2027',
        border: '#2b323d',
        text: '#f5f7fa',
        muted: '#a0a9b7',
        subtle: '#7d8796',
        white: '#20252d',
        chip: '#242a33',
        bluePanel: '#18232e',
        darkBox: '#080a0d',
        darkBox2: '#111720',
        button: '#f5f7fa',
        buttonText: '#101318',
      }
    : {
        page: '#020202',
        window: '#f5f1ee',
        sidebar: '#f8f5f1',
        panel: '#f7f3ef',
        panelSoft: '#fcf9f6',
        border: '#e4ded7',
        text: '#111827',
        muted: '#6b7280',
        subtle: '#4b5563',
        white: '#ffffff',
        chip: '#f2f5f9',
        bluePanel: '#dfeaf7',
        darkBox: '#161a20',
        darkBox2: '#101827',
        button: '#111827',
        buttonText: '#ffffff',
      };

  return (
    <main
      className="min-h-screen transition-[background-color] duration-700 ease-out"
      style={{ backgroundColor: theme.page }}
    >
      <div
        className="mx-auto flex min-h-screen w-full flex-col overflow-hidden transition-[background-color] duration-700 ease-out"
        style={{ backgroundColor: theme.window }}
      >
        <TopBar theme={theme} isDark={isDark}>
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: theme.white,
              borderColor: theme.border,
              color: theme.text,
            }}
          >
            <motion.span
              className="flex items-center justify-center"
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {isDark ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
            </motion.span>
          </button>
        </TopBar>

        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          <Sidebar theme={theme} />

          <div
            className="relative min-w-0 flex-1 overflow-y-auto transition-[background-color] duration-700 ease-out"
            style={{ backgroundColor: theme.panel }}
          >
            <div className="mx-auto max-w-[1500px] p-3 sm:p-5 lg:p-8">
              <div
                className="rounded-[28px] p-4 shadow-sm transition-[background-color,border-color] duration-700 sm:p-6 lg:p-8"
                style={{ backgroundColor: theme.panelSoft, border: `1px solid ${theme.border}` }}
              >
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
              </div>
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {transition && (
          <motion.div
            key={`${transition.x}-${transition.y}`}
            initial={{
              clipPath: `circle(0px at ${transition.x}px ${transition.y}px)`,
              opacity: 0.96,
            }}
            animate={{
              clipPath: `circle(${transition.radius}px at ${transition.x}px ${transition.y}px)`,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
            style={{ backgroundColor: transition.color }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function TopBar({ theme, isDark, children }) {
  return (
    <div
      className="flex h-12 shrink-0 items-center justify-between border-b px-4 transition-colors duration-700"
      style={{ backgroundColor: isDark ? '#12151a' : '#f1efe9', borderColor: theme.border }}
    >
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#fdbb2d]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex items-center gap-3">
        <span
          className="rounded-full border px-3 py-1 text-[11px] transition-colors duration-700"
          style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.muted }}
        >
          jazzthersajonia.com
        </span>
        {children}
      </div>
    </div>
  );
}

function Sidebar({ theme }) {
  const items = [
    ['Home', Sparkle, '/'],
    ['Projects', Briefcase, '/projects'],
    ['Services', Lightning, '/services'],
    ['About', CheckCircle, '/about'],
    ['Contact', EnvelopeSimple, '/contact'],
  ];

  return (
    <aside
      className="flex w-full shrink-0 flex-col border-b p-4 transition-colors duration-700 md:w-[260px] md:border-b-0 md:border-r md:p-5"
      style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
    >
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <motion.img
          whileHover={{ scale: 1.08, rotate: 2 }}
          src={profileImage.src}
          alt="Jazzther Bert Shanne O. Sajonia"
          className="h-12 w-12 rounded-full object-cover object-center shadow-sm"
        />
        <div className="min-w-0">
          <div className="truncate text-[15px] font-semibold" style={{ color: theme.text }}>
            Jazzther Bert Shanne O. Sajonia
          </div>
          <div className="truncate text-[11px]" style={{ color: theme.muted }}>
            @jaz.sajonia@gmail.com
          </div>
        </div>
      </motion.div>

      <div className="mt-4 flex items-center gap-2">
        {[GithubLogo, LinkedinLogo, Globe].map((Icon, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ y: -4, rotate: index % 2 ? -4 : 4 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors duration-700"
            style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}
          >
            <Icon size={16} weight="fill" />
          </motion.a>
        ))}
      </div>

      <nav className="mt-5 flex gap-1 overflow-x-auto md:mt-8 md:block md:space-y-2">
        {items.map(([name, Icon, href], index) => (
          <Link key={name} href={href} className="shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-500 hover:bg-black/5"
              style={{ color: theme.subtle }}
            >
              <Icon size={18} />
              <span>{name}</span>
            </motion.div>
          </Link>
        ))}
      </nav>

      <div className="mt-4 hidden pt-4 md:mt-auto md:block" style={{ borderTop: `1px solid ${theme.border}` }}>
        <div className="text-[11px]" style={{ color: theme.muted }}>
          <span style={{ color: theme.text }}>© 2026</span> • Jazzther Bert Shanne O. Sajonia
          <p className="mt-2">All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
}

function Hero({ theme, isDark }) {
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
