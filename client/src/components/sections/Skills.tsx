import { motion } from 'framer-motion';

// SVG Icons for Category Headers
const FrontendIcon = () => (
  <svg className="w-8 h-8 text-[#61DAFB] drop-shadow-[0_0_8px_rgba(97,218,251,0.4)]" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 37.5c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5 12.5-5.6 12.5-12.5-5.6-12.5-12.5-12.5zm0-27.5C26.1 10 7.2 21.6 7.2 35.8c0 7.8 5.7 14.8 15.3 19.8-1.5 3-2.5 6.3-2.5 9.8 0 14.2 18.9 25.8 42.8 25.8s42.8-11.6 42.8-25.8c0-3.5-1-6.8-2.5-9.8 9.6-5 15.3-12 15.3-19.8C92.8 21.6 73.9 10 50 10z" />
  </svg>
);

const BackendIcon = () => (
  <svg className="w-8 h-8 text-[#339933] drop-shadow-[0_0_8px_rgba(51,153,51,0.4)]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.7l-6.7-3.8V8.1L12 4.3l6.7 3.8v7.8z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8 text-[#47A248] drop-shadow-[0_0_8px_rgba(71,162,72,0.4)]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.87 0-7-1.12-7-2.5S8.13 4 12 4s7 1.12 7 2.5S15.87 9 12 9zm0 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.87 0-7-1.12-7-2.5S8.13 13 12 13s7 1.12 7 2.5S15.87 18 12 18z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8 text-[#FF9900] drop-shadow-[0_0_8px_rgba(255,153,0,0.4)]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-8 h-8 text-[#F05032] drop-shadow-[0_0_8px_rgba(240,80,50,0.4)]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.7 19.3L15.4 13c.6-1.3.4-3-.8-4.2-1.2-1.2-3-1.4-4.2-.8L13 10.6l-2.4 2.4-2.6-2.6-5 5c-.6.6-.6 1.5 0 2l3 3c.6.6 1.5.6 2 0l5-5 2.6 2.6-2.4 2.4 2.6 2.6c.6.6 1.5.6 2 0l4.5-4.5c.5-.5.5-1.4 0-1.8z" />
  </svg>
);

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FrontendIcon />,
      skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6)', 'HTML5 & CSS3', 'Redux Toolkit', 'Framer Motion'],
      level: 90, // Represents relative expertise level (drawn in pill bar)
      tagline: 'Interfaces & Interactions',
    },
    {
      title: 'Backend Engineering',
      icon: <BackendIcon />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JSON Web Tokens (JWT)', 'MVC Architecture', 'Asynchronous Task Queues'],
      level: 85,
      tagline: 'Logic, Servers & APIs',
    },
    {
      title: 'Database Systems',
      icon: <DatabaseIcon />,
      skills: ['MongoDB', 'Mongoose ODM', 'Query Optimization', 'Database Indexing', 'Schema Designing'],
      level: 80,
      tagline: 'Data Models & Storage',
    },
    {
      title: 'Cloud & Deployment',
      icon: <CloudIcon />,
      skills: ['AWS (EC2 / S3)', 'GitHub Actions', 'Vercel', 'Render', 'Heroku CLI', 'CI/CD Pipelines'],
      level: 75,
      tagline: 'Servers, CDN & Hosting',
    },
    {
      title: 'Developer Tools',
      icon: <ToolsIcon />,
      skills: ['Git & GitHub', 'VS Code IDE', 'Postman Client', 'NPM / Yarn Packager', 'Chrome DevTools'],
      level: 90,
      tagline: 'Workflow & Efficiency',
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Spotlight backgrounds */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

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
            My Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-neon">Skills & Expertise</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-purple-300/60 uppercase tracking-widest mt-2 font-accent font-semibold">Technologies I utilize for real-world products</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6, borderColor: 'rgba(168, 85, 247, 0.3)', boxShadow: '0 8px 30px rgba(168, 85, 247, 0.08)' }}
              className="group glass-panel rounded-2xl p-6 border border-purple-500/10 hover:bg-purple-950/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                  {category.icon}
                  <span className="text-[9px] bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest font-accent">
                    Level {idx + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-white mb-0.5 font-display group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium font-accent uppercase tracking-wider block mb-6">
                  {category.tagline}
                </span>

                {/* Tech Badge List */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] sm:text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.02] border border-purple-500/5 group-hover:border-purple-500/15 group-hover:bg-purple-950/5 text-slate-300 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Non-percentage Glowing Progress indicator bar */}
              <div className="w-full">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold font-accent">Expertise Level</span>
                </div>
                <div className="relative w-full h-[3px] bg-white/[0.03] rounded-full overflow-hidden border border-white/[0.05]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 rounded-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all duration-300"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
