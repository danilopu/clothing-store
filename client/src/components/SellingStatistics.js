import React from 'react';

function SellingStatistics({ statistics }) {
  return (
    <div className="selling-statistics">
      <div className="statistic-item">
        <h3>Total Sales</h3>
        <p>${statistics.totalSales.toLocaleString()}</p>
      </div>
      <div className="statistic-item">
        <h3>Top Selling Product</h3>
        <p>{statistics.topSellingProduct}</p>
      </div>
      <div className="statistic-item">
        <h3>Average Order Value</h3>
        <p>${statistics.averageOrderValue.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default SellingStatistics;