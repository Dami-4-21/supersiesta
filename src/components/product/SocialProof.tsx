import React from 'react';
import { Star, Award, Shield } from 'lucide-react';

export default function SocialProof() {
  return (
    <div className="bg-white py-8 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-medium">50,000+ Avis</span>
          </div>

          {/* Warranty */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="font-medium">10 ans de garantie</span>
          </div>

          {/* Quality */}
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            <span className="font-medium">Certifié ISO 9001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
