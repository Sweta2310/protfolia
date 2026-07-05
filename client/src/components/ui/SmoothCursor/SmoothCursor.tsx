import { useEffect, useRef, useState } from "react";
import "./SmoothCursor.css";

interface Position {
  x: number;
  y: number;
}

const DOT_EASE = 0.35;
const RING_EASE = 0.14;

export function SmoothCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef<Position>({ x: -100, y: -100 });
  const dotPos = useRef<Position>({ x: -100, y: -100 });
  const ringPos = useRef<Position>({ x: -100, y: -100 });

  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsPointerDevice(isFinePointer);
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);

    const isInteractive = (el: EventTarget | null): boolean => {
      if (!(el instanceof Element)) return false;
      return Boolean(
        el.closest("a, button, [role='button'], input, textarea, select, .cursor-hover")
      );
    };

    const getLabel = (el: EventTarget | null): string | null => {
      if (!(el instanceof Element)) return null;
      const target = el.closest<HTMLElement>("[data-cursor]");
      return target ? target.dataset.cursor ?? null : null;
    };

    const handleOver = (e: MouseEvent) => {
      setIsHovering(isInteractive(e.target));
      setLabel(getLabel(e.target));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    let rafId: number;
    const tick = () => {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * DOT_EASE;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * DOT_EASE;

      ringPos.current.x += (mouse.current.x - ringPos.current.x) * RING_EASE;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * RING_EASE;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isPointerDevice) return null;

  const hasLabel = Boolean(label);

  return (
    <div className={`smooth-cursor ${isVisible ? "smooth-cursor--visible" : ""}`}>
      <div
        ref={dotRef}
        className={`smooth-cursor__dot ${hasLabel ? "smooth-cursor__dot--hidden" : ""}`}
      />
      <div
        ref={ringRef}
        className={[
          "smooth-cursor__ring",
          isHovering ? "smooth-cursor__ring--hover" : "",
          hasLabel ? "smooth-cursor__ring--label" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {label && <span className="smooth-cursor__label">{label}</span>}
      </div>
    </div>
  );
}

export default SmoothCursor;
