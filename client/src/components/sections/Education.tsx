import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative Orbs */}
      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] bg-purple-950/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-indigo-950/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Education</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mt-4"
          />
        </div>

        {/* Premium Achievement Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="group relative glass-panel rounded-2xl p-8 md:p-12 border border-purple-500/15 hover:border-purple-500/35 transition-all duration-500 hover:shadow-[0_0_40px_rgba(189,92,255,0.15)] text-left"
          style={{
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`,
          }}
        >
          {/* Top subtle glow badge decoration */}
          <div className="absolute top-0 right-12 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 border border-purple-400/30 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <Award size={12} />
            <span>Top Tier MCA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left graduation icon and CGPA block */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-purple-950/20 border border-purple-500/10 text-center relative overflow-hidden group-hover:border-purple-500/30 transition-all duration-500">
              {/* Mesh back */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-xl" />

              <div className="p-4 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <GraduationCap size={44} />
              </div>
              
              <div className="relative z-10">
                <span className="text-[10px] text-purple-300/60 uppercase tracking-widest block font-medium">Cumulative Grade</span>
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 font-display block mt-1 tracking-tight text-neon">
                  8.00 CGPA
                </span>
              </div>
            </div>

            {/* Right details block */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest block mb-1">Postgraduate Degree</span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Master of Computer Applications (MCA)
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-slate-300 text-sm md:text-base font-medium">
                  LDRP Institute of Technology and Research
                </p>
                <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm font-light">
                  <Calendar size={14} className="text-purple-400" />
                  <span>2024 – 2026</span>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/10 space-y-3">
                <h4 className="text-xs font-semibold text-purple-200 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={12} className="text-purple-400" />
                  <span>Key Domain Focus</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Advanced Web Technologies', 'Database Systems Design', 'Software Engineering', 'Enterprise Architectures'].map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] md:text-xs bg-[#0b0821]/80 text-slate-300 border border-purple-500/10 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
