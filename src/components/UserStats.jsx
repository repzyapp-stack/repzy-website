import React from 'react';

const UserStats = () => {
  const stats = [
    { value: "50,000+", label: "Workouts Completed" },
    { value: "10,000+", label: "Active Lifters" },
    { value: "4.9★", label: "App Store Rating" }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-container glass-panel animate-fade-in-up">
          <div className="stats-header">
            <h2>Used by thousands of people</h2>
            <p>From casual gym-goers to competitive athletes, Repzy is the go-to training companion.</p>
          </div>
          <div className="stats-grid-row">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStats;
