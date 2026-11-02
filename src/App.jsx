import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WaitlistPage from './components/WaitlistPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './index.css';

const VALID_PAGES = ['privacy', 'terms', 'contact', 'waitlist'];

const getInitialPage = () => {
  if (typeof window === 'undefined') return 'home';
  // Check pathname first (e.g. /terms or /privacy or /contact)
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (VALID_PAGES.includes(path)) return path;

  // Check hash fallback (e.g. #terms or #privacy)
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (VALID_PAGES.includes(hash)) return hash;

  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);

  const navigateTo = (page) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state?.page) {
        setCurrentPage(e.state.page);
      } else {
        setCurrentPage(getInitialPage());
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
        ) : currentPage === 'contact' ? (
          <ContactPage onBack={() => navigateTo('home')} />
        ) : (
          <WaitlistPage onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
