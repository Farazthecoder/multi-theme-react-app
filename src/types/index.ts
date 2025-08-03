export * from './product';

export type ThemeType = 'theme1' | 'theme2' | 'theme3';
export type PageType = 'home' | 'about' | 'contact';

export interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}