import { Mail } from 'lucide-react';

const Github = ({ size = 18 }: { size?: number }) => (
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

const Linkedin = ({ size = 18 }: { size?: number }) => (
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

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Professional Journey', href: '#experience' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-purple-500/10 py-12 md:py-16 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] bg-purple-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Footer Top Index Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-purple-500/5 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 text-left space-y-4">
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Mudaliyar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-extrabold">Sweta</span>
              </span>
              <p className="text-[10px] text-purple-400 font-accent uppercase tracking-widest mt-1 font-semibold">
                Full Stack MERN Developer
              </p>
            </div>
            <p className="text-xs text-slate-400 font-sans font-light max-w-sm leading-relaxed">
              Designing, developing, and deploying premium full-stack MERN products and scalable business systems that solve real-world problems.
            </p>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Freelance
              </span>
            </div>
          </div>

          {/* Quick Links Index */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-accent mb-4">Navigation Index</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-purple-400 transition-colors duration-300 font-accent font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-accent mb-4">Connect Directly</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Sweta2310"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sweta-mudaliyar4810"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:swetamudaliyar94@gmail.com"
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <div className="text-xs text-slate-400 font-accent font-medium">
              Email: <a href="mailto:swetamudaliyar94@gmail.com" className="text-purple-400 hover:underline">swetamudaliyar94@gmail.com</a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-center sm:text-left select-none">
          <p className="text-[10px] text-slate-500 font-accent font-semibold tracking-wide">
            © 2026 Mudaliyar Sweta. Built with React, Tailwind CSS, Framer Motion & Spline.
          </p>
          <p className="text-[10px] text-slate-500 font-accent font-semibold tracking-wide flex items-center gap-1">
            Designed & Developed by Mudaliyar Sweta <span className="text-purple-500">❤️</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
