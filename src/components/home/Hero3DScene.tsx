'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.4} ref={meshRef}>
        <MeshDistortMaterial
          color="#70e2ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function Rig() {
  return useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(state.pointer.x * 2, state.pointer.y * 2, 5),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ff00ff" />
        <AnimatedSphere />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        {/* <Rig /> // Disabling rig for now to keep it centered but lively */}
      </Canvas>
    </div>
  );
}
