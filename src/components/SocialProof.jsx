import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    text: '"Repzy completely changed my home workouts. The AI form tracking is incredible."',
  },
  {
    id: 2,
    name: 'Mike Torres',
    text: '"Finally, an app that actually counts my reps accurately. Plus it looks amazing."',
  },
  {
    id: 3,
    name: 'Emily Chen',
    text: '"I hit my goals 2x faster thanks to the analytics in Repzy. Highly recommend!"',
  }
];

const SocialProof = () => {
  return (
    <section id="testimonials" className="social-proof-section">
      <div className="container">
        <div className="social-proof-header animate-fade-in-up">
          <h2>Used by your favorite fitness influencers 👀</h2>
          <p style={{ marginTop: '1rem' }}>Join the community of dedicated athletes improving every day.</p>
        </div>
        
        <div className="social-proof-grid">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className={`testimonial-card-text animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="testimonial-content">
                <p className="quote">{t.text}</p>
                <div className="author-info">
                   <div className="author-avatar-placeholder"></div>
                   <h3>{t.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
