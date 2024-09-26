import React, { useState } from 'react';
import '../styles/InventoryOverview.css';

function InventoryOverview({ inventory, filter, setFilter, onRemoveProduct }) {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredInventory = filter === 'all' 
    ? inventory 
    : inventory.filter(item => item.category.toLowerCase() === filter);

  const sortedInventory = [...filteredInventory].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'date') {
      return sortOrder === 'asc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  const handleRemoveProduct = (productId) => {
    onRemoveProduct(productId);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="inventory-overview">
      <h2>Inventory Overview</h2>
      <div className="inventory-container">
        <div className="filter-controls">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('shirts')}>Shirts</button>
          <button onClick={() => setFilter('dress')}>Dress</button>
        </div>
        {sortedInventory.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th>Category</th>
                <th onClick={() => handleSort('price')}>
                  Price {sortBy === 'price' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSort('date')}>
                  Date Added {sortBy === 'date' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedInventory.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</td>
                  <td>
                    <button onClick={() => handleRemoveProduct(item._id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default InventoryOverview;