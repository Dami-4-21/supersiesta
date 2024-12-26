import React from 'react';
import { Link } from 'react-router-dom';
import staticMap from '../static-map.png';

const FranchiseLocationSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src={staticMap} 
            alt="Carte des franchises" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Trouvez une Franchise Près de Chez Vous
          </h2>
          <p className="text-lg text-gray-600">
            Recherchez une franchise près de votre localisation et obtenez facilement des directions vers nos magasins partenaires.
          </p>
          <Link 
            to="/franchise"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg
                     hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            Voir Toutes les Franchises
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FranchiseLocationSection;
