import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  description?: string;
  specifications?: {
    sizes: string[];
    firmness: string;
    height: string;
    materials: string[];
  };
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating = 0,
  description = '',
  specifications
}: ProductCardProps) {
  const { dispatch } = useCart();
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, image, quantity: 1 }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/product/${id}`} className="block relative">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
          />
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
              -{discount}%
            </div>
          )}
        </div>
        
        <div className="p-4">
          {rating > 0 && (
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({rating})</span>
            </div>
          )}

          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {name}
          </h3>
          
          {description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-blue-600">
                {price} DT
              </span>
              {originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  {originalPrice} DT
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 
                       transition-colors duration-200 flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Ajouter</span>
            </button>
            <Link
              to={`/product/${id}`}
              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 
                       transition-colors duration-200"
            >
              <Eye className="w-5 h-5" />
            </Link>
          </div>

          {specifications && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded">
                  {specifications.firmness}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded">
                  {specifications.height}
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}