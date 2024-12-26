import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Dernière mise à jour: Mars 2024
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Collecte des Informations
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous collectons les informations que vous nous fournissez directement, 
              notamment lors de la création d'un compte, d'une commande ou lorsque 
              vous nous contactez.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Nom et coordonnées</li>
              <li>Informations de livraison</li>
              <li>Historique des commandes</li>
              <li>Communications avec notre service client</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Utilisation des Informations
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Nous utilisons vos informations pour:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Traiter et livrer vos commandes</li>
              <li>Communiquer avec vous concernant votre compte</li>
              <li>Améliorer nos produits et services</li>
              <li>Vous envoyer des offres promotionnelles (avec votre consentement)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Protection des Données
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger 
              vos informations personnelles contre tout accès non autorisé ou toute 
              modification, divulgation ou destruction non autorisée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Vos Droits
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Vous avez le droit de:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier vos données</li>
              <li>Supprimer vos données</li>
              <li>Vous opposer au traitement de vos données</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}