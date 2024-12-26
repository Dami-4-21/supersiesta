import React from 'react';
import { cn } from '../../utils/cn';

export interface Size {
  name: string;
  dimensions: string;
  price: number;
  stock: number;
  image: string;
}

interface SizeSelectorProps {
  sizes: Size[];
  selectedSize: Size;
  onSizeSelect: (size: Size) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Dimensions
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {sizes.map((size) => (
          <button
            key={size.name}
            onClick={() => onSizeSelect(size)}
            className={cn(
              "flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200",
              selectedSize.name === size.name
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-200 hover:border-indigo-600 hover:bg-indigo-50"
            )}
          >
            <span className="font-semibold">{size.name}</span>
            <span className="text-sm text-gray-600 mt-1">{size.dimensions}</span>
            <span className="text-sm font-medium mt-2">{size.price} DT</span>
            {size.stock <= 5 && (
              <span className="text-xs text-red-600 mt-1">
                Plus que {size.stock} en stock
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}