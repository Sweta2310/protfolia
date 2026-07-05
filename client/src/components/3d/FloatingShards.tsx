import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

interface ShardConfig {
  position: [number, number, number];
  scale: number;
  speed: number;
  offset: number;
}

const SHARDS: ShardConfig[] = [
  { position: [-1.6, 0.9, -0.6], scale: 0.16, speed: 0.5, offset: 0 },
  { position: [1.9, -0.7, 0.3], scale: 0.12, speed: 0.4, offset: 2.1 },
  { position: [-1.3, -1.1, 0.5], scale: 0.1, speed: 0.6, offset: 4.2 },
  { position: [1.4, 1.2, -0.4], scale: 0.14, speed: 0.45, offset: 1.3 },
];

function Shard({ position, scale, speed, offset }: ShardConfig) {
  const ref = useRef<Group>(null);
  const basePos = useMemo(() => position, [position]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.y = basePos[1] + Math.sin(t) * 0.15;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={ref} position={basePos} scale={scale}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#a78bfa"
          transmission={0.9}
          roughness={0.1}
          thickness={0.6}
          clearcoat={1}
          envMapIntensity={1.2}
        />
      </mesh>
    </group>
  );
}

export function FloatingShards() {
  return (
    <group>
      {SHARDS.map((shard, i) => (
        <Shard key={i} {...shard} />
      ))}
    </group>
  );
}
