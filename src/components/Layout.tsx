import React from 'react';
import { useTheme } from '../contexts';
import { Header } from './Header';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const { currentTheme, isTransitioning } = useTheme();

  const getLayoutStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-gray-50 font-sans';
      case 'theme2':
        return 'bg-gray-900 font-serif';
      case 'theme3':
        return 'bg-gradient-to-br from-purple-200 via-pink-200 to-red-200';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${getLayoutStyles()} ${
      isTransitioning ? 'opacity-75 scale-[0.98]' : 'opacity-100 scale-100'
    }`}>
      <Header />
      <main className="pt-24 md:pt-20">
        {children}
      </main>
    </div>
  );
};
