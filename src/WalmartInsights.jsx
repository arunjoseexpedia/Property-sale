import React, { useState, useEffect } from 'react';
import Overview from './Overview';

const WalmartInsights = () => {
  const [overviewData, setOverviewData] = useState(null);

  useEffect(() => {
    // fetch the data from your API or service
    // get resultsCount, totalCount, askingPrice, medianPrice, and graphData 
    // graphData could be something like:
    // [{ date: '2025-01', price: 200 }, { date: '2025-02', price: 210 }, ...]
  
    // Example:
    setOverviewData({
      resultsCount: 54,
      totalCount: 56,
      askingPrice: '2.9M',
      medianPrice: '217.7M',
      graphData: [
        { date: '2024-01', price: 150 },
        { date: '2024-02', price: 160 },
        { date: '2024-03', price: 170 },
        { date: '2024-04', price: 180 },
        { date: '2024-05', price: 190 },
      ]
    });
  }, []);

  if (!overviewData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Overview
        resultsCount={overviewData.resultsCount}
        totalCount={overviewData.totalCount}
        askingPrice={overviewData.askingPrice}
        medianPrice={overviewData.medianPrice}
        graphData={overviewData.graphData}
      />
      {/* other components */}
    </div>
  );
};

export default WalmartInsights;
