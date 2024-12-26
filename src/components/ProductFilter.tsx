import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: {
    priceRange: [number, number];
    sizes: string[];
    firmness: string[];
  }) => void;
}

const SIZES = ['90x190', '140x190', '160x200', '180x200'];
const FIRMNESS = ['Souple', 'Medium', 'Medium-Ferme', 'Ferme'];

export default function ProductFilter({ onFilterChange }: FilterProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedFirmness, setSelectedFirmness] = useState<string[]>([]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange: [number, number] = [...priceRange];
    newPriceRange[event.target.name === 'min' ? 0 : 1] = Number(event.target.value);
    setPriceRange(newPriceRange);
    onFilterChange({
      priceRange: newPriceRange,
      sizes: selectedSizes,
      firmness: selectedFirmness
    });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSizes);
    onFilterChange({
      priceRange,
      sizes: newSizes,
      firmness: selectedFirmness
    });
  };

  const handleFirmnessToggle = (firmness: string) => {
    const newFirmness = selectedFirmness.includes(firmness)
      ? selectedFirmness.filter(f => f !== firmness)
      : [...selectedFirmness, firmness];
    setSelectedFirmness(newFirmness);
    onFilterChange({
      priceRange,
      sizes: selectedSizes,
      firmness: newFirmness
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filtres</h2>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Prix (DT)</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceChange}
            min={0}
            max={priceRange[1]}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceChange}
            min={priceRange[0]}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Dimensions</h3>
        <div className="grid grid-cols-2 gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                selectedSizes.includes(size)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Firmness */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Fermeté</h3>
        <div className="space-y-2">
          {FIRMNESS.map((firmness) => (
            <button
              key={firmness}
              onClick={() => handleFirmnessToggle(firmness)}
              className={`w-full px-3 py-2 text-sm rounded-md transition-colors ${
                selectedFirmness.includes(firmness)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {firmness}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
