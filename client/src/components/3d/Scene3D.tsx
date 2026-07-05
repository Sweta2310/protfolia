import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import type { Group, PerspectiveCamera as ThreePerspectiveCamera } from "three";
import { GlowingCore } from "./GlowingCore";
import { OrbitingRings } from "./OrbitingRings";
import { FloatingShards } from "./FloatingShards";
import { useMouseParallax } from "./useMouseParallax";

interface SceneContentProps {
  scale?: number;
}

function SceneContent({ scale = 1 }: SceneContentProps) {
  const groupRef = useRef<Group>(null);
  const { gl } = useThree();
  const { getEased } = useMouseParallax(gl.domElement);

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    const { x, y } = getEased();

    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale);
      groupRef.current.rotation.y = x;
      groupRef.current.rotation.x = -y;
    }

    const cam = camera as ThreePerspectiveCamera;
    cam.position.x = Math.sin(t * 0.06) * 0.15;
    cam.position.y = Math.cos(t * 0.05) * 0.1;
    cam.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <GlowingCore />
      <OrbitingRings />
      <FloatingShards />
    </group>
  );
}

interface Scene3DProps {
  scale?: number;
}

export function Scene3D({ scale = 1 }: Scene3DProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 40 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} color="#4c1d95" />
      <hemisphereLight
        args={["#c4b5fd", "#050505", 0.5]}
      />
      <directionalLight
        position={[3, 4, 5]}
        intensity={0.8}
        color="#e9d5ff"
      />
      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.5}
        color="#2dd4bf"
      />
      <pointLight position={[2, 2, 3]} intensity={2} color="#c084fc" distance={8} />
      <pointLight position={[-2, -1, 2]} intensity={1.5} color="#2dd4bf" distance={8} />

      <SceneContent scale={scale} />

      <EffectComposer>
        <Bloom
          intensity={0.85}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.4}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.25} darkness={0.75} />
      </EffectComposer>
    </Canvas>
  );
}

export default Scene3D;
