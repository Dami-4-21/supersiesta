import React from 'react';
import { Plus, MapPin, Edit, Trash } from 'lucide-react';

const addresses = [
  {
    id: '1',
    name: 'Domicile',
    address: '123 Rue Example',
    city: 'Tunis',
    phone: '29 934 780'
  }
];

export default function Addresses() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mes adresses</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg
                         hover:bg-indigo-700 transition-colors">
          <Plus size={20} className="mr-2" />
          Ajouter une adresse
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <MapPin className="text-indigo-600 mr-2" />
                <h3 className="font-semibold">{address.name}</h3>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Edit size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Trash size={16} />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>{address.address}</p>
              <p>{address.city}</p>
              <p>{address.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}