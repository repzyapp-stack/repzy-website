import React, { useState, useEffect, useRef } from 'react';

const featureData = [
  {
    title: "Fast & Frictionless Logging",
    description: "Effortless set tracking, automatic rest timers, and built-in exercise guides to keep your gym flow uninterrupted.",
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
    title: "Clear & Actionable Insights",
    description: "From AI performance scores to recovery and macro tracking, get complete visual clarity on your strength and transformation.",
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
  }
];

const FadeIn = ({ children, className = "", delayClass = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-fade ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">

        <FadeIn className="features-header">
          <h2>Packed with features to level up your training</h2>
          <p>Everything you need to track your performance, understand your progress, and improve consistently, so every workout moves you closer to your goals.</p>
        </FadeIn>

        <div className="features-stack">
          {featureData.map((feat, index) => (
            <FadeIn key={index} className="feature-row">
              <div className="feature-mockup">
                <div className="phone-mockup image-based-mockup">
                  <img src={`${import.meta.env.BASE_URL}iphone-frame.png`} className="mockup-frame" alt="Phone Frame" />
                  <img src={feat.image} className="mockup-screen" alt={feat.title} />
                </div>
              </div>

              <div className="feature-text">
                <h3 style={{ whiteSpace: 'nowrap' }}>{feat.title}</h3>
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
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
