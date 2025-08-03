import type { Product } from '../types';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=6');
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};