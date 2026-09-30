'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  Lightning,
  LinkedinLogo,
  Moon,
  Sparkle,
  Star,
  Sun,
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
    accent: '#f9e9d9',
    darkAccent: '#30261f',
    label: 'Recent builds',
  },
  {
    title: 'About',
    text: 'I build modern digital experiences that turn ideas into polished products.',
    accent: '#eef4ff',
    darkAccent: '#202a38',
    label: 'Profile',
  },
  {
    title: 'AI Builds',
    text: 'Agents, automations and business systems that keep workflows running 24/7.',
    accent: '#f6f1ff',
    darkAccent: '#29233a',
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
  {
    name: 'Client 1',
    role: 'Operations Manager @ GHL Specialist',
    quote: 'Very thoughtful, fast, and detail-oriented.',
  },
  {
    name: 'Client 2',
    role: 'Growth & AI Engineer',
    quote: 'Helped us automate the busy work and ship faster.',
  },
  {
    name: 'Client 3',
    role: 'Web Dev & GHL Specialist',
    quote: 'Clean systems and flawless execution from start to finish.',
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [wipe, setWipe] = useState(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    const rect = toggleRef.current?.getBoundingClientRect();

    if (rect) {
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      setWipe({
        x,
        y,
        radius,
        color: next ? '#0b0d10' : '#f5f1ee',
      });

      window.setTimeout(() => setWipe(null), 720);
    }

    setIsDark(next);
  };

  const theme = isDark
    ? {
        page: '#0b0d10',
        window: '#111419',
        sidebar: '#15181d',
        panel: '#171a20',
        panelSoft: '#1c2027',
        border: '#2a3039',
        text: '#f4f6f8',
        muted: '#9ca6b5',
        subtle: '#747e8d',
        white: '#20252d',
        chip: '#222831',
        bluePanel: '#18232e',
        darkBox: '#080a0d',
        darkBox2: '#10151c',
        button: '#f4f6f8',
        buttonText: '#101318',
      }
    : {
        page: '#020202',
        window: '#f5f1ee',
        sidebar: '#f8f5f1',
        panel: '#f7f3ef',
        panelSoft: '#f9f5f2',
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
    <>
      <main
        className="min-h-screen p-0 transition-colors duration-700"
        style={{ backgroundColor: theme.page }}
      >
        <div
          className="mx-auto flex h-screen w-full max-w-[100vw] flex-col overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-colors duration-700"
          style={{ backgroundColor: theme.window }}
        >
          <div
            className="flex h-12 items-center justify-between border-b px-4 transition-colors duration-700"
            style={{ backgroundColor: isDark ? '#12151a' : '#f1efe9', borderColor: theme.border }}
          >
            <div className="flex items-center gap-2 text-[11px]" style={{ color: theme.muted }}>
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#fdbb2d]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="flex items-center gap-2 text-[11px]" style={{ color: theme.muted }}>
              <span
                className="rounded-full border px-2 py-1 transition-colors duration-700"
                style={{ borderColor: theme.border, backgroundColor: theme.white }}
              >
                jazzthersajonia.com
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1">
            <aside
              className="flex w-[260px] flex-col border-r p-5 transition-colors duration-700"
              style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="/assets/profile.jpeg"
                  alt="Jazzther Bert Shanne O. Sajonia"
                  className="h-12 w-12 rounded-full object-cover object-center shadow-sm"
                />

                <div>
                  <div className="text-[15px] font-semibold" style={{ color: theme.text }}>
                    Jazzther Bert Shanne O. Sajonia
                  </div>
                  <div className="text-[11px]" style={{ color: theme.muted }}>
                    @jaz.sajonia@gmail.com
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                {[GithubLogo, LinkedinLogo, Globe].map((Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -2 }}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors duration-700"
                    style={{ borderColor: theme.border, backgroundColor: theme.white, color: theme.text }}
                  >
                    <Icon size={16} weight="fill" />
                  </motion.a>
                ))}
              </div>

              <nav className="mt-8 space-y-2">
                {[
                  { name: 'Home', icon: 'House', href: '/' },
                  { name: 'Projects', icon: 'FolderOpen', href: '/projects' },
                  { name: 'Services', icon: 'GearSix', href: '/services' },
                  { name: 'About', icon: 'User', href: '/about' },
                  { name: 'Contact', icon: 'EnvelopeSimple', href: '/contact' },
                ].map((item) => {
                  const Icon =
                    item.icon === 'House'
                      ? Sparkle
                      : item.icon === 'FolderOpen'
                        ? Briefcase
                        : item.icon === 'GearSix'
                          ? Lightning
                          : item.icon === 'User'
                            ? CheckCircle
                            : EnvelopeSimple;

                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-500 hover:bg-black/5 dark:hover:bg-white/5"
                        style={{ color: theme.subtle }}
                      >
                        <Icon size={18} weight="regular" />
                        <span>{item.name}</span>
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-5">
                <div className="border-t pt-4 text-[11px]" style={{ borderColor: theme.border, color: theme.muted }}>
                  <div className="flex items-center gap-2">
                    <span style={{ color: theme.text }}>© 2026</span>
                    <span>•</span>
                    <span>Jazzther Bert Shanne O. Sajonia</span>
                  </div>
                  <p className="mt-2">All rights reserved.</p>
                </div>
              </div>
            </aside>

            <div
              className="flex-1 overflow-y-auto p-4 transition-colors duration-700 md:p-6 lg:p-8"
              style={{ backgroundColor: theme.panel }}
            >
              <div
                className="rounded-[24px] p-4 transition-colors duration-700 md:p-6"
                style={{ backgroundColor: theme.panelSoft }}
              >
                <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/assets/profile.jpeg"
                      alt="Jazzther Bert Shanne O. Sajonia"
                      className="h-16 w-16 rounded-full object-cover object-center shadow-inner"
                    />

                    <div>
                      <div className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>
                        Jazzther Bert Shanne O. Sajonia
                      </div>
                      <div className="text-sm" style={{ color: theme.muted }}>
                        @jazzther
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      ref={toggleRef}
                      type="button"
                      onClick={toggleTheme}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                      title={isDark ? 'Light mode' : 'Dark mode'}
                      className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border shadow-sm transition-colors duration-500"
                      style={{
                        borderColor: theme.border,
                        backgroundColor: isDark ? '#20252d' : '#ffffff',
                        color: theme.text,
                      }}
                    >
                      <motion.span
                        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 1 : 1 }}
                        transition={{ duration: 0.45 }}
                      >
                        {isDark ? <Sun size={19} weight="fill" /> : <Moon size={19} weight="fill" />}
                      </motion.span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-colors duration-700"
                      style={{ backgroundColor: theme.button, color: theme.buttonText }}
                    >
                      Get in touch
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </header>

                <section className="mt-7 text-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold leading-[1.05] tracking-[-0.06em] md:text-[4rem]"
                    style={{ color: theme.text }}
                  >
                    Build it once. Run it forever.
                  </motion.h1>

                  <p
                    className="mx-auto mt-4 max-w-2xl text-sm transition-colors duration-700 md:text-base"
                    style={{ color: theme.subtle }}
                  >
                    Lost leads are never found again. A workflow built once works forever, and the follow-up that fires itself never asks for a raise.
                  </p>
                </section>

                <div
                  className="mt-8 rounded-[20px] border p-4 transition-colors duration-700"
                  style={{ backgroundColor: theme.bluePanel, borderColor: theme.border }}
                >
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: theme.subtle }}>
                    <Star size={12} weight="fill" className="text-[#ef8f3d]" />
                    Tools I work with
                  </div>
                  <div className="overflow-hidden">
                    <Marquee isDark={isDark} theme={theme} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      className="rounded-[22px] border p-4 transition-colors duration-700"
                      style={{ backgroundColor: isDark ? card.darkAccent : card.accent, borderColor: theme.border }}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: theme.subtle }}>
                          {card.label}
                        </div>
                        <span className="rounded-full p-2" style={{ backgroundColor: isDark ? '#ffffff12' : '#ffffffcc', color: theme.text }}>
                          <ArrowRight size={14} />
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold" style={{ color: theme.text }}>
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6" style={{ color: theme.subtle }}>
                        {card.text}
                      </p>

                      <div className="mt-5 h-32 rounded-[18px] p-3 text-white shadow-inner" style={{ backgroundColor: theme.darkBox }}>
                        <div
                          className="flex h-full items-end justify-between rounded-[12px] border p-3"
                          style={{ borderColor: '#ffffff1a', background: `linear-gradient(135deg, ${theme.darkBox2}, ${isDark ? '#141922' : '#171d29'}, #0e1724)` }}
                        >
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
                  <div
                    className="rounded-[22px] border p-5 transition-colors duration-700"
                    style={{ backgroundColor: isDark ? '#191c21' : '#fffaf5', borderColor: theme.border }}
                  >
                    <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: theme.subtle }}>
                      <CheckCircle size={14} className="text-[#ef8f3d]" />
                      Credentials
                    </div>

                    <div className="flex items-center justify-center rounded-[18px] p-5" style={{ backgroundColor: isDark ? '#20242b' : '#f8f5f2' }}>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#ef8f3d] bg-[#fff6eb] text-[#ef8f3d]">
                        <CheckCircle size={32} weight="fill" />
                      </div>
                    </div>

                    <div className="mt-4 text-center text-sm font-medium" style={{ color: theme.text }}>
                      Certified Admin
                    </div>

                    <div className="mt-4 space-y-2">
                      {credentials.map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm shadow-sm transition-colors duration-700"
                          style={{ backgroundColor: theme.white, color: theme.subtle }}
                        >
                          <span>{item}</span>
                          <span className="text-[#f97316]">•</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="rounded-[22px] border p-5 transition-colors duration-700"
                    style={{ backgroundColor: isDark ? '#191c21' : '#fffaf5', borderColor: theme.border }}
                  >
                    <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: theme.subtle }}>
                      <Lightning size={14} className="text-[#ef8f3d]" />
                      Services
                    </div>

                    <ul className="space-y-3">
                      {['Code Funnels', 'GHL Automation', 'CRM Setup', 'Website', 'Apps'].map((service, i) => (
                        <li
                          key={service}
                          className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors duration-700"
                          style={{ backgroundColor: theme.white }}
                        >
                          <span className="text-sm" style={{ color: theme.text }}>{service}</span>
                          <span className="text-[10px] font-semibold" style={{ color: theme.muted }}>0{i + 1}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-[22px] border p-5 transition-colors duration-700"
                    style={{ backgroundColor: isDark ? '#191c21' : '#fffaf5', borderColor: theme.border }}
                  >
                    <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: theme.subtle }}>
                      <Sparkle size={14} className="text-[#ef8f3d]" />
                      Testimonials
                    </div>

                    <div className="space-y-3">
                      {testimonials.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-[16px] p-3 shadow-sm transition-colors duration-700"
                          style={{ backgroundColor: theme.white }}
                        >
                          <div className="mb-2 flex items-center gap-2 text-sm font-semibold" style={{ color: theme.text }}>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111827] text-[10px] text-white">
                              {item.name.split(' ')[1]?.charAt(0) || 'C'}
                            </span>
                            {item.name}
                          </div>

                          <div className="text-[11px]" style={{ color: theme.muted }}>{item.role}</div>

                          <p className="mt-2 text-sm" style={{ color: theme.subtle }}>
                            “{item.quote}”
                          </p>
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

      {wipe && (
        <motion.div
          aria-hidden="true"
          initial={{ clipPath: `circle(0px at ${wipe.x}px ${wipe.y}px)` }}
          animate={{ clipPath: `circle(${wipe.radius}px at ${wipe.x}px ${wipe.y}px)` }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{ backgroundColor: wipe.color }}
        />
      )}
    </>
  );
}

function Marquee({ isDark, theme }) {
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
            className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium shadow-sm transition-colors duration-700"
            style={{ borderColor: theme.border, backgroundColor: isDark ? '#222831' : '#ffffffcc', color: theme.text }}
          >
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full"
              style={{ backgroundColor: theme.chip, color: theme.text }}
            >
              <Star size={12} weight="fill" className="text-[#ef8f3d]" />
            </span>
            {tool}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
