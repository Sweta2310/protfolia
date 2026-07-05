import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface RingConfig {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
}

const RINGS: RingConfig[] = [
  {
    radius: 1.7,
    tube: 0.02,
    color: "#c084fc",
    speed: 0.12,
    tilt: [Math.PI / 2.4, 0, 0],
  },
  {
    radius: 2.05,
    tube: 0.015,
    color: "#2dd4bf",
    speed: -0.09,
    tilt: [Math.PI / 3.2, Math.PI / 5, 0],
  },
  {
    radius: 2.35,
    tube: 0.012,
    color: "#e9d5ff",
    speed: 0.07,
    tilt: [Math.PI / 1.8, -Math.PI / 6, 0],
  },
];

function Ring({ radius, tube, color, speed, tilt }: RingConfig) {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.z = t * speed;
    ref.current.rotation.x = tilt[0] + Math.sin(t * 0.1) * 0.03;
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, tube, 16, 128]} />
      <meshStandardMaterial
        color={color}
        metalness={1}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export function OrbitingRings() {
  return (
    <group>
      {RINGS.map((ring, i) => (
        <Ring key={i} {...ring} />
      ))}
    </group>
  );
}
