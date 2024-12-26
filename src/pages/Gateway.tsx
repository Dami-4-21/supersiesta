import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Gateway() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            Super Siesta
          </Link>
          <div className="space-x-4">
            <Link 
              to="/about"
              className="text-white hover:text-blue-200 transition-colors"
            >
              À propos
            </Link>
            <Link 
              to="/contact"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Section */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Découvrez le confort ultime pour votre sommeil
            </h1>
            <p className="text-xl text-blue-100">
              Rejoignez-nous pour accéder à des offres exclusives et personnaliser 
              votre expérience d'achat.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <span>Produits Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <span>Livraison Gratuite</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <span>Garantie 5 ans</span>
              </div>
            </div>
          </div>

          {/* Auth Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {isLogin ? 'Connexion' : 'Créer un compte'}
              </h2>
              <p className="text-gray-600 mt-2">
                {isLogin 
                  ? 'Accédez à votre compte Super Siesta'
                  : 'Rejoignez la communauté Super Siesta'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="votre@email.com"
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    required
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label 
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                               focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="••••••••"
                    />
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                         py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                {isLogin ? 'Se connecter' : 'Créer un compte'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                {isLogin 
                  ? "Vous n'avez pas de compte ? Inscrivez-vous"
                  : 'Déjà inscrit ? Connectez-vous'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}