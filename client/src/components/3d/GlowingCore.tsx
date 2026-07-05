import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export function GlowingCore() {
  const glassRef = useRef<Mesh>(null);
  const coreRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (glassRef.current) {
      glassRef.current.rotation.y = t * 0.08;
      glassRef.current.rotation.x = Math.sin(t * 0.15) * 0.15;
      const breathe = 1 + Math.sin(t * 0.6) * 0.035;
      glassRef.current.scale.setScalar(breathe);
    }

    if (coreRef.current) {
      const pulse = 0.85 + Math.sin(t * 1.1) * 0.15;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial color="#a855f7" toneMapped={false} />
      </mesh>

      <mesh ref={glassRef}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshPhysicalMaterial
          color="#c4b5fd"
          transmission={0.94}
          thickness={1.4}
          roughness={0.08}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.4}
          envMapIntensity={1.4}
          attenuationColor="#7c3aed"
          attenuationDistance={1.2}
        />
      </mesh>

      <pointLight color="#a855f7" intensity={4} distance={4} decay={2} />
    </group>
  );
}
