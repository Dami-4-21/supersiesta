import React from 'react';
import { Shield, Heart, Star, Truck } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Support Orthopédique',
    description: 'Conçu pour un alignement optimal de la colonne vertébrale et un soutien personnalisé.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Confort Supérieur',
    description: 'Mousse haute densité et ressorts ensachés pour un confort exceptionnel.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Qualité Premium',
    description: 'Matériaux de haute qualité et fabrication soignée pour une durabilité maximale.',
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: 'Livraison Gratuite',
    description: 'Livraison gratuite à domicile dans toute la Tunisie.',
    icon: <Truck className="w-6 h-6" />,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pourquoi Choisir le "RELAX+" ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
