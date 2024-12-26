import React from 'react';
import ProductModel3D from './ProductModel3D';
import { ArrowRight } from 'lucide-react';
import type { Size } from './SizeSelector';

interface ProductHeroProps {
  name: string;
  description: string;
  selectedSize: Size;
  onBuyNow: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  name,
  description,
  selectedSize,
  onBuyNow
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] -z-10"></div>
      
      <div className="container mx-auto h-full min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Product Info */}
          <div className="flex flex-col justify-center space-y-8 py-12 lg:py-20 px-4 order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {name}
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                {description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBuyNow}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 
                         text-white text-lg font-semibold rounded-lg hover:bg-blue-700 
                         transition-colors group"
              >
                Acheter Maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 border-2 
                         border-gray-900 text-gray-900 text-lg font-semibold rounded-lg 
                         hover:bg-gray-900 hover:text-white transition-colors"
              >
                Plus de Détails
              </button>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Dimensions</div>
                <div className="font-semibold">{selectedSize.dimensions}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Prix</div>
                <div className="font-semibold">{selectedSize.price} DT</div>
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
              <ProductModel3D className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
