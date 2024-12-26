import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
    title: "Découvrez notre collection Pillow Top",
    description: "Un confort exceptionnel pour des nuits paisibles"
  },
  {
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
    title: "Offres Spéciales",
    description: "Jusqu'à 20% de réduction sur les matelas orthopédiques"
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr - 1 + banners.length) % banners.length);
  const next = () => setCurrent((curr) => (curr + 1) % banners.length);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-out
                     ${index === current ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="relative w-full h-full">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl mb-8">{banner.description}</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                                 py-3 px-8 rounded-lg transition-colors">
                  Acheter Maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
                   p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
                   p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}