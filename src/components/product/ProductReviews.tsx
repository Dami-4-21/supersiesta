import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

interface ProductReviewsProps {
  productId: string;
  reviews: Review[];
}

export default function ProductReviews({ productId, reviews }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent');
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.helpful - a.helpful;
  });

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900">Avis Clients</h3>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <Star
                key={rating}
                className={`${
                  rating < averageRating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                } h-5 w-5`}
              />
            ))}
          </div>
          <p className="ml-2 text-sm text-gray-700">
            {averageRating.toFixed(1)} sur 5
          </p>
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'recent' | 'helpful')}
          className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 
                   focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          <option value="recent">Plus récents</option>
          <option value="helpful">Plus utiles</option>
        </select>
      </div>

      <div className="mt-6 space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{review.userName}</h4>
                <div className="mt-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        rating < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      } h-4 w-4`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>

            <p className="mt-4 whitespace-pre-wrap text-gray-700">{review.comment}</p>

            <div className="mt-4 flex items-center space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>Utile ({review.helpful})</span>
              </button>
              {review.verified && (
                <span className="text-sm text-green-600">Achat vérifié</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
