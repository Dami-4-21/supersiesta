import React from 'react';
import { User, Lock, Bell } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Paramètres</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <User className="text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Informations personnelles</h2>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Prénom</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nom</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              />
            </div>
            
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg
                           hover:bg-indigo-700 transition-colors">
              Sauvegarder
            </button>
          </form>
        </div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <Lock className="text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Sécurité</h2>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Mot de passe actuel
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              />
            </div>
            
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg
                           hover:bg-indigo-700 transition-colors">
              Changer le mot de passe
            </button>
          </form>
        </div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <Bell className="text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Recevoir des notifications par email</span>
            </label>
            
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Recevoir des notifications SMS</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}