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
      value: 'hello@jazzxajonia.com',
      link: 'mailto:hello@jazzxajonia.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
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
    <section className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-dark-300 max-w-2xl">
          Have a project in mind or want to collaborate? I'd love to hear from you. Let's create
          something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                className="flex items-start gap-4 p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500 transition-smooth group"
              >
                <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-smooth flex-shrink-0">
                  <Icon size={24} weight="fill" className="text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-dark-400 font-semibold">{info.label}</p>
                  <p className="text-dark-200 group-hover:text-primary-500 transition-colors">
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
          className="lg:col-span-2 bg-dark-800 rounded-xl p-8 border border-dark-700"
        >
          <div className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-dark-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-dark-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-dark-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Project inquiry"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-semibold text-dark-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
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
        className="mt-20 p-8 bg-dark-800 rounded-xl border border-dark-700 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
        <p className="text-dark-300 mb-6">
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
