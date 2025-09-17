import React, { useState } from 'react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('results');

  const cards = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    description: `This is card number ${i + 1}.`,
  }));

  return (
    <div className="dashboard-full">
      <header className="dashboard-header">
        <h1>Property Sale Dashboard</h1>
      </header>
      <div className="dashboard">
        
        <div className="tabs">
          <button
            className={activeTab === 'results' ? 'active' : ''}
            onClick={() => setActiveTab('results')}
          >
            Results
          </button>
          {/* Add more tabs here if needed */}
        </div>
        {activeTab === 'results' && (
          <div className="results-grid">
            {cards.map((card, idx) => (
              <div className="result-card" key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
