import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WaitlistPage from './components/WaitlistPage';
import Footer from './components/Footer';
import './index.css'; // Make sure this is loaded if not already in main.jsx

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <Features />
          </>
        ) : (
          <WaitlistPage onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
