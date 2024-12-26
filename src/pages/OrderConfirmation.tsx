import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package } from 'lucide-react';

export default function OrderConfirmation() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle size={64} className="mx-auto text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Merci pour votre commande!
        </h1>
        
        <p className="text-xl mb-8">
          Votre commande #{id} a été confirmée
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
          <div className="flex items-center justify-center space-x-2 text-indigo-600 dark:text-indigo-400">
            <Package size={24} />
            <span className="font-semibold">
              Livraison estimée: 2-3 jours ouvrables
            </span>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                   py-3 px-8 rounded-lg transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}