import React from 'react';
import { ThemeProvider, useTheme } from './contexts';
import { Layout } from './components';
import { HomePage, AboutPage, ContactPage } from './pages';

const AppContent: React.FC = () => {
  const { currentPage } = useTheme();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderCurrentPage()}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;