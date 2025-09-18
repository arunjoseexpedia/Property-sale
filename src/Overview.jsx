import React from 'react';
import Graph from './Graph';

const Overview = ({ resultsCount, totalCount, askingPrice, medianPrice, graphData }) => {
  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>
        Showing results from <strong>{resultsCount} properties</strong> based on <strong>{totalCount} results</strong> in the current map view
      </p>
      <div className="prices">
        <div className="price-item">
          <span className="label">Asking Price</span>
          <span className="value">${askingPrice}</span>
        </div>
        <div className="price-item">
          <span className="label">Median Price</span>
          <span className="value">${medianPrice}</span>
        </div>
      </div>
      <Graph data={graphData} />
    </div>
  );
};

export default Overview;
