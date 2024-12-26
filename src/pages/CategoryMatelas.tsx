import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'relax-beige',
    name: 'Matelas Relax Beige',
    price: 790,
    image: '/images/relaxbeige.jpg',
  },
  {
    id: 'relax-bleu',
    name: 'Matelas Relax Bleu',
    price: 790,
    image: '/images/relaxbleu.jpg',
  },
  {
    id: 'medico-beige',
    name: 'Matelas Medico Beige',
    price: 660,
    image: '/images/medicobeige.jpg',
  }
];

export default function CategoryMatelas() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Matelas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{product.price} DT</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Voir les détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
