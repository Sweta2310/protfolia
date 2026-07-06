import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Github = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
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
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
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
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please check if the server is running.');
    } finally {
      setIsSending(false);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-purple-400" size={18} />,
      label: 'Location',
      value: 'Ahmedabad, India',
      link: '#',
    },
    {
      icon: <Mail className="text-fuchsia-400" size={18} />,
      label: 'Email',
      value: 'swetamudaliyar94@gmail.com',
      link: 'mailto:swetamudaliyar94@gmail.com',
    },
    {
      icon: <Github className="text-indigo-400" size={18} />,
      label: 'GitHub',
      value: 'github.com/Sweta2310',
      link: 'https://github.com/Sweta2310',
    },
    {
      icon: <Linkedin className="text-cyan-400" size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sweta-mudaliyar4810',
      link: 'https://linkedin.com/in/sweta-mudaliyar4810',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-indigo-900/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-widest font-accent mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-neon">Amazing Together</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info card list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="glass-panel rounded-2xl p-8 border border-purple-500/10 h-full flex flex-col justify-center text-left">
              
              {/* Availability Badges */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  🟢 Active & Available
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider font-accent">
                  ⚡ Replies under 24 hrs
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-wide font-display">Freelance Collaboration</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-8 leading-relaxed">
                Whether you need a full-scale web application, a business landing page, custom REST API setups, or operational dashboard integrations, I am here to help you design and build a secure digital solution.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    target={info.link !== '#' ? '_blank' : undefined}
                    rel={info.link !== '#' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-purple-950/10 border border-purple-500/5 hover:border-purple-500/25 hover:bg-purple-950/20 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] text-purple-400 uppercase tracking-widest block font-bold font-accent">
                        {info.label}
                      </span>
                      <span className="text-slate-200 text-xs sm:text-sm font-semibold group-hover:text-purple-300 transition-colors font-accent">
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-2xl p-8 md:p-10 border border-purple-500/10 text-left relative overflow-hidden h-full flex flex-col justify-center">
              
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide font-display">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                
                {/* Name Input with Floating Label */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-slate-950/30 border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 pt-6 pb-2 text-slate-100 text-xs sm:text-sm font-light outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-[10px] text-slate-500 transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-purple-300 font-extrabold uppercase tracking-wider font-accent"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input with Floating Label */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-slate-950/30 border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 pt-6 pb-2 text-slate-100 text-xs sm:text-sm font-light outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-[10px] text-slate-500 transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-purple-300 font-extrabold uppercase tracking-wider font-accent"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message Input with Floating Label */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full bg-slate-950/30 border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 pt-6 pb-2 text-slate-100 text-xs sm:text-sm font-light outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] resize-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-[10px] text-slate-500 transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-purple-300 font-extrabold uppercase tracking-wider font-accent"
                  >
                    Message / Project Details
                  </label>
                </div>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    {isSent ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex items-center gap-3 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-4 rounded-xl text-xs sm:text-sm font-medium"
                      >
                        <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                        <span className="font-accent">Thank you! Your message was submitted successfully. I will get back to you shortly.</span>
                      </motion.div>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={isSending}
                        className="group w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-purple-800 disabled:to-indigo-800 text-white font-bold text-xs uppercase tracking-wider font-accent transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        {isSending ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
