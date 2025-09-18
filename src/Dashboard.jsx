import React, { useState } from 'react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('results');

  const cards = [
    {
      id: 1,
      title: 'Walmart Neighborhood Market',
      address: '2301 W Sample Rd, Pompano Beach, FL 33073',
      price: '$5,000,000',
      image: 'https://images.crexi.com/assets/2069198/d5b38a91aade435f92f2b4f3f74faee8_716x444.jpg',
    },
    {
      id: 2,
      title: 'Aldi | New 20-YR GL',
      address: '1630 Plant Ave, Waycross, GA 31501',
      price: '$10,327,783',
      image: 'https://images.crexi.com/assets/680605/f7a2ab02f4c349779790d3f5a6de705d_716x444.jpg',
    },
    {
      id: 3,
      title: 'Tractor Supply Company',
      address: '400 US-59, Edna, TX 77957',
      price: '$4,253,310',
      image: 'https://images.crexi.com/assets/1754185/3b63a26af8be435bb18016922ffee20e_716x444.jpg',
    },
    {
      id: 4,
      title: 'Long Term TX Tractor Supply',
      address: '1460 US-183, Goliad, TX 77963',
      price: '$5,475,000',
      image: 'https://images.crexi.com/assets/2097706/5dbae0eeda8441a79425bb995547a199_716x444.jpg',
    },
    {
      id: 5,
      title: 'Tractor Supply | Recent 10-Yr Extension',
      address: '414 E Pine St, Deming, NM 88030',
      price: '$2,272,000',
      image: 'https://images.crexi.com/assets/1978062/0dc850e804d14aa3a9042b23c0ccb7e1_716x444.jpg',
    },
    {
      id: 6,
      title: 'Falcon Gateway',
      address: '4425 E McKellips Rd, Mesa, AZ 85215',
      price: '$16,500,000',
      image: 'https://images.crexi.com/assets/1951859/b6ac7f59670d41a1a3612e8d9d33e7b9_716x444.jpg',
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
