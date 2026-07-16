import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const WaitlistPage = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const { error: dbError } = await supabase
        .from('Waitlist')
        .insert([{ email }]);

      if (dbError) {
        if (dbError.code === '23505') {
          // Unique constraint violation - already registered
          setSubmitted(true);
        } else {
          throw dbError;
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Error joining waitlist:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="waitlist-page-container">
      <div className="container">
        <div className="waitlist-card glass-panel animate-fade-in-up">
          <div className="waitlist-card-header">
            <span className="waitlist-tag">Get Early Access</span>
            <h2>Join the Repzy Waitlist</h2>
            <p>Be the first to know when we launch and secure exclusive early-bird benefits and features.</p>
          </div>

          {submitted ? (
            <div className="waitlist-page-success animate-fade-in-up">
              <span className="big-success-icon" style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
              <h3>Spot Secured!</h3>
              <p>You're officially on the list. We will send an email to <strong style={{ color: 'var(--primary)' }}>{email}</strong> the exact moment Repzy launches.</p>
              <button onClick={onBack} className="btn btn-primary mt-4" style={{ marginTop: '2rem', width: '100%' }}>
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-page-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="waitlist-page-input"
                  style={{ borderColor: error ? 'red' : undefined }}
                />
              </div>
              {error && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '-0.5rem', marginBottom: '1rem' }}>{error}</p>}
              <button type="submit" disabled={isLoading} className="btn btn-primary waitlist-page-btn" style={{ opacity: isLoading ? 0.7 : 1 }}>
                {isLoading ? 'Securing Spot...' : 'Request Early Access'}
              </button>
              <button type="button" onClick={onBack} disabled={isLoading} className="btn btn-secondary waitlist-page-back-btn">
                Go Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;
