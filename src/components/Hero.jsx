import React from 'react';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="animate-fade-in-up delay-100">
            Train Smarter. <br/>
            Track Your Progress. <br/>
            Grow Beyond Limits.
          </h1>
          
          <p className="hero-description animate-fade-in-up delay-200">
            Repzy is the #1 AI-powered workout tracker that helps you track your strength progression, exercise performance, PRs, recovery, progressive overload, and more key fitness metrics - so every workout session moves you closer to your goals.
          </p>
          
          {/* Desktop Join Waitlist Button */}
          <div className="hero-actions animate-fade-in-up delay-200 desktop-hero-waitlist">
            <button 
              className="btn btn-primary"
              onClick={() => onNavigate('waitlist')}
              style={{ padding: '12px 32px', fontSize: '1.05rem' }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in-up delay-300">
          <div className="phone-mockup image-based-mockup center-phone">
            <img src={`${import.meta.env.BASE_URL}iphone-frame.png`} className="mockup-frame" alt="Phone Frame" />
            <img src={`${import.meta.env.BASE_URL}hero-mockup.png`} className="mockup-screen" alt="App Screen" />
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
