import React, { createContext, useContext, useState } from 'react';
import type { ThemeContextType, ThemeType, PageType } from '../types';
import { useLocalStorage } from '../hooks';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<ThemeType>('app-theme', 'theme1');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setTheme = (theme: ThemeType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTheme(theme);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isTransitioning, currentPage, setCurrentPage }}>
      {children}
    </ThemeContext.Provider>
  );
};
