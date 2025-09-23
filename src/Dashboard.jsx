import React, { useState, useEffect } from 'react';
import LeafletMap from './LeafletMap';
import AddListing from './AddListing';
import { Menu, MenuItem, ListItemIcon, ListItemText, IconButton, Slider, Box, Typography, Rating, Skeleton, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('results');
  const [showMap, setShowMap] = useState(false);
  const [search, setSearch] = useState("");
  const [priceSliderValue, setPriceSliderValue] = useState(100);
  const [user, setUser] = useState({ name: 'John Doe', role: 'admin' });
  const [anchorEl, setAnchorEl] = useState(null);
  const [filteredLocation, setFilteredLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRoleChange = (newRole) => {
    setUser({ ...user, role: newRole });
    if (newRole === 'user' && activeTab === 'add-listing') {
      setActiveTab('results');
    }
    handleClose();
  };

  const handleMapToggle = () => {
    setShowMap(prevShowMap => {
      const newShowMap = !prevShowMap;
      if (!newShowMap) {
        setFilteredLocation(null);
      }
      return newShowMap;
    });
  };

  const handleMapClick = (lat, lng) => {
    setFilteredLocation({ lat, lng });
  };
  const cards = [
    {
      id: 1,
      title: "Tractor Supply Company",
      address: "400 US-59, Los Angeles, CA",
      price: "$2,450,000",
      sqft: "15,000",
      type: "Office",
      status: "For Sale",
      images: [
        "https://images.crexi.com/assets/1754185/3b63a26af8be435bb18016922ffee20e_716x444.jpg",
        "https://images.crexi.com/assets/2097706/117e6067a4bc426283f1b56fd488edda_716x444.jpg"
      ],
      coordinates: { lat: 34.0522, lng: -118.2437 },
      cap_rate: "6.5%",
      noi: "$159,250",
      views: 245,
      days_on_market: 23,
      rating: 4.5
    },
    {
      id: 2,
      title: "Walmart Neighborhood Market",
      address: "456 Commerce Way, Long Beach, CA",
      price: "$3,200,000",
      sqft: "45,000",
      type: "Industrial",
      status: "For Sale",
      images: [
        "https://images.crexi.com/assets/680605/f7a2ab02f4c349779790d3f5a6de705d_716x444.jpg",
        "https://images.crexi.com/assets/681973/6f12e9752e644384aaa7b7e6aafab363_716x444.jpg"
      ],
      coordinates: { lat: 33.7701, lng: -118.1937 },
      cap_rate: "7.2%",
      noi: "$230,400",
      views: 182,
      days_on_market: 15,
      rating: 5
    },
    {
      id: 3,
      title: "Walmart Neighborhood Market",
      address: "789 Shopping Blvd, Beverly Hills, CA",
      price: "$5,750,000",
      sqft: "28,500",
      type: "Retail",
      status: "For Sale",
      images: [
        "https://images.crexi.com/assets/798107/327f6c4be84e45678b42829fcfc3c257_716x444.jpg",
        "https://images.crexi.com/assets/1828916/7d04c11c8ed647a695e2609f5e6e1e08_716x444.jpg"
      ],
      coordinates: { lat: 34.0736, lng: -118.4004 },
      cap_rate: "5.8%",
      noi: "$333,500",
      views: 389,
      days_on_market: 45,
      rating: 4
    },
    {
      id: 4,
      title: "Southern Tier Crossing",
      address: "321 Residential Ave, Santa Monica, CA",
      price: "$4,100,000",
      sqft: "32,000",
      type: "Multi-Family",
      status: "For Sale",
      images: [
        "https://images.crexi.com/assets/681973/6f12e9752e644384aaa7b7e6aafab363_716x444.jpg",
        "https://images.crexi.com/assets/1817988/3671b61d298f48e989d97e0c5dd06835_716x444.jpg"
      ],
      coordinates: { lat: 34.0195, lng: -118.4912 },
      cap_rate: "6.1%",
      noi: "$250,100",
      views: 156,
      days_on_market: 8,
      rating: 3.5
    },
    {
      id: 5,
      title: "Falcon Gateway",
      address: "654 Health Plaza, Pasadena, CA",
      price: "$1,950,000",
      sqft: "12,800",
      type: "Office",
      status: "For Sale",
      images: [
        "https://images.crexi.com/assets/1951859/b6ac7f59670d41a1a3612e8d9d33e7b9_716x444.jpg",
        "https://images.crexi.com/assets/680605/9e0ba1c5201543a18d1d5d32c8dd3d9a_716x444.jpg"
      ],
      coordinates: { lat: 34.1478, lng: -118.1445 },
      cap_rate: "6.8%",
      noi: "$132,600",
      views: 298,
      days_on_market: 32,
      rating: 4
    }
  ];

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/\$|,/g, ''));
  };

  const prices = cards.map(card => parsePrice(card.price));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const filteredCards = cards.filter(card => {
    const cardPrice = parsePrice(card.price);
    
    const sliderMaxPrice = minPrice + ((maxPrice - minPrice) * priceSliderValue) / 100;

    const searchMatch = search.trim() === "" || card.address.toLowerCase().includes(search.toLowerCase());
    const priceMatch = cardPrice <= sliderMaxPrice;

    if (showMap && filteredLocation) {
      const latDiff = Math.abs(card.coordinates.lat - filteredLocation.lat);
      const lngDiff = Math.abs(card.coordinates.lng - filteredLocation.lng);
      // Simple distance check, you might want a more accurate one
      if (latDiff > 0.1 || lngDiff > 0.1) {
        return false;
      }
    }

    return searchMatch && priceMatch;
  });

  const sliderMarks = [
    { value: 0, label: 'Min' },
    { value: 50, label: 'Mid' },
    { value: 100, label: 'Max' },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const SkeletonCard = () => (
    <Paper elevation={3} className="result-card">
      <Skeleton variant="rectangular" height={250} animation="wave" />
      <div className="card-content">
        <Skeleton variant="text" height={32} width="80%" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="text" height={24} width="60%" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="rectangular" height={24} width="120px" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="text" height={28} width="40%" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="text" height={24} width="70%" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="text" height={24} width="65%" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="text" height={24} width="75%" sx={{ mb: 1 }} animation="wave" />
        <Skeleton variant="rectangular" height={36} width="100%" animation="wave" />
      </div>
    </Paper>
  );

  const CardContent = ({ card }) => (
    <Paper 
      elevation={3} 
      className="result-card"
      sx={{
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
          border:'1px solid #0a63cb'
        }
      }}
    >
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
        {card.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${card.title} ${index + 1}`} className="card-image" />
          </div>
        ))}
      </Carousel>
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-address">{card.address}</p>
        <Rating name="read-only" value={card.rating} precision={0.5} readOnly />
        <p className="card-price">{card.price}</p>
        <p className="card-details">
          <span>SqFt: {card.sqft}</span> | <span>Status: {card.status}</span>
        </p>
        <p className="card-details">
          <span>CAP Rate: {card.cap_rate}</span> | <span>NOI: {card.noi}</span>
        </p>
        <p className="card-details">
          <span>Views: {card.views}</span> | <span>Days on Market: {card.days_on_market}</span>
        </p>
        <button className="view-om-button">View OM</button>
      </div>
    </Paper>
  );

  return (
    <div className="dashboard-full">
      <header className="dashboard-header">
        <div className="header-content">
          <img src="./walmartlogo.png" alt="Walmart Logo" className="walmart-logo" />
          <h3 className="header-title">Property Sales Application</h3>
          <div className="header-user">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <div className="avatar">JD</div>
            </IconButton>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.role}</div>
            </div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => handleRoleChange('admin')}
                disabled={user.role === 'admin'}
              >
                <ListItemIcon>
                  <Person fontSize='small' />
                </ListItemIcon>
                <ListItemText>Switch to Admin</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => handleRoleChange('user')}
                disabled={user.role === 'user'}
              >
                <ListItemIcon>
                  <Person fontSize='small' />
                </ListItemIcon>
                <ListItemText>Switch to User</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </header>
      <div className="dashboard">
        <div className="search-bar-container">
          <div className="search-bar-wrapper">
           <input
              type="text"
              className="search-bar"
              placeholder="Enter a location or a keyword"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
             <span className="search-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          </div>
          <Box sx={{ width: 300, padding: '0 20px' }}>
            <Typography id="price-slider" gutterBottom>
              Price Range
            </Typography>
            <Slider
              aria-labelledby="price-slider"
              value={priceSliderValue}
              onChange={(e, newValue) => setPriceSliderValue(newValue)}
              marks={sliderMarks}
              step={10}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => {
                const price = minPrice + ((maxPrice - minPrice) * value) / 100;
                return `$${(price / 1000000).toFixed(1)}M`;
              }}
            />
          </Box>
          <div className="map-toggle-container">
            <span className="map-toggle-label">Show Map</span>
            <label className="switch">
              <input type="checkbox" checked={showMap} onChange={handleMapToggle} />
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
          {user.role === 'admin' && (
            <a
              href="#"
              className={`tab-item${activeTab === 'add-listing' ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); setActiveTab('add-listing'); }}
            >
              Add Listings
            </a>
          )}
        </div>
        {activeTab === 'results' && (
          showMap ? (
            <div className="split-view">
              <div className="results-grid split-grid">
                {loading ? (
                  [...Array(6)].map((_, index) => <SkeletonCard key={`skeleton-${index}`} />)
                ) : (
                  filteredCards.map((card) => <CardContent key={card.id} card={card} />)
                )}
              </div>
              <div className="map-view">
                <LeafletMap onMapClick={handleMapClick} />
              </div>
            </div>
          ) : (
            <div className="results-grid">
              {loading ? (
                [...Array(6)].map((_, index) => <SkeletonCard key={`skeleton-${index}`} />)
              ) : (
                filteredCards.map((card) => <CardContent key={card.id} card={card} />)
              )}
            </div>
          )
        )}
        {activeTab === 'add-listing' && (
          <AddListing />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
