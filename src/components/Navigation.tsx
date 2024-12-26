import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();
  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Accueil
            </Link>
            
            <Link to="/category/matelas" className="hover:text-blue-200 transition-colors">
              Matelas
            </Link>
            
            <Link to="/category/oreiller" className="hover:text-blue-200 transition-colors">
              Oreiller
            </Link>

            <Link to="/about" className="hover:text-blue-200 transition-colors">
              À propos
            </Link>
            
            <Link to="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>

          <Link
            to="/cart"
            className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="bg-white text-blue-600 text-xs rounded-full w-5 h-5 
                           flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } py-4 space-y-2`}
        >
          <Link
            to="/"
            className="block py-2 hover:bg-blue-700 rounded px-3"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          
          <Link
            to="/category/matelas"
            className="block py-2 hover:bg-blue-700 rounded px-3"
            onClick={() => setIsOpen(false)}
          >
            Matelas
          </Link>
          
          <Link
            to="/category/oreiller"
            className="block py-2 hover:bg-blue-700 rounded px-3"
            onClick={() => setIsOpen(false)}
          >
            Oreiller
          </Link>
          
          <Link
            to="/about"
            className="block py-2 hover:bg-blue-700 rounded px-3"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
          
          <Link
            to="/contact"
            className="block py-2 hover:bg-blue-700 rounded px-3"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}