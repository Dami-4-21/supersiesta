import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-8 text-gray-900">Votre panier est vide</h1>
          <Link
            to="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white 
                     font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Continuer vos achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-900">Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 mb-4 bg-gray-50 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-indigo-600 font-bold">
                    {item.price} DT
                  </p>
                  
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded text-gray-600"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="mx-2 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded text-gray-600"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 hover:bg-gray-200 rounded text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Résumé de la commande</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Sous-total</span>
                  <span>{subtotal} DT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Livraison</span>
                  <div className="flex items-center text-green-600">
                    <Truck size={16} className="mr-1" />
                    <span>Gratuite</span>
                  </div>
                </div>
                <div className="border-t pt-3 font-semibold text-gray-900">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>{total} DT</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                         py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                Passer à la caisse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}