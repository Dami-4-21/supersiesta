import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[selectedImage]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <button 
          className="absolute right-2 top-2 p-2 bg-white/80 rounded-full 
                   hover:bg-white transition-colors"
        >
          <ZoomIn size={20} />
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200",
              selectedImage === index 
                ? "ring-2 ring-indigo-600" 
                : "hover:ring-2 hover:ring-indigo-400"
            )}
          >
            <img 
              src={image} 
              alt={`${name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}