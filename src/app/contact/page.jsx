'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin } from 'phosphor-react';

const contactInfo = [
  { icon: EnvelopeSimple, label: 'Email', value: 'jaz.sajonia@gmail.com', link: 'mailto:jaz.sajonia@gmail.com' },
  { icon: Phone, label: 'Phone', value: '(+63) 9367046410', link: 'tel:+639367046410' },
  { icon: MapPin, label: 'Location', value: 'General Santos City, Philippines' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'I couldn’t send your message. Please try again or email me directly.');
      }
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      setStatus({ type: 'success', message: 'Thanks — your message has been sent.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'I couldn’t send your message. Please email me directly instead.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full">
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">Contact</h1>
        <p className="max-w-2xl text-base leading-7 text-portfolio-subtle sm:text-lg">Have a question about a project or want to discuss a collaboration? Send me a note using the form or contact details below.</p>
      </motion.header>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return <motion.div key={info.label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .06 }} className="flex items-start gap-4 rounded-2xl border border-portfolio-border bg-portfolio-card p-4">
              <div className="flex-shrink-0 rounded-lg bg-primary-500/10 p-3 text-primary-700 dark:text-primary-400"><Icon size={24} weight="fill" /></div>
              <div className="min-w-0 break-words">
                <p className="text-sm font-semibold text-portfolio-muted">{info.label}</p>
                {info.link
                  ? <a href={info.link} className="text-portfolio-text transition-colors hover:text-primary-700 dark:hover:text-primary-400">{info.value}</a>
                  : <p className="text-portfolio-text">{info.value}</p>}
              </div>
            </motion.div>;
          })}
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 sm:p-6 xl:col-span-2">
          <div className="space-y-5">
            <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
              <label htmlFor="website">Leave this field empty</label>
              <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
            <div><label htmlFor="name" className="mb-2 block text-sm font-semibold text-portfolio-text">Your name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" maxLength={120} required className="w-full rounded-xl border border-portfolio-border bg-portfolio-chip px-4 py-3 text-portfolio-text placeholder:text-portfolio-muted focus:border-primary-500 focus:outline-none" placeholder="Your name" /></div>
            <div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-portfolio-text">Email address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" maxLength={254} required className="w-full rounded-xl border border-portfolio-border bg-portfolio-chip px-4 py-3 text-portfolio-text placeholder:text-portfolio-muted focus:border-primary-500 focus:outline-none" placeholder="you@example.com" /></div>
            <div><label htmlFor="subject" className="mb-2 block text-sm font-semibold text-portfolio-text">Subject</label><input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} maxLength={160} required className="w-full rounded-xl border border-portfolio-border bg-portfolio-chip px-4 py-3 text-portfolio-text placeholder:text-portfolio-muted focus:border-primary-500 focus:outline-none" placeholder="What would you like to discuss?" /></div>
            <div><label htmlFor="message" className="mb-2 block text-sm font-semibold text-portfolio-text">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} maxLength={5000} className="w-full resize-y rounded-xl border border-portfolio-border bg-portfolio-chip px-4 py-3 text-portfolio-text placeholder:text-portfolio-muted focus:border-primary-500 focus:outline-none" placeholder="Write a short message" /></div>
            <button type="submit" disabled={isSending} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 disabled:cursor-not-allowed disabled:opacity-60">
              <EnvelopeSimple size={20} weight="fill" /> {isSending ? 'Sending…' : 'Send message'}
            </button>
            {status.message && <p role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite" className={`text-center text-sm leading-5 ${status.type === 'error' ? 'text-red-700 dark:text-red-400' : 'text-emerald-700 dark:text-emerald-400'}`}>{status.message}</p>}
            <p className="text-center text-xs leading-5 text-portfolio-muted">This site doesn’t save submissions. If email delivery is unavailable, use the direct email link below.</p>
          </div>
        </motion.form>
      </div>

      <aside className="mt-8 rounded-[22px] border border-portfolio-border bg-portfolio-card p-5 text-center sm:p-6">
        <h2 className="mb-3 text-2xl font-bold text-portfolio-text">A note about the form</h2>
        <p className="mx-auto max-w-2xl text-portfolio-subtle">Prefer email? You can also reach me directly at <a className="font-semibold text-primary-700 underline underline-offset-2 dark:text-primary-400" href="mailto:jaz.sajonia@gmail.com">jaz.sajonia@gmail.com</a>.</p>
      </aside>
    </section>
  );
}
