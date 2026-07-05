import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Import images from assets
import emailMarketingImg from '../../assets/email_marketing.png';
import youtubeCloneImg from '../../assets/youtube_clone.png';
import portfolioImg from '../../assets/hero.png';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  challenges: string;
  result: string;
  techStack: string[];
  liveLink: string;
  codeLink: string;
}

function CaseStudyCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for local tilt calculations
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  
  // Spring configurations for smooth inertia
  const rotateX = useSpring(useTransform(my, [-150, 150], [6, -6]), { damping: 22, stiffness: 140 });
  const rotateY = useSpring(useTransform(mx, [-250, 250], [-6, 6]), { damping: 22, stiffness: 140 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    mx.set(xVal);
    my.set(yVal);
  };
  
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      data-cursor="View"
      className="w-full relative group rounded-2xl bg-white/[0.015] border border-purple-500/10 hover:border-purple-500/35 transition-colors duration-500 overflow-hidden shadow-glass"
    >
      {/* Animated glowing border draw effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 lg:p-10 items-stretch ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}>
        
        {/* Project Image Panel (col-span 5) */}
        <div className={`lg:col-span-5 relative overflow-hidden rounded-xl border border-purple-500/10 hover:border-purple-500/25 transition-colors duration-300 min-h-[220px] lg:min-h-auto ${
          !isEven ? 'lg:order-last' : ''
        }`}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none"
          />
          {/* Glowing gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Case Study Details Panel (col-span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between text-left">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full font-accent">
                {project.category}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-accent">Featured Case Study</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 hover:text-purple-300 transition-colors font-display">
              {project.title}
            </h3>

            <p className="text-slate-400 font-sans font-light text-xs sm:text-sm leading-relaxed mb-6 italic border-l-2 border-purple-500/30 pl-3">
              "{project.summary}"
            </p>

            {/* Problem & Solution Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 border-t border-purple-500/10 pt-5">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest font-accent block">The Problem</span>
                <p className="text-[11px] sm:text-xs text-slate-300 font-sans font-light leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest font-accent block">My Solution</span>
                <p className="text-[11px] sm:text-xs text-slate-300 font-sans font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Challenge & Result Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 border-t border-purple-500/10 pt-5">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest font-accent block">Technical Challenge</span>
                <p className="text-[11px] sm:text-xs text-slate-300 font-sans font-light leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-accent block">Business Result</span>
                <p className="text-[11px] sm:text-xs text-emerald-300/90 font-sans font-light leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5 mb-8 border-t border-purple-500/10 pt-5">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] bg-purple-950/20 text-purple-300 border border-purple-500/10 px-2.5 py-1 rounded-lg font-semibold font-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub / Demo Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Code"
              className="px-4.5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <GithubIcon size={13} />
              View Case Code
            </a>
            <a
              href={project.liveLink}
              data-cursor="Explore"
              className="px-4.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-purple-500/30 text-white font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 flex items-center gap-2"
            >
              Live Demo
              <ArrowUpRight size={13} className="text-purple-400" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const caseStudies = [
    {
      title: 'Email Marketing Automation System',
      category: 'Full Stack MERN Case Study',
      image: emailMarketingImg,
      summary: 'A secure bulk-campaign scheduler and database query segments sync platform for Shopify retailers.',
      problem: 'Businesses needed a centralized platform to manage and automate email campaigns without dashboard lag.',
      solution: 'Built a MERN-based Email Marketing platform with authentication, campaign management, audience segmentation, analytics, and scheduling.',
      challenges: 'Handling high-volume asynchronous mailing queues and syncing database changes with external e-commerce API webhooks without causing UI delays.',
      result: 'Reduced manual campaign management and improved workflow efficiency for retail e-commerce clients.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Shopify API', 'BullMQ', 'Redis'],
      liveLink: '#',
      codeLink: 'https://github.com/Sweta2310',
    },
    {
      title: 'MERN YouTube Media Streaming Clone',
      category: 'Full Stack Media Case Study',
      image: youtubeCloneImg,
      summary: 'A fast, media-rich video sharing clone supporting live upload buffers and subscriptions.',
      problem: 'Users lack open-source video streaming platforms that prioritize fast initial load times and community comments.',
      solution: 'Developed a full-stack video hosting clone supporting secure user authentication, multi-format uploads, live likes/comments, and channel subscription pipelines.',
      challenges: 'Optimizing buffer-free video streaming playback, handling multi-megabyte media uploads reliably, and synchronizing global state subscriptions.',
      result: 'Achieved sub-second video buffer times, smooth upload progression feedback, and a highly responsive community layout.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary API', 'Framer Motion'],
      liveLink: '#',
      codeLink: 'https://github.com/Sweta2310',
    },
    {
      title: 'Premium Developer Portfolio',
      category: 'Frontend & 3D Case Study',
      image: portfolioImg,
      summary: 'An award-winning developer portfolio presenting physics simulations, 3D mouse tracking, and clean glassmorphism.',
      problem: 'Developers need a way to stand out to premium clients by combining deep technical competence with award-winning aesthetic visuals.',
      solution: 'Designed a next-generation MERN portfolio showcasing interactive 3D humanoid mouse-tracking models, lightweight particle simulation engines, and responsive glassmorphism.',
      challenges: 'Maintaining 60fps performance during interactive 3D model lazy loading and synchronizing canvas-based star simulations with scroll-blur navbar transitions.',
      result: 'Created a highly engaging, client-converting digital experience that showcases advanced front-end engineering.',
      techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Spline 3D', 'HTML5 Canvas'],
      liveLink: '#',
      codeLink: 'https://github.com/Sweta2310',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative spotlights */}
      <div className="absolute top-[20%] right-[-15%] w-[450px] h-[450px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-widest font-accent mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            My Creations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-neon">Case Studies</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-purple-300/60 uppercase tracking-widest mt-2 font-accent font-semibold">Real problems solved with robust solutions</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Case Studies Staggered Layout */}
        <div className="space-y-16">
          {caseStudies.map((project, idx) => (
            <CaseStudyCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
