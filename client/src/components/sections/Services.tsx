import { Code, Globe, Server, Layout, ShoppingBag, Wrench, Zap, Sliders, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      num: '01',
      icon: <Code className="text-purple-400" size={24} />,
      title: 'MERN Stack Development',
      description: 'Full-scale web application engineering using React, Node.js, Express, and MongoDB. Dynamic state management, robust authentication, and scalable database schemas.',
    },
    {
      num: '02',
      icon: <Globe className="text-fuchsia-400" size={24} />,
      title: 'Business Website Development',
      description: 'Premium corporate websites, custom agency portfolios, and marketing landing pages engineered for speed, mobile responsiveness, and high conversion rate.',
    },
    {
      num: '03',
      icon: <Server className="text-indigo-400" size={24} />,
      title: 'REST API Development',
      description: 'Designing secure, low-latency API architectures. Implementing OAuth, JWT token validation, rate-limiting, and clean schema validators for external data pipelines.',
    },
    {
      num: '04',
      icon: <Layout className="text-cyan-400" size={24} />,
      title: 'Admin Dashboard Development',
      description: 'Constructing interactive operational dashboards, visual chart analytics, custom database managers, and internal tools with complex table filters and controls.',
    },
    {
      num: '05',
      icon: <ShoppingBag className="text-pink-400" size={24} />,
      title: 'E-Commerce Development',
      description: 'Creating customized e-commerce solutions, implementing shopping carts, secure payment gateways (Stripe, PayPal), custom checkouts, and transactional database logs.',
    },
    {
      num: '06',
      icon: <Sliders className="text-emerald-400" size={24} />,
      title: 'Shopify Integration',
      description: 'Connecting external MERN platforms to Shopify API hooks, writing custom app integrations, configuring automated inventory syncs, and managing webhooks.',
    },
    {
      num: '07',
      icon: <Wrench className="text-amber-400" size={24} />,
      title: 'Website Maintenance',
      description: 'Proactive support including dependency package updates, UI tweaks, bug troubleshooting, security auditing, and continuous integration/deployment support.',
    },
    {
      num: '08',
      icon: <Zap className="text-rose-400" size={24} />,
      title: 'Performance Optimization',
      description: 'Auditing page metrics to achieve top scores. Code splitting, asset optimization, lazy-loading scripts, caching headers, and database query indexing audits.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background radial gradient spotlights */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-purple-950/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-indigo-950/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-widest font-accent mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            My Offerings
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-neon">Freelance Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 mt-4 text-xs sm:text-sm font-light font-sans max-w-xl"
          >
            I develop secure, conversion-focused, and highly performant custom MERN stack solutions and responsive business platforms tailored to your business needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-5"
          />
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, borderColor: 'rgba(168, 85, 247, 0.25)', boxShadow: '0 8px 30px rgba(168, 85, 247, 0.08)' }}
              className="group glass-panel rounded-2xl p-6 border border-purple-500/10 hover:bg-purple-950/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/15 group-hover:bg-purple-500/20 group-hover:border-purple-500/35 transition-all duration-300">
                    {svc.icon}
                  </div>
                  <span className="text-xl font-extrabold font-accent text-purple-500/15 group-hover:text-purple-400/30 transition-colors duration-300 select-none">
                    {svc.num}
                  </span>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-wide font-display group-hover:text-purple-300 transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-slate-400 font-sans font-light leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Card highlight lines */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call-to-action Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel max-w-2xl mx-auto rounded-2xl p-8 border border-purple-500/15 text-center relative overflow-hidden"
        >
          {/* Glowing orb decorations inside */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />

          <h3 className="text-lg font-bold text-white mb-2 font-display">Have a custom software or business project?</h3>
          <p className="text-[11px] sm:text-xs text-slate-300 font-light font-sans mb-6 max-w-md mx-auto">
            Let's collaborate to architect your web solution, design your dashboard interface, or develop your custom API integrations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Briefcase size={12} className="text-white" />
            Let's Talk
          </a>
        </motion.div>

      </div>
    </section>
  );
}
