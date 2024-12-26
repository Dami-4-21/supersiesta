import React from 'react';

interface PromotionalBannerProps {
  message: string;
  ctaText: string;
  onClick: () => void;
}

export default function PromotionalBanner({ message, ctaText, onClick }: PromotionalBannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-lg font-medium">{message}</p>
        <button
          onClick={onClick}
          className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
