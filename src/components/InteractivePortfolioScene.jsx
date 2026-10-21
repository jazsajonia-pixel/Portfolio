'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowSquareOut, GithubLogo, Mouse, Sparkle } from 'phosphor-react';

const Canvas = dynamic(() => import('@react-three/fiber').then((module) => module.Canvas), { ssr: false });
const OrbitControls = dynamic(() => import('@react-three/drei').then((module) => module.OrbitControls), { ssr: false });
const Float = dynamic(() => import('@react-three/drei').then((module) => module.Float), { ssr: false });
const RoundedBox = dynamic(() => import('@react-three/drei').then((module) => module.RoundedBox), { ssr: false });
const Text = dynamic(() => import('@react-three/drei').then((module) => module.Text), { ssr: false });

const projects = [
  { slug: 'retext', title: 'Retext', type: 'Android image editor', stack: 'Flutter · OCR · image processing', color: '#f59e0b', preview: '/projects/retext-demo.gif', github: 'https://github.com/jazsajonia-pixel/retext' },
  { slug: 'petalbound', title: 'Petalbound', type: 'Pixel-art adventure', stack: 'Godot 4 · GDScript · Android', color: '#34d399', preview: '/projects/petalbound-demo.gif', github: 'https://github.com/jazsajonia-pixel/petalbound-godot' },
  { slug: 'chrono', title: 'Chrono', type: 'AI-assisted workspace', stack: 'React · TypeScript · GitHub', color: '#fb7185', preview: '/projects/mobdevai-demo.gif', github: 'https://github.com/jazsajonia-pixel/mobdevai', live: 'https://chrono-tau.vercel.app/' },
  { slug: 'markethub', title: 'MarketHub', type: 'Marketplace platform', stack: 'React · Prisma · PostgreSQL', color: '#22d3ee', preview: '/projects/markethub-demo.gif', github: 'https://github.com/jazsajonia-pixel/markethub', live: 'https://markethub-pi.vercel.app/' },
  { slug: 'flowpilot', title: 'FlowPilot AI', type: 'Workflow automation', stack: 'React · AI providers · graphs', color: '#a78bfa', preview: '/projects/flowpilot-demo.gif', github: 'https://github.com/jazsajonia-pixel/flowpilot', live: 'https://flowpilot-sage-delta.vercel.app/' },
  { slug: 'chrauto-ai', title: 'Chrauto AI', type: 'Bounded Android agent', stack: 'Kotlin · Compose · Accessibility', color: '#c084fc', preview: '/projects/chrauto-ai-demo.gif', github: 'https://github.com/jazsajonia-pixel/Chrauto-AI' },
  { slug: 'speedsight', title: 'SpeedSight', type: 'Traffic analytics', stack: 'React · TensorFlow.js · CV', color: '#60a5fa', preview: '/projects/speedsight-demo.gif', github: 'https://github.com/jazsajonia-pixel/Project-2-SpeedSight2', live: 'https://project-2-speed-sight2.vercel.app/' },
  { slug: 'igit', title: 'igit', type: 'Mobile Git client', stack: 'Kotlin · Compose · Git', color: '#38bdf8', preview: '/projects/igit-demo.gif', github: 'https://github.com/jazsajonia-pixel/igit' },
  { slug: 'sapphire', title: 'Sapphire', type: 'Knowledge graph app', stack: 'Flutter · Markdown · GitHub sync', color: '#818cf8', github: 'https://github.com/jazsajonia-pixel/sapphire' },
  { slug: 'taskflow', title: 'TaskFlow', type: 'Team workspace', stack: 'React · Hono · PostgreSQL', color: '#f97316', github: 'https://github.com/jazsajonia-pixel/Project-1-TaskFlow' },
  { slug: 'omnidesk', title: 'OmniDesk', type: 'Customer operations', stack: 'React · Drizzle · Neon', color: '#14b8a6', github: 'https://github.com/jazsajonia-pixel/Omnidesk' },
  { slug: 'clawdstudio', title: 'ClawdStudio', type: 'Agent workspace', stack: 'Flutter · Dart · Python', color: '#f43f5e', github: 'https://github.com/jazsajonia-pixel/ClawdStudio' },
];

