"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 200;
const CONNECTION_DISTANCE = 2.2;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));

  const basePositions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 0.003;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return arr;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color("#6366f1"), []);
  const linePositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6),
    []
  );


  const handlePointerMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    []
  );

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const positions = basePositions;
    const mx = mouse.current.x * viewport.width * 0.5;
    const my = mouse.current.y * viewport.height * 0.5;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      positions[ix] += velocities[ix];
      positions[ix + 1] += velocities[ix + 1];
      positions[ix + 2] += velocities[ix + 2];

      // Boundary bounce
      if (Math.abs(positions[ix]) > 6) velocities[ix] *= -1;
      if (Math.abs(positions[ix + 1]) > 4) velocities[ix + 1] *= -1;
      if (Math.abs(positions[ix + 2]) > 3) velocities[ix + 2] *= -1;

      // Mouse repulsion
      const dx = positions[ix] - mx;
      const dy = positions[ix + 1] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2.5) {
        const force = (2.5 - dist) * 0.008;
        positions[ix] += dx * force;
        positions[ix + 1] += dy * force;
      }

      const scale = 0.015 + Math.random() * 0.005;
      dummy.position.set(positions[ix], positions[ix + 1], positions[ix + 2]);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

    // Draw connections
    let lineVertexCount = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const ix = i * 3;
        const jx = j * 3;
        const dx = positions[ix] - positions[jx];
        const dy = positions[ix + 1] - positions[jx + 1];
        const dz = positions[ix + 2] - positions[jx + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECTION_DISTANCE) {
          const idx = lineVertexCount * 3;
          linePositions[idx] = positions[ix];
          linePositions[idx + 1] = positions[ix + 1];
          linePositions[idx + 2] = positions[ix + 2];
          linePositions[idx + 3] = positions[jx];
          linePositions[idx + 4] = positions[jx + 1];
          linePositions[idx + 5] = positions[jx + 2];
          lineVertexCount += 2;
        }
      }
    }

    const geom = linesRef.current.geometry as THREE.BufferGeometry;
    geom.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions.slice(0, lineVertexCount * 3), 3)
    );
    geom.setDrawRange(0, lineVertexCount);
    geom.attributes.position.needsUpdate = true;
  });

  // Attach global mouse listener
  if (typeof window !== "undefined") {
    window.onpointermove = handlePointerMove;
  }

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.7} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#6366f1" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
