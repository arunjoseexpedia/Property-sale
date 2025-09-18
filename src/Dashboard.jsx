import React, { useState } from 'react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('results');
  const [showMap, setShowMap] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Downtown Office Building",
      address: "123 Main St, Los Angeles, CA",
      price: "$2,450,000",
      sqft: "15,000",
      type: "Office",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      cap_rate: "6.5%",
      noi: "$159,250",
      views: 245,
      days_on_market: 23
    },
    {
      id: 2,
      title: "Industrial Warehouse Complex",
      address: "456 Commerce Way, Long Beach, CA",
      price: "$3,200,000",
      sqft: "45,000",
      type: "Industrial",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=300&h=200&fit=crop",
      coordinates: { lat: 33.7701, lng: -118.1937 },
      cap_rate: "7.2%",
      noi: "$230,400",
      views: 182,
      days_on_market: 15
    },
    {
      id: 3,
      title: "Retail Shopping Center",
      address: "789 Shopping Blvd, Beverly Hills, CA",
      price: "$5,750,000",
      sqft: "28,500",
      type: "Retail",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=300&h=200&fit=crop",
      coordinates: { lat: 34.0736, lng: -118.4004 },
      cap_rate: "5.8%",
      noi: "$333,500",
      views: 389,
      days_on_market: 45
    },
    {
      id: 4,
      title: "Multi-Family Apartment Complex",
      address: "321 Residential Ave, Santa Monica, CA",
      price: "$4,100,000",
      sqft: "32,000",
      type: "Multi-Family",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
      coordinates: { lat: 34.0195, lng: -118.4912 },
      cap_rate: "6.1%",
      noi: "$250,100",
      views: 156,
      days_on_market: 8
    },
    {
      id: 5,
      title: "Medical Office Building",
      address: "654 Health Plaza, Pasadena, CA",
      price: "$1,950,000",
      sqft: "12,800",
      type: "Office",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=200&fit=crop",
      coordinates: { lat: 34.1478, lng: -118.1445 },
      cap_rate: "6.8%",
      noi: "$132,600",
      views: 298,
      days_on_market: 32
    }
  ];

  return (
    <div className="dashboard-full">
      <header className="dashboard-header">
        <div className="header-content">
          <img src="/walmartlogo.png" alt="Walmart Logo" className="walmart-logo" />
          <h3 className="header-title">Property Sales Application</h3>
          <div className="header-user">
            <div className="avatar">JD</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-role">admin</div>
            </div>
          </div>
        </div>
      </header>
      <div className="dashboard">
        <div className="search-bar-container">
          <div className="search-bar-wrapper">
            <span className="search-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input
              type="text"
              className="search-bar"
              placeholder="Enter a location or keyword"
            />
          </div>
          <div className="map-toggle-container">
            <span className="map-toggle-label">Show Map</span>
            <label className="switch">
              <input type="checkbox" checked={showMap} onChange={() => setShowMap(!showMap)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="tabs">
          <a
            href="#"
            className={`tab-item${activeTab === 'results' ? ' active' : ''}`}
            onClick={e => { e.preventDefault(); setActiveTab('results'); }}
          >
            Results
          </a>
          <a
            href="#"
            className={`tab-item${activeTab === 'insights' ? ' active' : ''}`}
            onClick={e => { e.preventDefault(); setActiveTab('insights'); }}
          >
            Insights
          </a>
        </div>
        {activeTab === 'results' && (
          <div className="results-grid">
            {cards.map((card) => (
              <div className="result-card" key={card.id}>
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-address">{card.address}</p>
                  <p className="card-price">{card.price}</p>
                  <p className="card-details">
                    <span>SqFt: {card.sqft}</span> | <span>Type: {card.type}</span> | <span>Status: {card.status}</span>
                  </p>
                  <p className="card-details">
                    <span>CAP Rate: {card.cap_rate}</span> | <span>NOI: {card.noi}</span>
                  </p>
                  <p className="card-details">
                    <span>Views: {card.views}</span> | <span>Days on Market: {card.days_on_market}</span>
                  </p>
                  <button className="view-om-button">View OM</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'insights' && (
          <div style={{ minHeight: '300px' }}></div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
