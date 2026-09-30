'use client';

import { motion } from 'framer-motion';
import { ArrowSquareOut, GithubLogo } from 'phosphor-react';

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
		<section className="w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mb-8"
			>
				<h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">My Projects</h1>
				<p className="text-base sm:text-lg text-portfolio-subtle max-w-2xl">
					Here&apos;s a collection of projects I&apos;ve built, showcasing my
					expertise in web development, AI automation, and innovative
					problem-solving.
				</p>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 lg:grid-cols-2 gap-4"
			>
				{projects.map((project) => (
					<motion.div
						key={project.id}
						variants={itemVariants}
						className="bg-portfolio-card rounded-[22px] overflow-hidden border border-portfolio-border hover:border-primary-500 transition-smooth hover:shadow-lg hover:shadow-primary-500/20 group"
					>
						{/* Project Image */}
						<div className="h-40 bg-portfolio-chip flex items-center justify-center border-b border-portfolio-border transition-colors">
							<span className="text-portfolio-subtle font-semibold">{project.image}</span>
						</div>

						{/* Project Content */}
						<div className="p-6">
							<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-portfolio-subtle mb-4">
								{project.description}
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 mb-6">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 bg-portfolio-chip text-portfolio-subtle text-sm rounded-full border border-portfolio-border"
									>
										{tag}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex flex-wrap gap-4">
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
									className="inline-flex items-center gap-2 text-portfolio-subtle hover:text-primary-500 font-semibold"
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
