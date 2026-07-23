import React, { useState } from 'react';

const featureData = [
  {
    title: "Everything you need, in one place",
    points: [
      "Log Workouts: Modern, minimalist design for effortless workout logging",
      "Warm-up, drop, and failure set tracking",
      "Detailed exercise analytics for every movement",
      "PR and goal tracking with progression graphs over time",
      "Video instructions for every exercise",
      "Automatic rest timers",
      "Exercise notes and complete workout history"
    ],
    image: `${import.meta.env.BASE_URL}feature-1.png`
  },
  {
    title: "AI Form Analysis",
    points: [
      "Recovery data to help you avoid overtraining and prevent slow progress.",
      "AI-powered overall fitness score to understand your performance at a glance.",
      "Strength progression and consistency tracking to stay motivated and know when to push harder.",
      "PR tracking and progressive overload insights to keep improving every workout.",
      "Body metrics and growth tracking to monitor your transformation over time.",
      "Macro calculator to personalize your nutrition goals.",
      "RMR calculator to understand your daily calorie needs.",
      "Workout reminders to stay consistent with your training."
    ],
    image: `${import.meta.env.BASE_URL}feature-2.jpg`
  },
  {
    title: "Join the Community",
    description: "Become part of Repzy’s ever-growing Discord community, where fitness enthusiasts share knowledge, support each other, and stay motivated on their journey to reach their fitness goals.",
    points: [
      "Get fitness advice from other lifters",
      "Share your progress and celebrate personal records with the community.",
      "Ask questions about workouts, nutrition, recovery, and consistency.",
      "Stay motivated with challenges, discussions, and daily support.",
      "Learn from others who are working toward similar fitness goals.",
      "Be part of a growing movement focused on smarter training and long-term progress."
    ],
    image: `${import.meta.env.BASE_URL}feature-3.jpg`
  },
  {
    title: "Complete Fitness Toolkit",
    description: "Macro & BMR calculators, stopwatch, body measurements, reminders, and more.",
    image: `${import.meta.env.BASE_URL}feature-1.png`
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
              <img src={`${import.meta.env.BASE_URL}iphone-frame.png`} className="mockup-frame" alt="Phone Frame" />
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
                  <img src={`${import.meta.env.BASE_URL}iphone-frame.png`} className="mockup-frame" alt="Phone Frame" />
                  <img src={feat.image} className="mockup-screen" alt={feat.title} />
                </div>
              </div>
              <div className="mobile-feature-text">
                <h3>{feat.title}</h3>
                <p>{feat.mobileDescription || feat.description}</p>
                {feat.points && (
                  <div className="feature-points-list">
                    {feat.points.map((point, ptIdx) => (
                      <div key={ptIdx} className="feature-point-item">
                        <div className="feature-point-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="feature-point-text">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
