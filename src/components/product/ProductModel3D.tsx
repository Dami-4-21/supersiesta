import React from 'react';
import ThreeDModel from './ThreeDModel';
import { cn } from '../../utils/cn';

interface ProductModel3DProps {
  className?: string;
}

const ProductModel3D: React.FC<ProductModel3DProps> = ({ className }) => {
  return (
    <div className={cn("w-full h-[1000px]", className)}>
      <ThreeDModel className="w-full h-full" />
    </div>
  );
};

export default ProductModel3D;
