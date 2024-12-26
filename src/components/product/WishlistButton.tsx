import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

export default function WishlistButton({ productId, className = '' }: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(productId);

  return (
    <button
      onClick={() => toggleWishlist(productId)}
      className={`p-2 rounded-full transition-colors ${
        isWishlisted
          ? 'text-red-500 hover:text-red-600'
          : 'text-gray-400 hover:text-gray-500'
      } ${className}`}
      aria-label={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      <Heart
        className={isWishlisted ? 'fill-current' : ''}
        size={24}
      />
    </button>
  );
}
