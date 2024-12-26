import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Clock, ShieldCheck, Mail } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import AwardsSection from '../components/AwardsSection';
import FranchiseLocationSection from '../components/FranchiseLocationSection';

const products = [
  {
    id: '1',
    name: 'Relax Pillow Top Premium',
    price: 790,
    originalPrice: 990,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    category: 'relax-pillow-top',
    isNew: true
  },
  {
    id: '2',
    name: 'Medico Pillow Top Deluxe',
    price: 660,
    originalPrice: 792,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80',
    category: 'medico-pillow-top'
  },
  {
    id: '3',
    name: 'Matelas Tendresse',
    price: 660,
    originalPrice: 792,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80',
    category: 'matelas'
  },
  {
    id: '4',
    name: 'Matelas Relax Orthopédique',
    price: 480,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    category: 'matelas',
    isNew: true
  },
  {
    id: '5',
    name: 'Matelas Orthomédicale Plus',
    price: 400,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80',
    category: 'matelas'
  },
  {
    id: '6',
    name: 'Matelas Orthopédique Venise',
    price: 290,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    category: 'matelas'
  },
  {
    id: '7',
    name: 'Matelas Orthopédique Soft',
    price: 250,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80',
    category: 'matelas'
  },
  {
    id: '8',
    name: 'Relax Pillow Top Luxe',
    price: 890,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    category: 'relax-pillow-top',
    isNew: true
  }
];

const categories = [
  {
    name: 'Relax',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    slug: 'relax-pillow-top'
  },
  {
    name: 'Medico',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80',
    slug: 'medico-pillow-top'
  },
  {
    name: 'Tandresse',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    slug: 'matelas'
  }
];

const reviews = [
  {
    name: 'Sarah L.',
    rating: 5,
    comment: 'Le meilleur matelas que j\'ai jamais eu. Je dors comme un bébé!',
    product: 'Relax Pillow Top Premium'
  },
  {
    name: 'Mohamed A.',
    rating: 5,
    comment: 'Qualité exceptionnelle et livraison rapide.',
    product: 'Medico Pillow Top Deluxe'
  },
  {
    name: 'Leila B.',
    rating: 4,
    comment: 'Très confortable, je recommande vivement.',
    product: 'Matelas Tendresse'
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Catégories Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 
                         group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                           justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Meilleures Ventes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Nouveautés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => p.isNew).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-indigo-600 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Avis Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{review.comment}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <AwardsSection />

      {/* Franchise Location Section */}
      <FranchiseLocationSection />

      {/* Newsletter */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Inscrivez-vous à notre newsletter
          </h2>
          <p className="mb-8">
            Recevez 10% de réduction sur votre première commande et nos meilleures offres
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg
                     hover:bg-gray-100 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>

      {/* Advantages */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <Truck className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Livraison Gratuite</h3>
              <p className="text-sm text-gray-600">
                Partout en Tunisie
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Support 24/7</h3>
              <p className="text-sm text-gray-600">
                À votre service
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ShieldCheck className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Garantie 5 ans</h3>
              <p className="text-sm text-gray-600">
                Sur tous nos produits
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-600">
                -10% sur votre commande
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}