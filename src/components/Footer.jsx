import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <a 
              href="/" 
              className="logo" 
              style={{ display: 'flex', alignItems: 'center', gap: '0', marginLeft: '-15px' }}
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            >
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Repzy Logo" style={{ height: '80px', objectFit: 'contain', margin: '-20px 0' }} />
              <div style={{ marginLeft: '-16px' }}>REPZY</div>
            </a>
          </div>
          
          <div className="footer-col links-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}>Terms of Use</a></li>
            </ul>
          </div>
          
          <div className="footer-col links-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; Copyright 2026, All rights reserved</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/repzy.fit/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@repzy.fit?_r=1&_t=ZN-9B36EX4r04c" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
