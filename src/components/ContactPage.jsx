import React, { useState } from 'react';

const ContactPage = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('repzyapp@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="legal-page-container contact-page-container">
      {/* Top Nav */}
      <div className="legal-nav">
        <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="legal-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </a>
        <div className="legal-logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Repzy Logo" />
          <span>REPZY</span>
        </div>
        <div style={{ width: '140px' }}></div>
      </div>

      {/* Main Content */}
      <div className="contact-content-wrapper animate-fade-in-up">
        <div className="contact-header">
          <span className="waitlist-tag">Support & Inquiries</span>
          <h1>Contact Us</h1>
          <p>
            Have a question, feedback, bug report, or partnership inquiry? We're here to help you get the most out of Repzy.
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Support Card */}
          <div className="contact-card glass-panel">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3>Email Support</h3>
            <p>Direct support for account questions, app issues, feedback, or business inquiries.</p>
            <div className="contact-email-badge">
              <a href="mailto:repzyapp@gmail.com" className="contact-email-link">
                repzyapp@gmail.com
              </a>
              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="contact-copy-btn" 
                title="Copy to clipboard"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <a href="mailto:repzyapp@gmail.com" className="btn btn-primary contact-action-btn">
              Send Email
            </a>
            <span className="contact-subtext">Typical response time: within 24-48 hours</span>
          </div>

          {/* Social Channels Card */}
          <div className="contact-card glass-panel">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12a4 4 0 0 0 8 0"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3>Social & Community</h3>
            <p>Follow our journey, get workout tips, and message us directly on our official channels.</p>
            
            <div className="contact-social-list">
              <a 
                href="https://www.instagram.com/repzy.fit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-item"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram: @repzy.fit</span>
              </a>

              <a 
                href="https://www.tiktok.com/@repzy.fit?_r=1&_t=ZN-9B36EX4r04c" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-item"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span>TikTok: @repzy.fit</span>
              </a>
            </div>
            <span className="contact-subtext">Direct messages open for feedback & community</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={onBack} className="btn btn-secondary">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

