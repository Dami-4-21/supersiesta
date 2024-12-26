import React from 'react';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Conditions Générales de Vente</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Dernière mise à jour: Mars 2024
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Commandes</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Toute commande passée sur notre site implique l'acceptation intégrale 
              et sans réserve des présentes conditions générales de vente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Prix</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Les prix sont indiqués en Dinars Tunisiens (DT) toutes taxes comprises. 
              La livraison est gratuite sur toute la Tunisie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Paiement</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Nous acceptons les paiements par:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Carte bancaire</li>
              <li>Paiement à la livraison</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Livraison</h2>
            <p className="text-gray-600 dark:text-gray-400">
              La livraison est effectuée à l'adresse indiquée par le client. Les délais 
              de livraison sont donnés à titre indicatif.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Garantie</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tous nos produits sont garantis contre tout défaut de fabrication pendant 
              une durée de 5 ans à compter de la date de livraison.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}