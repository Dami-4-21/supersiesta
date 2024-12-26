import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';
import { cn } from '../../utils/cn';

interface ThreeDModelProps {
  className?: string;
}

function Model() {
  const { scene } = useGLTF('/src/mattress.glb');
  scene.scale.set(1.5, 1.5, 1.5); // Increase model scale
  return <primitive object={scene} />;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={cn("relative w-full h-full rounded-xl overflow-hidden", className)}>
      <Canvas
        ref={canvasRef}
        camera={{ position: [7, 7, 7], fov: 40 }}
        style={{ background: 'transparent' }}
      >
        <Stage environment="city" intensity={0.6} adjustCamera={false}>
          <Model />
        </Stage>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Environment preset="city" />
      </Canvas>
      
      <div className="absolute bottom-6 left-6 bg-white/90 px-6 py-3 rounded-lg text-sm font-medium shadow-sm">
        ↻ Cliquez et faites glisser pour faire pivoter | ⚲ Utilisez la molette pour zoomer
      </div>
    </div>
  );
};

export default ThreeDModel;
