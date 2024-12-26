import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                         py-3 px-6 rounded-lg transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Rue Example, Tunis, Tunisie
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-gray-600 dark:text-gray-400">29 934 780</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    contact@supersiesta.tn
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400">29 934 780</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Heures d'ouverture</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi: 9h00 - 13h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}