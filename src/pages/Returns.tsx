import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function Returns() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <RefreshCw className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Politique de Retour</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Votre satisfaction est notre priorité
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Conditions de Retour
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Nous acceptons les retours dans les 30 jours suivant la livraison, 
              sous réserve que le produit soit dans son état d'origine.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold mb-2">Produits éligibles</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Les produits doivent être non utilisés et dans leur emballage d'origine.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold mb-2">Délai de remboursement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Le remboursement est effectué sous 14 jours après réception du retour.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold mb-2">Frais de retour</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Les frais de retour sont gratuits pour les produits défectueux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Procédure de Retour
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 dark:text-gray-400">
              <li>
                Contactez notre service client pour initier le retour
              </li>
              <li>
                Emballez soigneusement le produit dans son emballage d'origine
              </li>
              <li>
                Attendez la collecte par notre service de livraison
              </li>
              <li>
                Le remboursement sera effectué une fois le produit reçu et vérifié
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">
            Besoin d'aide pour un retour?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Notre équipe est là pour vous aider avec le processus de retour.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white 
                     font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}