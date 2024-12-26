import React from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Nos matelas sont fabriqués avec les meilleurs matériaux pour garantir un confort optimal.'
    },
    {
      icon: Users,
      title: 'Service Client',
      description: 'Une équipe dédiée pour vous accompagner dans votre choix.'
    },
    {
      icon: Heart,
      title: 'Satisfaction Garantie',
      description: 'Votre confort est notre priorité absolue.'
    },
    {
      icon: Shield,
      title: 'Garantie Fiable',
      description: 'Tous nos produits sont garantis pour votre tranquillité.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">À Propos de Super Siesta</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Leader dans la fabrication de matelas de qualité en Tunisie depuis plus de 20 ans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center
                       transform hover:scale-105 transition-transform"
            >
              <Icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80"
            alt="Notre Histoire"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Depuis notre création, nous nous sommes engagés à fournir des solutions de sommeil 
            innovantes et de haute qualité à nos clients. Notre passion pour le confort et 
            notre expertise dans la fabrication de matelas nous ont permis de devenir un 
            leader reconnu dans l'industrie.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Aujourd'hui, nous continuons d'innover et d'améliorer nos produits pour offrir 
            la meilleure expérience de sommeil possible à nos clients.
          </p>
        </div>
      </div>
    </div>
  );
}