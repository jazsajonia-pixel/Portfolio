'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'phosphor-react';

const skills = [
  'React & Next.js',
  'JavaScript & TypeScript',
  'Tailwind CSS',
  'Make.com Automation',
  'Flytables Integration',
  'Node.js & Express',
  'Python & AI Agents',
  'PostgreSQL & Databases',
  'REST APIs & Webhooks',
  'Vercel & Cloud Deployment',
  'Framer Motion',
  'Responsive Design',
];

export default function AboutPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-base sm:text-lg text-portfolio-subtle">
          Get to know me and my passion for creating amazing digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
            <p className="text-portfolio-subtle text-lg leading-relaxed">
              I'm Jazz Sajonia, a passionate web developer and AI automation specialist with a keen
              interest in building innovative digital solutions. With several years of experience in
              web development and AI/ML technologies, I help businesses transform their ideas into
              powerful, scalable applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-portfolio-subtle text-lg leading-relaxed">
              My journey in tech started with a passion for problem-solving and creativity. Over the
              years, I've worked with startups and established companies, delivering high-quality
              solutions that drive real business impact. I believe in continuous learning and staying
              updated with the latest technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">My Approach</h2>
            <p className="text-portfolio-subtle text-lg leading-relaxed">
              I combine technical expertise with a user-centric approach to deliver solutions that are
              not only technically sound but also intuitive and enjoyable to use. Every project is an
              opportunity to create something meaningful and impactful.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-portfolio-card rounded-[22px] p-5 sm:p-6 border border-portfolio-border h-fit"
        >
          <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="flex items-center gap-3 group"
              >
                <CheckCircle
                  size={24}
                  weight="fill"
                  className="text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-portfolio-text group-hover:text-primary-600 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-8 border-t border-portfolio-border grid grid-cols-2 gap-6"
          >
            <div>
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-portfolio-subtle text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">5+</p>
              <p className="text-portfolio-subtle text-sm">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
