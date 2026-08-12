import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WaitlistPage from './components/WaitlistPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
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
      {(currentPage === 'home' || currentPage === 'waitlist') && (
        <Header currentPage={currentPage} onNavigate={navigateTo} />
      )}
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <Features />
          </>
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicyPage onBack={() => navigateTo('home')} />
        ) : currentPage === 'terms' ? (
          <TermsOfServicePage onBack={() => navigateTo('home')} />
        ) : (
          <WaitlistPage onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
