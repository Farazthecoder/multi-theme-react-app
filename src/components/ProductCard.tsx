import React from 'react';
import type { Product } from '../types';
import { useTheme } from '../contexts';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  const getCardStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300';
      case 'theme2':
        return 'bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl border border-gray-700 transition-all duration-300';
      case 'theme3':
        return 'bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl border-4 border-yellow-300 transition-all duration-300 hover:scale-105';
      default:
        return 'bg-white rounded-lg shadow-md';
    }
  };

  const getTextStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return { title: 'text-gray-800 font-semibold', price: 'text-blue-600 font-bold', desc: 'text-gray-600' };
      case 'theme2':
        return { title: 'text-white font-bold', price: 'text-blue-400 font-bold', desc: 'text-gray-300' };
      case 'theme3':
        return { title: 'text-purple-800 font-bold', price: 'text-pink-600 font-extrabold', desc: 'text-purple-600' };
      default:
        return { title: 'text-gray-800', price: 'text-blue-600', desc: 'text-gray-600' };
    }
  };

  const textStyles = getTextStyles();

  return (
    <div className={`p-4 ${getCardStyles()}`}>
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-48 object-contain mb-4 rounded-lg"
      />
      <h3 className={`text-lg mb-2 line-clamp-2 ${textStyles.title}`}>
        {product.title}
      </h3>
      <p className={`text-2xl mb-2 ${textStyles.price}`}>
        ${product.price}
      </p>
      <p className={`text-sm line-clamp-3 ${textStyles.desc}`}>
        {product.description}
      </p>
      <div className="flex items-center mt-3">
        <span className={`text-sm ${textStyles.desc}`}>
          ⭐ {product.rating.rate} ({product.rating.count})
        </span>
      </div>
    </div>
  );
};