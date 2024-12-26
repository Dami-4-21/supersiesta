import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Shield, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import ProductHero from '../components/product/ProductHero';
import { mattressSizes } from '../data/mattressSizes';
import type { Size } from '../components/product/SizeSelector';

type Tab = 'description' | 'specifications' | 'warranty';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>(mattressSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>('description');

  const product = {
    id,
    name: 'Matelas A Ressort Orthopédique "RELAX+"',
    description: 'Un matelas orthopédique premium offrant un support optimal et un confort exceptionnel pour un sommeil réparateur.',
    rating: 4.8,
    reviewCount: 1250,
    features: [
      'Support orthopédique optimal',
      'Ressorts ensachés premium',
      'Mousse haute densité',
      'Tissu anti-acarien'
    ],
    images: [selectedSize.image]
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: selectedSize.price,
        image: selectedSize.image,
        quantity: quantity,
        size: selectedSize.name
      }
    });
    navigate('/cart');
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Kept unchanged */}
      <ProductHero
        name={product.name}
        description={product.description}
        selectedSize={selectedSize}
        onBuyNow={handleAddToCart}
      />

      {/* Winter Sale Banner */}
      <div className="bg-amber-50 py-3 px-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <span className="font-semibold text-amber-900">Soldes d'Hiver</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-1 rounded-md text-sm">
            Économisez jusqu'à 50% sur les Matelas*
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Gallery */}
          <div>
            <ProductGallery images={[selectedSize.image]} />
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-8">
            {/* Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} avis)
              </span>
            </div>

            {/* What You'll Love Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Ce que vous allez adorer</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Choisir la Taille</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mattressSizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 border rounded-lg text-center ${
                      selectedSize.name === size.name
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="font-medium">{size.name}</div>
                    <div className="text-sm text-gray-600">{size.dimensions}</div>
                    <div className="mt-2 font-semibold">{size.price} DT</div>
                    {size.stock <= 0 && (
                      <div className="text-xs text-red-600 mt-1">Plus que 5 en stock</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-24 border border-gray-300 rounded-md py-2 px-3"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Ajouter au panier
              </button>
            </div>

            {/* Warranty Badge */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-medium">Garantie 10 ans</div>
                <div className="text-sm text-gray-600">Protection complète contre les défauts de fabrication</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">Caractéristiques Techniques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-4">Composition</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ressorts ensachés premium</li>
                <li>• Mousse haute densité</li>
                <li>• Tissu anti-acarien</li>
                <li>• Bordure renforcée</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-4">Confort</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Support ferme</li>
                <li>• Zone ergonomique</li>
                <li>• Circulation d'air optimale</li>
                <li>• Absorption des mouvements</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-4">Entretien</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Rotation régulière recommandée</li>
                <li>• Housse non déhoussable</li>
                <li>• Aspirateur à faible puissance</li>
                <li>• Éviter l'humidité</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}