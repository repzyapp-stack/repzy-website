import React from 'react';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="animate-fade-in-up delay-100">
            <span style={{ whiteSpace: 'nowrap' }}>Actionable Insights</span> <br/>
            <span style={{ color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>Effortless Logging</span> <br/>
            <span style={{ whiteSpace: 'nowrap' }}>Seamless Progress.</span>
          </h1>
          
          <p className="hero-description animate-fade-in-up delay-200">
            REPZY is the #1 AI-powered workout tracker, built for distraction-free training. Seamless logging, meaningful insights and complete clarity on your performance - giving you less time tapping screens and more time hitting PRs.
          </p>
          
          {/* Desktop Join Waitlist Button */}
          <div className="hero-actions animate-fade-in-up delay-200 desktop-hero-waitlist">
            <button 
              className="btn btn-primary"
              onClick={() => onNavigate('waitlist')}
              style={{ padding: '15px 42px', fontSize: '1.15rem', fontWeight: '700', position: 'relative', top: '-10px' }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
        
        <div className="hero-image-wrapper overlapping-phones animate-fade-in-up delay-300">
          <div className="phone-mockup image-based-mockup phone-back">
            <img src={`${import.meta.env.BASE_URL}iphone-frame.png`} className="mockup-frame" alt="Phone Frame" />
            <img src={`${import.meta.env.BASE_URL}screen-back.png`} className="mockup-screen" alt="App Screen" />
          </div>
          <div className="phone-mockup image-based-mockup phone-front">
            <img src={`${import.meta.env.BASE_URL}iphone-frame.png`} className="mockup-frame" alt="Phone Frame" />
            <img src={`${import.meta.env.BASE_URL}screen-front.png`} className="mockup-screen" alt="App Screen" />
          </div>
          
          {/* Mobile Join Waitlist Button */}
          <button 
            className="btn btn-primary mobile-waitlist-cta" 
            onClick={() => onNavigate('waitlist')}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
