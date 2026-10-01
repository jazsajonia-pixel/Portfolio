'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt, CheckCircle } from 'phosphor-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      label: 'Email',
      value: 'jaz.sajonia@gmail.com',
      link: 'mailto:jaz.sajonia@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+63) 9367046410',
      link: 'tel:+639367046410',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'General Santos City, Philippines',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get In Touch</h1>
        <p className="text-base sm:text-lg text-portfolio-subtle max-w-2xl">
          Have a project in mind or want to collaborate? I'd love to hear from you. Let's create
          something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.label}
                variants={itemVariants}
                href={info.link}
                className="flex items-start gap-4 p-4 bg-portfolio-card rounded-lg border border-portfolio-border hover:border-primary-500 transition-smooth group"
              >
                <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-smooth flex-shrink-0">
                  <Icon size={24} weight="fill" className="text-primary-500" />
                </div>
                <div className="min-w-0 break-words">
                  <p className="text-sm text-portfolio-muted font-semibold">{info.label}</p>
                  <p className="text-portfolio-text group-hover:text-primary-500 transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="xl:col-span-2 bg-portfolio-card rounded-[22px] p-5 sm:p-6 border border-portfolio-border"
        >
          <div className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-portfolio-text mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-portfolio-chip border border-portfolio-border rounded-xl text-portfolio-text placeholder:text-portfolio-muted focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-portfolio-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-portfolio-chip border border-portfolio-border rounded-xl text-portfolio-text placeholder:text-portfolio-muted focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="subject" className="block text-sm font-semibold text-portfolio-text mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-portfolio-chip border border-portfolio-border rounded-xl text-portfolio-text placeholder:text-portfolio-muted focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Project inquiry"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold text-portfolio-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-portfolio-chip border border-portfolio-border rounded-xl text-portfolio-text placeholder:text-portfolio-muted focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-smooth"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} weight="fill" />
                  Message Sent!
                </>
              ) : (
                <>
                  <PaperPlaneTilt size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 p-5 sm:p-6 bg-portfolio-card rounded-[22px] border border-portfolio-border text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
        <p className="text-portfolio-subtle mb-6">
          Whether you're a startup looking to build your first product or an established business
          looking to scale, I'm here to help turn your vision into reality.
        </p>
        <p className="text-primary-500 font-semibold">
          Expect a response within 24 hours.
        </p>
      </motion.div>
    </section>
  );
}
