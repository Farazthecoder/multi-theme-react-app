import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts';
import { ProductCard } from '../components';
import { fetchProducts } from '../utils';
import type { Product } from '../types';

export const HomePage: React.FC = () => {
  const { currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const getContentStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          container: 'max-w-7xl mx-auto p-6',
          title: 'text-4xl font-bold text-gray-800 mb-6 text-center',
          subtitle: 'text-lg text-gray-600 mb-8 text-center',
          button: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200',
          grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        };
      case 'theme2':
        return {
          container: 'flex',
          title: 'text-5xl font-bold text-white mb-8',
          subtitle: 'text-xl text-gray-300 mb-10',
          button: 'bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl transition-colors duration-200 font-bold',
          grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8'
        };
      case 'theme3':
        return {
          container: 'max-w-7xl mx-auto p-6',
          title: 'text-6xl font-bold text-purple-800 mb-8 text-center animate-bounce',
          subtitle: 'text-2xl text-pink-600 mb-10 text-center',
          button: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-200 font-bold shadow-lg hover:shadow-xl',
          grid: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
        };
      default:
        return {
          container: 'max-w-7xl mx-auto p-6',
          title: 'text-4xl font-bold mb-6',
          subtitle: 'text-lg mb-8',
          button: 'bg-blue-600 text-white px-6 py-3 rounded-lg',
          grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        };
    }
  };

  const styles = getContentStyles();

  if (currentTheme === 'theme2') {
    return (
      <div className={styles.container}>
        <aside className="w-64 bg-gray-800 min-h-screen p-6 border-r border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Navigation</h2>
          <ul className="space-y-4">
            <li><span className="text-gray-300 hover:text-white block cursor-pointer">Products</span></li>
            <li><span className="text-gray-300 hover:text-white block cursor-pointer">Categories</span></li>
            <li><span className="text-gray-300 hover:text-white block cursor-pointer">Favorites</span></li>
          </ul>
        </aside>
        <div className="flex-1 p-8">
          <h1 className={styles.title}>Premium Store</h1>
          <p className={styles.subtitle}>
            Discover our exclusive collection of premium products
          </p>
          <button className={styles.button}>
            Explore Collection
          </button>
          {loading ? (
            <div className="text-white text-center mt-12">Loading products...</div>
          ) : (
            <div className={`mt-12 ${styles.grid}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {currentTheme === 'theme3' ? '🛍️ Amazing Store 🛍️' : 'Welcome to Our Store'}
      </h1>
      <p className={styles.subtitle}>
        {currentTheme === 'theme3' 
          ? 'Discover magical products that will make you smile! ✨'
          : 'Discover our amazing collection of products'
        }
      </p>
      <div className="text-center mb-12">
        <button className={styles.button}>
          {currentTheme === 'theme3' ? '🚀 Start Shopping!' : 'Shop Now'}
        </button>
      </div>
      
      {loading ? (
        <div className="text-center mt-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
          <p className="mt-4">Loading products...</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};