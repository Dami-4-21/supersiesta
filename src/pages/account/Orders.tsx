import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

const orders = [
  {
    id: '123456',
    date: '2024-03-15',
    status: 'En cours de livraison',
    total: 790,
    items: [
      {
        name: 'Relax Pillow Top',
        quantity: 1,
        price: 790
      }
    ]
  }
];

export default function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mes commandes</h1>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">Commande #{order.id}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Passée le {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center text-indigo-600">
                <Truck size={20} className="mr-2" />
                <span>{order.status}</span>
              </div>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quantité: {item.quantity}
                    </p>
                  </div>
                  <span>{item.price} DT</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{order.total} DT</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}