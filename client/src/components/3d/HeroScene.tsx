import { lazy, Suspense, useEffect, useState } from "react";
import "./HeroScene.css";

const Scene3D = lazy(() =>
  import("./Scene3D").then((mod) => ({ default: mod.Scene3D }))
);

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export function HeroScene() {
  const isMobile = useIsMobile();

  return (
    <div className={`hero-scene ${isMobile ? "hero-scene--mobile" : ""}`}>
      <Suspense fallback={<div className="hero-scene__fallback" />}>
        <Scene3D scale={isMobile ? 0.55 : 0.7} />
      </Suspense>
    </div>
  );
}

export default HeroScene;
