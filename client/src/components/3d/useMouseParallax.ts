import { useEffect, useRef } from "react";

interface ParallaxState {
  x: number;
  y: number;
}

const MAX_ROTATION_DEG = 8;
const MAX_ROTATION_RAD = (MAX_ROTATION_DEG * Math.PI) / 180;

export function useMouseParallax(element?: HTMLElement | null) {
  const target = useRef<ParallaxState>({ x: 0, y: 0 });
  const current = useRef<ParallaxState>({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      let nx = 0;
      let ny = 0;

      if (element) {
        const rect = element.getBoundingClientRect();
        // Calculate relative position within the element bounds (0 to 1)
        const rx = (e.clientX - rect.left) / rect.width;
        const ry = (e.clientY - rect.top) / rect.height;
        // Map to [-1, 1]
        nx = rx * 2 - 1;
        ny = ry * 2 - 1;
        
        // Clamp in case pointer is slightly outside due to pointer capture
        nx = Math.max(-1, Math.min(1, nx));
        ny = Math.max(-1, Math.min(1, ny));
      } else {
        nx = (e.clientX / window.innerWidth) * 2 - 1;
        ny = (e.clientY / window.innerHeight) * 2 - 1;
      }

      target.current.x = nx * MAX_ROTATION_RAD;
      target.current.y = ny * MAX_ROTATION_RAD;
    };

    const handlePointerLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    const targetElement = element || window;

    targetElement.addEventListener("pointermove", handlePointerMove as EventListener, {
      passive: true,
    });
    
    if (element) {
      element.addEventListener("pointerleave", handlePointerLeave, {
        passive: true,
      });
    } else {
      document.addEventListener("mouseleave", handlePointerLeave, {
        passive: true,
      });
    }

    return () => {
      targetElement.removeEventListener("pointermove", handlePointerMove as EventListener);
      if (element) {
        element.removeEventListener("pointerleave", handlePointerLeave);
      } else {
        document.removeEventListener("mouseleave", handlePointerLeave);
      }
    };
  }, [element]);

  const getEased = (damping = 0.1): ParallaxState => {
    current.current.x += (target.current.x - current.current.x) * damping;
    current.current.y += (target.current.y - current.current.y) * damping;
    return current.current;
  };

  return { getEased };
}
