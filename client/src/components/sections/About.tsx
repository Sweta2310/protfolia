import { Target, Lightbulb, Compass, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: <Zap className="text-purple-400" size={24} />,
      title: 'High Performance',
      description: 'Optimizing code and databases to ensure ultra-fast load times and seamless operations.',
    },
    {
      icon: <Target className="text-fuchsia-400" size={24} />,
      title: 'Clean Architecture',
      description: 'Maintaining clear Separation of Concerns, clean coding standards, and scalable setups.',
    },
    {
      icon: <Compass className="text-indigo-400" size={24} />,
      title: 'Shopify Expert',
      description: 'Building custom integrations, marketing bridges, widgets, and API pipelines for e-commerce.',
    },
    {
      icon: <Lightbulb className="text-pink-400" size={24} />,
      title: 'Problem Solver',
      description: 'Transforming complex business requirements into elegant, high-impact web products.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Orbs */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mt-4"
          />
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main narrative block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-purple-500/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Driven by Passion. Committed to Quality.
              </h3>

              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                I am a Software Development Engineer (MERN) with professional experience in building scalable web applications, Shopify-integrated platforms, customer engagement tools, and modern digital products.
              </p>

              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                I specialize in React.js, Node.js, Express.js, MongoDB, REST APIs, authentication systems, database design, and cloud technologies.
              </p>

              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                I enjoy transforming ideas into production-ready applications with clean architecture, excellent performance, and outstanding user experiences.
              </p>

              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                I am also available for freelance opportunities, helping businesses and startups build modern websites, web applications, and eCommerce solutions.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-purple-500/10 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] text-purple-400 uppercase tracking-widest block mb-1">Location</span>
                <span className="text-white text-sm font-semibold">Ahmedabad, India</span>
              </div>
              <div>
                <span className="text-[10px] text-purple-400 uppercase tracking-widest block mb-1">Status</span>
                <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Values grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-start text-left border border-purple-500/10"
              >
                <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
                  {val.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{val.title}</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
