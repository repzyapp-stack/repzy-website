import React, { useState } from 'react';

const Header = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    
    if (targetId === 'waitlist') {
      onNavigate('waitlist');
      return;
    }

    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="glass-nav">
      <div className="container header-container">
        <a 
          href="/" 
          className="logo" 
          style={{ display: 'flex', alignItems: 'center', gap: '0', marginLeft: '-15px' }}
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
        >
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Repzy Logo" style={{ height: '80px', objectFit: 'contain', margin: '-20px 0' }} />
          <div style={{ marginLeft: '-16px' }}>REPZY</div>
        </a>
        
        <nav className="nav-links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
          <a href="#waitlist" onClick={(e) => handleNavClick(e, 'waitlist')}>Waitlist</a>
        </nav>
        
        <div className="header-actions">
           <button 
             className="btn btn-primary desktop-waitlist-btn" 
             onClick={() => onNavigate('waitlist')}
             style={{ padding: '8px 20px', fontSize: '0.9rem' }}
           >
             Join Waitlist
           </button>
           
           <button 
             className="mobile-menu-toggle" 
             onClick={() => setMenuOpen(!menuOpen)}
             aria-label="Toggle Menu"
           >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               {menuOpen ? (
                 <>
                   <line x1="18" y1="6" x2="6" y2="18"></line>
                   <line x1="6" y1="6" x2="18" y2="18"></line>
                 </>
               ) : (
                 <>
                   <line x1="3" y1="12" x2="21" y2="12"></line>
                   <line x1="3" y1="6" x2="21" y2="6"></line>
                   <line x1="3" y1="18" x2="21" y2="18"></line>
                 </>
               )}
             </svg>
           </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-dropdown-menu animate-fade-in">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
          <a href="#waitlist" onClick={(e) => handleNavClick(e, 'waitlist')}>Waitlist</a>
        </div>
      )}
    </header>
  );
};

export default Header;
