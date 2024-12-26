import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Super Siesta</h3>
            <p className="mb-4">
              Votre spécialiste en matelas de qualité supérieure en Tunisie.
            </p>
            <a href="/about" className="text-blue-600 hover:text-blue-700">
              À propos
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Nous Contacter</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/21629934780"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Client</h3>
            <p className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              29 934 780
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>All Rights Reserved © 2024 Super Siesta - Powered by Converty.</p>
        </div>
      </div>
    </footer>
  );
}