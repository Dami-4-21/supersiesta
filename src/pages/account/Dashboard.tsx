import React from 'react';
import { Package, MapPin, Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mon compte</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <Package className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold mb-1">Commandes récentes</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2 commandes en cours</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <MapPin className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold mb-1">Adresses enregistrées</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">1 adresse</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <Bell className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="font-semibold mb-1">Notifications</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">3 nouvelles</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Activité récente</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Commande #123456</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">En cours de livraison</p>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Il y a 2 jours</span>
          </div>
        </div>
      </div>
    </div>
  );
}