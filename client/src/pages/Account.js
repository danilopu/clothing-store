import React, { useState, useEffect } from 'react';
import AddProduct from '../components/AddProduct';
import InventoryOverview from '../components/InventoryOverview';
import SellingStatistics from '../components/SellingStatistics';
import '../styles/Account.css';

function Account({ isAdmin }) {
  const [inventoryFilter, setInventoryFilter] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log('Fetching products...');
      const response = await fetch('/api/products');
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      const text = await response.text();
      console.log('Response text:', text);
      if (response.ok) {
        const data = JSON.parse(text);
        console.log('Parsed data:', data);
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        console.log(`Product ${productId} removed successfully`);
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      } else if (response.status === 404) {
        console.log(`Product ${productId} not found, removing from UI`);
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      } else {
        const errorData = await response.json();
        console.error('Failed to remove product:', errorData);
        alert(`Failed to remove product: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error removing product:', error);
      alert(`Error removing product: ${error.message}`);
    }
  };

  // Mock data for statistics (you can replace this with real data later)
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
              <AddProduct onProductAdded={fetchProducts} />
            </div>
            <div className="admin-column">
              <InventoryOverview 
                inventory={products}
                filter={inventoryFilter}
                setFilter={setInventoryFilter}
                onRemoveProduct={removeProduct}
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