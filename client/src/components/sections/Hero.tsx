
import { Mail, ArrowRight, Download, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import HeroScene from '../3d/HeroScene';

// SVG Vector Icons for Technology Badges
const ReactIcon = () => (
  <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 37.5c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5 12.5-5.6 12.5-12.5-5.6-12.5-12.5-12.5zm0-27.5C26.1 10 7.2 21.6 7.2 35.8c0 7.8 5.7 14.8 15.3 19.8-1.5 3-2.5 6.3-2.5 9.8 0 14.2 18.9 25.8 42.8 25.8s42.8-11.6 42.8-25.8c0-3.5-1-6.8-2.5-9.8 9.6-5 15.3-12 15.3-19.8C92.8 21.6 73.9 10 50 10zm0 73.3c-18.7 0-33.8-8.8-33.8-19.6 0-3.8 1.9-7.3 5.3-10.3 7 7.7 17.5 12.9 28.5 12.9s21.5-5.2 28.5-12.9c3.4 3 5.3 6.5 5.3 10.3.1 10.8-15.1 19.6-33.8 19.6zm33.8-38.3C76.8 52.7 66.3 57.9 55.3 57.9s-21.5-5.2-28.5-12.9C23.4 42 21.5 38.5 21.5 34.7c0-10.8 15.1-19.6 33.8-19.6s33.8 8.8 33.8 19.6c0 3.8-1.9 7.3-5.3 10.4z" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-4 h-4 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.7l-6.7-3.8V8.1L12 4.3l6.7 3.8v7.8z M9.1 13.6c.1.9.5 1.5 1.2 1.8.8.4 1.8.1 2.2-.6.4-.7.3-1.6-.2-2.1l-.8-.8c-.7-.7-1.1-1.3-1.1-2.1 0-1.1.8-2 2-2.2 1-.2 2.1.2 2.6.9.5.7.5 1.5.4 2.1h-1.6c0-.5-.2-.9-.6-1.1-.4-.2-1 0-1.2.4-.2.4-.2.9.2 1.2l.9.9c1 .9 1.4 1.6 1.4 2.5 0 1.3-.9 2.4-2.3 2.6-1.2.2-2.5-.2-3-1.1-.5-.7-.5-1.7-.5-2.2H9.1z" />
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MongoIcon = () => (
  <svg className="w-4 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.15 12.08c-.28-1.79-1.27-4.01-2.61-5.72-.51-.65-1.13-1.33-1.64-1.9-.38-.43-.72-.81-1-1.11-.31.32-.67.73-1.07 1.19-.53.61-1.17 1.33-1.72 2.02-1.4 1.77-2.45 4.09-2.73 5.96-.44 2.92.51 5.37 2.63 6.64.31.18.66.32 1.02.43V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.34c.48-.12.94-.32 1.34-.58 2.21-1.42 3.12-4.08 2.51-7.25zM12 17.72V6.65c.67.74 1.38 1.64 1.94 2.48.97 1.46 1.71 3.25 1.93 4.67.45 2.87-.51 4.54-1.93 5.46-.38.25-.79.41-1.94.46z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-4 h-4 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const JSIcon = () => (
  <svg className="w-4 h-4 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm20.06 17.52c-.68-1.01-1.62-1.64-3-1.64-1.25 0-2 .69-2 1.51 0 1.09.83 1.48 2.6 2.15 2.46.91 3.83 1.72 3.83 4.22 0 2.5-1.92 4.22-4.83 4.22-2.85 0-4.62-1.39-5.4-3.52l2.36-1.37c.54.99 1.22 1.67 2.92 1.67 1.34 0 2.21-.57 2.21-1.66 0-1.16-.75-1.53-2.46-2.23-2.44-.83-3.98-1.78-3.98-4.29 0-2.3 1.86-4 4.54-4 2.38 0 3.93.97 4.7 2.7l-2.07 1.25zM12.01 11.53h-2.5v7.24c0 1.38.72 2.05 2.11 2.05.35 0 .7-.05.94-.12v-1.94c-.16.02-.37.04-.57.04-.53 0-.74-.21-.74-.77v-6.5h2.76v-1.94z" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-4 h-4 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.54 11.48L12.52.46a1.5 1.5 0 0 0-2.12 0L8.67 2.19l3.35 3.35a2.76 2.76 0 0 1 3.6 3.6l3.35 3.35a2.76 2.76 0 0 1-.22 4.02l-3.35-3.35v4.54a2.75 2.75 0 1 1-1.5 0V11.23l-3.35-3.35a2.76 2.76 0 0 1-3.6-3.6L1.48 10.42a1.5 1.5 0 0 0 0 2.12l11.02 11.02a1.5 1.5 0 0 0 2.12 0l10.9-10.9a1.5 1.5 0 0 0 .02-2.18z" />
  </svg>
);

const AWSIcon = () => (
  <svg className="w-4 h-4 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .43c-6.38 0-11.57 5.18-11.57 11.57S5.62 23.57 12 23.57s11.57-5.18 11.57-11.57S18.38.43 12 .43zm4.94 13.92c-.17.38-.45.71-.85.98-.39.26-.94.4-1.63.4-.66 0-1.18-.12-1.56-.37-.37-.24-.62-.57-.75-.98-.22.42-.55.77-.97 1.05-.43.28-.97.42-1.62.42-.71 0-1.3-.2-1.76-.6-.46-.4-.7-.95-.7-1.66 0-.76.28-1.34.83-1.74.55-.4 1.39-.6 2.5-.6h1.72v-.42c0-.52-.11-.9-.33-1.14-.23-.24-.62-.36-1.17-.36-.45 0-.82.08-1.12.24-.3.16-.54.43-.72.8l-1.46-.86c.35-.61.85-1.07 1.51-1.39C10 .76 10.87.6 11.89.6c1.17 0 2.05.28 2.65.83.6.55.9 1.37.9 2.47v4.61c0 .54.1.92.3 1.13.2.21.56.32 1.09.32.19 0 .4-.02.62-.07v1.46c-.22.06-.44.09-.67.09v-.01zM11.66 11.8h-1.37c-.52 0-.9.08-1.15.25-.25.17-.37.43-.37.79 0 .32.1.57.3.73.2.16.5.24.9.24.47 0 .84-.13 1.13-.38.28-.26.43-.63.43-1.12v-.52h.13zM22.4 12.87c-.33 1.15-.97 2.06-1.9 2.73s-2.12 1-3.56 1c-1.56 0-2.88-.47-3.95-1.41-1.07-.94-1.6-2.22-1.6-3.83s.54-2.91 1.63-3.87c1.09-.96 2.47-1.44 4.14-1.44.97 0 1.83.18 2.58.55.75.37 1.34.91 1.77 1.63l-1.37 1c-.32-.49-.71-.85-1.17-1.08-.46-.23-.97-.35-1.54-.35-.98 0-1.78.29-2.39.87-.61.58-.91 1.39-.91 2.43 0 1.02.29 1.81.86 2.39.57.58 1.34.87 2.32.87.68 0 1.25-.15 1.7-.46.45-.31.78-.77.98-1.37L22.4 12.9z" />
  </svg>
);

const Github = ({ size = 20 }: { size?: number }) => (
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

const Linkedin = ({ size = 20 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {

  const techBadges = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'Express.js', icon: <ExpressIcon /> },
    { name: 'MongoDB', icon: <MongoIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'JavaScript', icon: <JSIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'AWS', icon: <AWSIcon /> },
  ];

  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: 'Modern', label: 'Responsive Design' },
    { value: '1+', label: 'Years Experience' },
    { value: 'Available', label: 'For Freelance' },
  ];

  const trustHighlights = [
    'MERN Stack Development',
    'REST API Development',
    'Business Websites',
    'Shopify Integration',
    'Modern UI/UX',
  ];

  // Framer Motion staggered child animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 bg-[#050505]"
    >
      <HeroScene />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">

        {/* Content Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content flex flex-col text-left z-20"
        >
          {/* Pulsing Availability Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-accent backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
              🟢 Available for Freelance
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-purple-400 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-2.5 font-accent"
          >
            Hello, I'm
          </motion.p>

          {/* Mudaliyar Sweta Name Header */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none font-display mb-1"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 text-neon">
              Mudaliyar Sweta
            </span>
          </motion.h1>

          {/* Professional Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl font-bold text-purple-300/80 uppercase tracking-widest font-accent mb-6"
          >
            Full Stack MERN Developer
          </motion.h2>

          {/* Client-Focused Header */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight font-display mb-4 max-w-xl text-shadow-[0_2px_10px_rgba(168,85,247,0.15)]"
          >
            Turning Ideas Into Powerful Web Applications
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-xl font-light font-sans mb-6"
          >
            I help startups, businesses, and individuals transform ideas into modern, fast, and scalable web applications. From responsive business websites to complete MERN Stack solutions, I build digital experiences that are secure, user-friendly, and designed for real-world success.
          </motion.p>

          {/* Trust Highlights Checklist */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2 mb-8 max-w-xl border-t border-b border-purple-500/10 py-4">
            {trustHighlights.map((hl) => (
              <div key={hl} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium font-accent">
                <span className="p-0.5 rounded-full bg-purple-500/20 text-purple-400">
                  <Check size={10} strokeWidth={3} />
                </span>
                <span>{hl}</span>
              </div>
            ))}
          </motion.div>

          {/* Premium Icon-based Technology Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mb-8 max-w-xl">
            {techBadges.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-purple-500/10 hover:border-purple-500/35 hover:bg-purple-950/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] select-none cursor-default"
              >
                {tech.icon}
                <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white font-accent">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transform hover:-translate-y-0.5 select-none"
            >
              🚀 View Projects
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#"
              className="px-6 py-3.5 rounded-xl bg-white/[0.03] border border-purple-500/15 hover:bg-purple-500/10 hover:border-purple-500/40 text-purple-300 font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 flex items-center gap-2 backdrop-blur-sm transform hover:-translate-y-0.5 select-none"
            >
              📄 Download Resume
              <Download size={13} className="text-purple-400" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-transparent border border-white/10 hover:border-purple-500/40 text-white font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 select-none hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              💬 Hire Me
            </a>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 border-t border-purple-500/10 pt-6 max-w-xl">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-accent font-semibold mr-2">Find me on</span>
            <a
              href="https://github.com/Sweta2310"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/sweta-mudaliyar4810"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:swetamudaliyar94@gmail.com"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Statistics row below the main hero grid */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none border-t border-purple-500/5 bg-gradient-to-t from-[#050505] to-transparent py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
          {stats.map((stat, sIdx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + sIdx * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.3)', boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)' }}
              className="glass-panel p-4 rounded-xl border border-purple-500/10 transition-all duration-300 text-center"
            >
              <span className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 font-display text-neon block mb-0.5">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-accent uppercase tracking-widest font-semibold block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
