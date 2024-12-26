import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sliders, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import CategoryMatelas from './CategoryMatelas';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  stock: number;
}

const products: Record<string, Product[]> = {
  'relax-pillow-top': [
    {
      id: '1',
      name: 'Relax Pillow Top Beige',
      price: 790,
      originalPrice: 990,
      image: '/images/relaxpillowbeige.jpg',
      rating: 4.5,
      stock: 10
    },
    {
      id: '2',
      name: 'Relax Pillow Top Bleu',
      price: 890,
      originalPrice: 1090,
      image: '/images/relaxpillowbleu.jpg',
      rating: 4.8,
      stock: 5
    },
    {
      id: '3',
      name: 'Relax Pillow Top Rouge',
      price: 690,
      image: '/images/relaxpillowrouge.jpg',
      rating: 4.3,
      stock: 15
    }
  ],
  'medico-pillow-top': [
    {
      id: '4',
      name: 'Medico Pillow Top Beige',
      price: 660,
      originalPrice: 792,
      image: '/images/medicopillowbeige.jpg',
      rating: 4.6,
      stock: 8
    }
  ]
};

const categories: Record<string, string> = {
  'relax-pillow-top': 'Relax Pillow Top',
  'medico-pillow-top': 'Medico Pillow Top',
  'matelas-relax': 'Matelas Relax',
  'matelas-medico': 'Matelas Medico',
  'matelas-tendresse': 'Matelas Tendresse',
  'matelas': 'Matelas'
};

export default function ProductListing() {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  // Render CategoryMatelas component for the matelas category
  if (category === 'matelas') {
    return <CategoryMatelas />;
  }

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const categoryName = category ? categories[category] || 'Products' : 'Products';
  const categoryProducts = category ? products[category] || [] : [];

  const sortProducts = (products: Product[]) => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const filteredProducts = sortProducts(categoryProducts).filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 
                   dark:bg-gray-700 rounded-lg"
        >
          <Sliders size={20} />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-4">Sort By</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>

            <div className="mt-6">
              <h2 className="font-semibold mb-4">Price Range</h2>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0]} DT</span>
                  <span>{priceRange[1]} DT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}