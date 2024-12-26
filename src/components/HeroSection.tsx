import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Model() {
  const { scene } = useGLTF('/supersiesta/assets/models/matelaTendresse.glb');
  scene.scale.set(2, 2, 2);
  return <primitive object={scene} />;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] -z-10"></div>
      
      <div className="container mx-auto h-full min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8 py-12 lg:py-20 px-4 order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Un sommeil de rêve commence ici
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Découvrez nos matelas ergonomiques, oreillers de confort supérieur, et solutions sur mesure pour des nuits réparatrices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 
                         text-white text-lg font-semibold rounded-lg hover:bg-blue-700 
                         transition-colors group"
              >
                Voir Nos Produits
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 
                         border-gray-900 text-gray-900 text-lg font-semibold rounded-lg 
                         hover:bg-gray-900 hover:text-white transition-colors"
              >
                En Savoir Plus
              </Link>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Livraison</div>
                <div className="font-semibold">Gratuite</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Service Client</div>
                <div className="font-semibold">24/7</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Garantie</div>
                <div className="font-semibold">10 ans</div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Model */}
          <div className="relative flex items-center justify-center w-full h-full order-2">
            <div className="
              w-full aspect-square
              sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[800px]
              sm:h-[400px] md:h-[600px] lg:h-[600px] xl:h-[800px]
              mx-auto
            ">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
