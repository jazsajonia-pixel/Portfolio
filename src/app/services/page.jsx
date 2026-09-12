'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Robot,
  Gear,
  Rocket,
  ShieldCheck,
  ChartLine,
} from 'phosphor-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Full-stack web applications built with modern technologies like React, Next.js, and Node.js.',
    icon: Code,
    features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
  },
  {
    id: 2,
    title: 'AI Automation',
    description:
      'Intelligent automation solutions using AI/ML to streamline business processes and increase efficiency.',
    icon: Robot,
    features: ['Workflow Automation', 'Data Processing', 'AI Integration'],
  },
  {
    id: 3,
    title: 'API Development',
    description:
      'Robust and scalable REST and GraphQL APIs with secure authentication and rate limiting.',
    icon: Gear,
    features: ['REST APIs', 'GraphQL', 'Real-time Solutions'],
  },
  {
    id: 4,
    title: 'Deployment & Hosting',
    description:
      'Deploy your applications on cloud platforms with continuous integration and monitoring.',
    icon: Rocket,
    features: ['AWS/GCP/Azure', 'CI/CD Pipeline', 'Monitoring'],
  },
  {
    id: 5,
    title: 'Security & Optimization',
    description:
      'Secure your application with best practices and optimize for performance and scalability.',
    icon: ShieldCheck,
    features: ['Security Audit', 'Performance Optimization', 'Best Practices'],
  },
  {
    id: 6,
    title: 'Consulting & Strategy',
    description:
      'Strategic guidance on technology selection, architecture design, and business growth.',
    icon: ChartLine,
    features: ['Tech Stack Selection', 'Architecture Design', 'Growth Strategy'],
  },
];

export default function ServicesPage() {
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
        <h1 className="text-5xl font-bold mb-4">Services</h1>
        <p className="text-xl text-dark-300 max-w-2xl">
          Comprehensive solutions tailored to meet your business needs and drive growth through
          technology and innovation.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-dark-800 rounded-xl p-8 border border-dark-700 hover:border-primary-500 transition-smooth hover:shadow-lg hover:shadow-primary-500/20 group"
            >
              <div className="mb-4 inline-block p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-smooth">
                <Icon
                  size={32}
                  weight="fill"
                  className="text-primary-500"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-dark-300 mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-dark-200">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
