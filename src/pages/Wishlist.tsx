import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// This would typically come from your product data/API
const getProductDetails = (productId: string) => {
  // For now, we'll return mock data
  return {
    id: productId,
    name: 'Product Name',
    price: 0,
    image: '/path/to/image',
    category: 'category'
  };
};

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const products = wishlist.map(getProductDetails);

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-2 text-lg font-medium text-gray-900">Liste de souhaits vide</h2>
          <p className="mt-1 text-sm text-gray-500">
            Commencez à ajouter des produits à votre liste de souhaits
          </p>
          <div className="mt-6">
            <Link
              to="/category/matelas"
              className="inline-flex items-center px-4 py-2 border border-transparent 
                       text-sm font-medium rounded-md shadow-sm text-white 
                       bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-blue-500"
            >
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Ma Liste de Souhaits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
