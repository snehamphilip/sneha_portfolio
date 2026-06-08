import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function SphereMesh() {

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />

        <meshStandardMaterial
          color="#6366f1"
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />

      <SphereMesh />
    </Canvas>
  );
}

export default FloatingSphere;