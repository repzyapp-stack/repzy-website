import React, { useState } from 'react';

const featureData = [
  {
    title: "Hands-Free Rep Counting",
    description: "Prop up your phone and lift. Repzy's AI counts every rep automatically — no buttons needed.",
    image: "/feature-1.png"
  },
  {
    title: "AI Form Analysis",
    description: "Get live feedback on your tempo and range of motion as you lift, rep by rep.",
    image: "/feature-2.jpg"
  },
  {
    title: "Progression Tracking",
    description: "Track your PRs, volume, and intensity over time with beautiful progress charts.",
    image: "/feature-3.jpg"
  },
  {
    title: "Complete Fitness Toolkit",
    description: "Macro & BMR calculators, stopwatch, body measurements, reminders, and more.",
    image: "/feature-1.png"
  }
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="features-section">
      <div className="container">

        <div className="features-header animate-fade-in-up">
          <h2>Packed with features to level up your training</h2>
          <p>Ditch the pen and paper. Repzy tracks every lift and guides your workouts automatically.</p>
        </div>

        {/* ── Desktop Layout ── */}
        <div className="interactive-features-container animate-fade-in-up desktop-features">
          <div className="interactive-phone-col">
            <div className="phone-mockup image-based-mockup" style={{ position: 'relative' }}>
              <img src="/iphone-frame.png" className="mockup-frame" alt="Phone Frame" />
              <img src={featureData[activeIndex].image} className="mockup-screen" alt="Feature preview" />
            </div>
            <div className="pagination-dots">
              {featureData.map((_, idx) => (
                <div key={idx} className={`dot ${idx === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(idx)} />
              ))}
            </div>
          </div>
          <div className="interactive-list-col">
            {featureData.map((feat, index) => (
              <div key={index} className={`feature-list-card ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile Layout: Horizontal swipeable cards with phone inside ── */}
        <div className="mobile-features-scroll">
          {featureData.map((feat, index) => (
            <div key={index} className="mobile-feature-card">
              <div className="mobile-feature-mockup">
                <div className="phone-mockup image-based-mockup">
                  <img src="/iphone-frame.png" className="mockup-frame" alt="Phone Frame" />
                  <img src={feat.image} className="mockup-screen" alt={feat.title} />
                </div>
              </div>
              <div className="mobile-feature-text">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
