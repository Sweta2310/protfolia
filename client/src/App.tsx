import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import FuturisticBackground from './components/ui/FuturisticBackground';
import SmoothCursor from './components/ui/SmoothCursor/SmoothCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium Loader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen bg-[#050505] text-slate-200 overflow-x-hidden font-sans selection:bg-purple-500/30 selection:text-white">
          {/* Global Film Grain Noise Texture */}
          <div className="noise-overlay" />
          
          {/* Custom Smooth Cursor */}
          <SmoothCursor />

          {/* Animated Grid & Canvas Particle Background */}
          <FuturisticBackground />

          {/* Top Fixed Scroll Indicator (hidden on mobile) */}
          <ScrollProgress />

          {/* Floating Glassmorphic Navbar */}
          <Navbar />

          {/* Main Single Page Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>

          {/* Sticky Premium Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
