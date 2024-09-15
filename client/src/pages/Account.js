import React, { useState } from 'react';
import AddProduct from '../components/AddProduct';
import InventoryOverview from '../components/InventoryOverview';
import SellingStatistics from '../components/SellingStatistics';
import '../styles/Account.css';

function Account({ isAdmin }) {
  const [inventoryFilter, setInventoryFilter] = useState('all');

  // Mock data for inventory and statistics
  const inventory = [
    { id: 1, name: 'T-Shirt', category: 'Tops', stock: 50 },
    { id: 2, name: 'Jeans', category: 'Bottoms', stock: 30 },
    { id: 3, name: 'Sneakers', category: 'Footwear', stock: 25 },
  ];

  const statistics = {
    totalSales: 15000,
    topSellingProduct: 'T-Shirt',
    averageOrderValue: 75,
  };

  return (
    <div className="account-page">
      {isAdmin && (
        <div className="admin-panel">
          <div className="admin-row">
            <div className="admin-column">
              <AddProduct />
            </div>
            <div className="admin-column">
              <InventoryOverview 
                inventory={inventory}
                filter={inventoryFilter}
                setFilter={setInventoryFilter}
              />
            </div>
          </div>
          <div className="admin-row">
            <div className="admin-full-width">
              <SellingStatistics statistics={statistics} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;