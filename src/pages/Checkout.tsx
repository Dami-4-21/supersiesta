import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order creation
    const orderId = Math.random().toString(36).substring(7);
    navigate(`/order-confirmation/${orderId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-900">Finaliser la commande</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Informations de livraison</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Mode de paiement</h2>
                
                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer
                                hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <CreditCard className="mr-2 text-gray-600" />
                    <span className="text-gray-900">Carte bancaire</span>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer
                                hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-gray-900">Paiement à la livraison</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                         py-3 px-4 rounded-lg transition-colors"
              >
                Confirmer la commande
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Résumé de la commande</h2>
              
              <div className="space-y-4 mb-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80"
                      alt="Relax Pillow Top"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Relax Pillow Top</h3>
                      <p className="text-sm text-gray-600">Quantité: 1</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">790 DT</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Sous-total</span>
                  <span>790 DT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Livraison</span>
                  <div className="flex items-center text-green-600">
                    <Truck size={16} className="mr-1" />
                    <span>Gratuite</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>790 DT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}