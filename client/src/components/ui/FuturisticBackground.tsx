import { useEffect, useRef } from 'react';

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position for subtle interactive drift
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      pulseSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5; // tiny particles
        this.speedX = (Math.random() - 0.5) * 0.15; // slow speed
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        // Curated accent colors (purple neon, soft white, blue-violet)
        const colors = ['rgba(168, 85, 247, ', 'rgba(236, 72, 153, ', 'rgba(129, 140, 248, ', 'rgba(248, 250, 252, '];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Apply tiny mouse drift
        const dx = mouse.x - width / 2;
        const dy = mouse.y - height / 2;
        this.x += this.speedX + dx * 0.00003;
        this.y += this.speedY + dy * 0.00003;

        // Boundary wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Subtle opacity pulsing
        this.opacity += this.pulseSpeed;
        if (this.opacity > 0.6 || this.opacity < 0.1) {
          this.pulseSpeed = -this.pulseSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.opacity})`;
        ctx.fill();

        // Subtle glowing halos on a few larger particles
        if (this.size > 1.2 && Math.random() > 0.98) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, 0.03)`;
          ctx.fill();
        }
      }
    }

    // Initialize particles
    const particleCount = Math.min(65, Math.floor((width * height) / 25000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw loop
    const animate = () => {
      // Smoothly interpolate mouse position for inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Render particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* HTML5 Canvas Particle simulation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Grid Pattern overlay moving with CSS animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none animate-grid-move" />

      {/* Soft blurred radial ambient neon spotlights */}
      <div className="absolute top-[5%] left-[-10%] w-[35vw] h-[35vw] max-w-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-15%] w-[45vw] h-[45vw] max-w-[600px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] right-[10%] w-[25vw] h-[25vw] max-w-[350px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Vignette radial overlay to blend with #050505 bg */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
}
