import { Briefcase, ChevronRight, Award, Mail, Play, Layers, Code, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const timelineMilestones = [
    {
      title: 'Started Web Development Journey',
      year: '2023',
      subtitle: 'Fundamentals of Code',
      icon: <Code className="text-purple-400" size={16} />,
      details: [
        'Dived into software engineering, mastering HTML5, CSS3, ES6 JavaScript, and responsive design.',
        'Built static sites, personal tools, and utility scripts to understand document models and stylesheet processing.',
        'Explored Git version control, browser developer tools, and layouts (Flexbox, CSS Grid).',
      ],
    },
    {
      title: 'Mastered the MERN Stack',
      year: 'Late 2023 – Early 2024',
      subtitle: 'Full Stack Engineering',
      icon: <Layers className="text-fuchsia-400" size={16} />,
      details: [
        'Advanced to database structures and server environments with Node.js, Express.js, and MongoDB.',
        'Coded scalable REST APIs with robust routing, error handling, and query pagination filters.',
        'Built dynamic React.js frontends, utilizing client routing, context states, and hook structures.',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Retner.ai',
      year: 'Jul 2024 – Jan 2025',
      subtitle: 'Professional Internship',
      icon: <Award className="text-indigo-400" size={16} />,
      details: [
        'Programmed interface elements and client form validations using React.js and state parameters.',
        'Co-authored custom backend routes, managing MongoDB schema collections and document referencing.',
        'Integrated JWT session authorizations, cookie validations, and secure login modules.',
        'Audited system bugs, debugged script errors, and assisted with production code deployments.',
      ],
    },
    {
      title: 'Engineered Email Marketing Platform',
      company: 'Retner.ai',
      year: '2025',
      subtitle: 'Core SDE Project',
      icon: <Mail className="text-cyan-400" size={16} />,
      details: [
        'Built dynamic campaigns, email template builders, and scheduling logs integrated with Shopify API gateways.',
        'Designed database pipelines for subscriber lists, customer queries, and list segmentation filtering.',
        'Developed real-time analytics dashboards tracking click-through rates, open statistics, and email logs.',
        'Optimized MongoDB indices and campaign scheduling queues to ensure zero-lag transaction times.',
      ],
    },
    {
      title: 'Developed Dynamic YouTube Clone',
      year: '2025',
      subtitle: 'Independent Project',
      icon: <Play className="text-pink-400" size={16} />,
      details: [
        'Developed a complete media sharing clone with React.js frontend structures and Node/Express backend layers.',
        'Configured video uploads, thumbnail caching, user subscriptions, and global comments feeds.',
        'Implemented buffer-free playback controls and asynchronous state controls for subscriber actions.',
      ],
    },
    {
      title: 'Building Modern Full Stack Applications',
      year: 'Present',
      subtitle: 'SaaS & Custom Development',
      icon: <Briefcase className="text-emerald-400" size={16} />,
      details: [
        'Crafting highly responsive, secure, and performant web applications for client projects.',
        'Implementing modern animations, glassmorphic UI systems, and interactive 3D model setups.',
        'Developing custom Shopify store expansions, API adapters, and SaaS product landing layouts.',
      ],
    },
    {
      title: 'Currently Open for Freelance Opportunities',
      year: 'Active Now',
      subtitle: 'Freelance & Contract Work',
      icon: <UserCheck className="text-amber-400" size={16} />,
      details: [
        'Helping businesses build fast, scalable, and responsive digital products from the ground up.',
        'Available for custom MERN app developments, landing page designs, API integrations, and speed optimization audits.',
        'Committed to producing clean, maintenance-friendly code suitable for real-world scaling and success.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Glow shapes */}
      <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-widest font-accent mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            My Path
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-neon">Journey</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-purple-300/60 uppercase tracking-widest mt-2 font-accent font-semibold">How I built my technical capabilities</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Timeline Path Structure */}
        <div className="max-w-5xl mx-auto relative text-left">
          {/* Mobile Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-purple-500/15 md:hidden"></div>
          
          {timelineMilestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative flex flex-col md:grid md:grid-cols-[220px_minmax(40px,_auto)_1fr] lg:grid-cols-[260px_minmax(40px,_auto)_1fr] md:gap-0"
            >
              {/* Desktop Date Column */}
              <div className="hidden md:flex flex-col items-end text-right pr-6 pt-6">
                <span className="text-white font-bold text-xs tracking-wide font-accent leading-snug">{milestone.year}</span>
                {milestone.company && (
                  <span className="text-[10px] text-purple-400 font-semibold uppercase tracking-widest font-accent mt-1">{milestone.company}</span>
                )}
              </div>

              {/* Vertical Line & Marker Column */}
              <div className="hidden md:flex flex-col items-center relative w-10">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-purple-500/15 -translate-x-1/2"></div>
                
                {/* Timeline Indicator Dot */}
                <div className="relative mt-6 w-[20px] h-[20px] rounded-full bg-[#080808] border-2 border-purple-500/50 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.4)] z-20">
                  {milestone.icon}
                </div>
              </div>

              {/* Content Card Column */}
              <div className="ml-12 md:ml-0 md:pl-6 pb-10 relative">
                {/* Mobile Timeline Dot */}
                <span className="absolute -left-[38px] top-6 w-[18px] h-[18px] rounded-full bg-[#080808] border-2 border-purple-500/50 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.4)] z-20 md:hidden">
                  {milestone.icon}
                </span>

                {/* Milestone Card */}
                <div 
                  className="glass-panel rounded-2xl p-5 md:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.08)] group"
                >
                  {/* Mobile Date/Company tags */}
                  <div className="md:hidden flex justify-between items-center mb-3 border-b border-purple-500/10 pb-2">
                    <span className="text-white font-extrabold text-xs font-accent tracking-wide">{milestone.year}</span>
                    {milestone.company && (
                      <span className="text-[9px] bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full uppercase font-bold font-accent tracking-widest">
                        {milestone.company}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mb-4">
                    <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-purple-300 transition-colors duration-300 font-display">
                      {milestone.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium font-accent uppercase tracking-wider mt-0.5">
                      {milestone.subtitle}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {milestone.details.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-slate-300 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
                        <ChevronRight size={13} className="text-purple-500 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
