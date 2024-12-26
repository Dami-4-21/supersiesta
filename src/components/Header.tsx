import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Truck, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="w-full">
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>Ligne d'assistance: 29 934 780</span>
            </div>
            <div className="flex items-center">
              <Truck size={16} className="mr-2" />
              <span>Livraison Gratuite sur Toute la Tunisie</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Super Siesta" className="h-12 object-contain" />
          </Link>
          
          <div className="flex-1 w-full sm:max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des produits"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}