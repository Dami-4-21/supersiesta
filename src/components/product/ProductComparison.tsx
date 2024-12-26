import React from 'react';
import { X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  features: string[];
  dimensions: string;
  warranty: string;
  material: string;
  image: string;
}

interface ProductComparisonProps {
  products: Product[];
  onRemove: (id: string) => void;
}

export default function ProductComparison({ products, onRemove }: ProductComparisonProps) {
  if (products.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Caractéristiques
            </th>
            {products.map((product) => (
              <th key={product.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span>{product.name}</span>
                  <button
                    onClick={() => onRemove(product.id)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Image
            </td>
            {products.map((product) => (
              <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Prix
            </td>
            {products.map((product) => (
              <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.price} DT
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Dimensions
            </td>
            {products.map((product) => (
              <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.dimensions}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Garantie
            </td>
            {products.map((product) => (
              <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.warranty}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Matériau
            </td>
            {products.map((product) => (
              <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.material}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Caractéristiques
            </td>
            {products.map((product) => (
              <td key={product.id} className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc list-inside">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
