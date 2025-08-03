import React from 'react';
import { useTheme } from '../contexts';

export const AboutPage: React.FC = () => {
  const { currentTheme } = useTheme();

  const getStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          container: 'max-w-4xl mx-auto p-6',
          title: 'text-4xl font-bold text-gray-800 mb-6',
          text: 'text-gray-600 text-lg leading-relaxed mb-4'
        };
      case 'theme2':
        return {
          container: 'max-w-4xl mx-auto p-8',
          title: 'text-5xl font-bold text-white mb-8',
          text: 'text-gray-300 text-xl leading-relaxed mb-6'
        };
      case 'theme3':
        return {
          container: 'max-w-4xl mx-auto p-6',
          title: 'text-5xl font-bold text-purple-800 mb-8 text-center',
          text: 'text-purple-600 text-xl leading-relaxed mb-6'
        };
      default:
        return {
          container: 'max-w-4xl mx-auto p-6',
          title: 'text-4xl font-bold mb-6',
          text: 'text-gray-600 text-lg mb-4'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {currentTheme === 'theme3' ? '✨ About Our Magic ✨' : 'About Us'}
      </h1>
      <p className={styles.text}>
        We are a modern e-commerce platform dedicated to providing the best shopping experience 
        with multiple themes to suit every user's preference.
      </p>
      <p className={styles.text}>
        Our multi-theme approach allows users to customize their browsing experience, 
        whether they prefer a minimalist design, a professional dark mode, or a fun and colorful interface.
      </p>
      <p className={styles.text}>
        Built with React, TypeScript, and Tailwind CSS, our application demonstrates 
        modern web development practices with responsive design and smooth animations.
      </p>
    </div>
  );
};