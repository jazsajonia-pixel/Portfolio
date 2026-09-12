'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowSquareOut, GithubLogo } from 'phosphor-react';

const projects = [
	{
		id: 1,
		title: 'Project Alpha',
		description:
			'A full-stack web application built with React, Node.js, and MongoDB',
		tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
		link: '#',
		github: '#',
		image: 'Project 1',
	},
	{
		id: 2,
		title: 'Project Beta',
		description:
			'AI-powered automation tool for workflow management and optimization',
		tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
		link: '#',
		github: '#',
		image: 'Project 2',
	},
	{
		id: 3,
		title: 'Project Gamma',
		description: 'E-commerce platform with real-time inventory management',
		tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
		link: '#',
		github: '#',
		image: 'Project 3',
	},
	{
		id: 4,
		title: 'Project Delta',
		description: 'Data visualization dashboard with real-time analytics',
		tags: ['React', 'D3.js', 'Node.js', 'Firebase'],
		link: '#',
		github: '#',
		image: 'Project 4',
	},
];

export default function ProjectsPage() {
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
				<h1 className="text-5xl font-bold mb-4">My Projects</h1>
				<p className="text-xl text-dark-300 max-w-2xl">
					Here&apos;s a collection of projects I&apos;ve built, showcasing my
					expertise in web development, AI automation, and innovative
					problem-solving.
				</p>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
			>
				{projects.map((project) => (
					<motion.div
						key={project.id}
						variants={itemVariants}
						className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-smooth hover:shadow-lg hover:shadow-primary-500/20 group"
					>
						{/* Project Image */}
						<div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-700 transition-smooth">
							<span className="text-white font-semibold">{project.image}</span>
						</div>

						{/* Project Content */}
						<div className="p-6">
							<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-dark-300 mb-4">
								{project.description}
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 mb-6">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 bg-dark-700 text-primary-400 text-sm rounded-full border border-dark-600"
									>
										{tag}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex gap-4">
								<motion.a
									whileHover={{ x: 5 }}
									href={project.link}
									className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-semibold"
								>
									View Live <ArrowSquareOut size={16} />
								</motion.a>
								<motion.a
									whileHover={{ x: 5 }}
									href={project.github}
									className="inline-flex items-center gap-2 text-dark-300 hover:text-primary-500 font-semibold"
								>
									GitHub <GithubLogo size={16} />
								</motion.a>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