const positions = [
  [-2.9, 1.45, 0.2], [-1.05, 1.9, -0.4], [1.15, 1.7, 0.25], [2.9, 1.15, -0.3],
  [-2.7, -0.25, -0.5], [-0.9, -0.2, 0.3], [1.15, -0.15, -0.35], [2.85, -0.5, 0.15],
  [-2.2, -1.9, 0.2], [-0.35, -1.75, -0.3], [1.55, -1.85, 0.25], [3.05, -1.55, -0.15],
];

function ProjectTile({ project, position, active, onSelect }) {
  return (
    <Float speed={active ? 1.8 : 1.05} rotationIntensity={active ? 0.08 : 0.025} floatIntensity={active ? 0.4 : 0.16}>
      <group position={position} onClick={(event) => { event.stopPropagation(); onSelect(project); }}>
        <RoundedBox args={[1.48, 0.82, 0.12]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color={active ? project.color : '#172033'} emissive={project.color} emissiveIntensity={active ? 0.42 : 0.08} roughness={0.32} metalness={0.32} />
        </RoundedBox>
        <Text position={[-0.62, 0.14, 0.09]} fontSize={0.15} maxWidth={1.22} anchorX="left" anchorY="middle" color="#ffffff" outlineColor="#0b1020" outlineWidth={0.012}>
          {project.title}
        </Text>
        <Text position={[-0.62, -0.16, 0.09]} fontSize={0.075} maxWidth={1.2} anchorX="left" anchorY="middle" color={active ? '#fff7ed' : '#a9b6cb'}>
          {project.type}
        </Text>
        <mesh position={[0.58, 0.23, 0.1]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshBasicMaterial color={project.color} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ activeProject, setActiveProject }) {
  return (
    <Canvas camera={{ position: [0, 0, 8.6], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={['#0a1020']} />
      <ambientLight intensity={1.4} />
      <pointLight position={[0, 3, 4]} intensity={18} distance={12} color="#fb923c" />
      <pointLight position={[-4, -2, 2]} intensity={12} distance={10} color="#22d3ee" />
      <Float speed={0.65} rotationIntensity={0.12} floatIntensity={0.25}>
        <mesh rotation={[0.2, 0.3, 0]}>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshStandardMaterial color="#101b38" emissive="#354a91" emissiveIntensity={0.75} roughness={0.2} metalness={0.55} wireframe />
        </mesh>
        <Text position={[0, -0.12, 1.03]} fontSize={0.26} anchorX="center" anchorY="middle" color="#ffffff" outlineColor="#0a1020" outlineWidth={0.02}>
          JS
        </Text>
      </Float>
      <group rotation={[0, 0, -0.045]}>
        {projects.map((project, index) => <ProjectTile key={project.slug} project={project} position={positions[index]} active={activeProject.slug === project.slug} onSelect={setActiveProject} />)}
      </group>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.55} maxPolarAngle={Math.PI / 1.72} rotateSpeed={0.55} autoRotate={!activeProject} autoRotateSpeed={0.35} />
    </Canvas>
  );
}

export default function InteractivePortfolioScene() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const activeIndex = useMemo(() => projects.findIndex((project) => project.slug === activeProject.slug), [activeProject]);

  return (
    <section className="portfolio-3d-shell" aria-labelledby="interactive-work-heading">
      <div className="portfolio-3d-copy">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-300"><Sparkle size={14} weight="fill" /> Interactive work map</div>
        <h2 id="interactive-work-heading" className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore the projects as a living constellation.</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Drag to orbit the scene. Select a project tile to inspect the stack, open its GitHub repository, or jump to the full archive.</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400"><Mouse size={16} /> Desktop: drag · Mobile: swipe</div>
      </div>
      <div className="portfolio-3d-canvas" role="img" aria-label="Interactive 3D constellation of Jazz Sajonia projects">
        <Scene activeProject={activeProject} setActiveProject={setActiveProject} />
        <div className="portfolio-3d-counter"><span>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(projects.length).padStart(2, '0')}</div>
      </div>
      <motion.div key={activeProject.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="portfolio-3d-detail">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: activeProject.color }}>{activeProject.type}</div>
          <h3 className="mt-1 text-2xl font-bold text-white">{activeProject.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{activeProject.stack}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`/projects#${activeProject.slug}`} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-orange-300">View case study</a>
          {activeProject.github && <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-300"><GithubLogo size={16} /> GitHub</a>}
          {activeProject.live && <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-300"><ArrowSquareOut size={16} /> Live</a>}
        </div>
      </motion.div>
    </section>
  );
}
