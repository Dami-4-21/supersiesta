import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Package, MapPin, Settings as SettingsIcon } from 'lucide-react';
import Dashboard from './account/Dashboard';
import Orders from './account/Orders';
import Addresses from './account/Addresses';
import AccountSettings from './account/Settings';

export default function Account() {
  const location = useLocation();
  
  const navigation = [
    { name: 'Tableau de bord', path: '/account', icon: User },
    { name: 'Mes commandes', path: '/account/orders', icon: Package },
    { name: 'Mes adresses', path: '/account/addresses', icon: MapPin },
    { name: 'Paramètres', path: '/account/settings', icon: SettingsIcon }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg
                    ${location.pathname === item.path
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="md:col-span-3">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="settings" element={<AccountSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}