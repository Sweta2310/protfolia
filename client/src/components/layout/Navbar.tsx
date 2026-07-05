import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic for active indicator
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3.5 bg-[#050505]/75 backdrop-blur-lg border-b border-purple-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="group flex flex-col items-start select-none">
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300 font-display">
            Mudaliyar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 font-extrabold">Sweta</span>
          </span>
          <span className="text-[10px] text-purple-300/60 uppercase tracking-widest mt-0.5 font-accent font-semibold">
            Full Stack MERN Developer
          </span>
        </a>

        {/* Desktop Nav Bar Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative text-xs font-semibold tracking-wide uppercase transition-colors duration-300 py-1.5 px-1 font-accent hover:text-white ${
                    activeSection === link.id ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider Line */}
          <div className="w-[1px] h-5 bg-purple-500/20" />

          {/* Socials quick contacts */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://github.com/Sweta2310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/sweta-mudaliyar4810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:swetamudaliyar94@gmail.com"
              className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="Email Mudaliyar Sweta"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-lg border border-purple-500/10 hover:border-purple-500/20 bg-purple-950/5 text-slate-300 hover:text-white focus:outline-none transition-all"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer menu drop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#050505]/95 border-b border-purple-500/10 backdrop-blur-xl w-full absolute left-0 top-full overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6 max-w-7xl mx-auto">
              <ul className="flex flex-col gap-3.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-semibold uppercase tracking-wider block py-1.5 font-accent hover:text-white transition-colors ${
                        activeSection === link.id
                          ? 'text-purple-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="h-[1px] w-full bg-purple-500/10" />

              <div className="flex gap-6 items-center">
                <a
                  href="https://github.com/Sweta2310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-xs font-semibold tracking-wide uppercase font-accent transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sweta-mudaliyar4810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-xs font-semibold tracking-wide uppercase font-accent transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:swetamudaliyar94@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-xs font-semibold tracking-wide uppercase font-accent transition-colors"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
