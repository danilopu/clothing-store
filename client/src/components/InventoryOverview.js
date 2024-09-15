import React, { useState } from 'react';
import InventoryCategoryModal from './InventoryCategory';

function InventoryOverview({ inventory, filter, setFilter }) {
  const [categories, setCategories] = useState(['all', 'tops', 'bottoms', 'footwear']);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredInventory = filter === 'all' 
    ? inventory 
    : inventory.filter(item => item.category.toLowerCase() === filter);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter(cat => cat !== categoryToRemove));
    if (filter === categoryToRemove) {
      setFilter('all');
    }
  };

  return (
    <div className="inventory-overview">
      <div className="inventory-header">
        <div className="inventory-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              className={filter === cat ? 'active' : ''}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <button className="add-category-btn" onClick={() => setIsModalOpen(true)}>
          +
        </button>
      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <InventoryCategoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        onAddCategory={handleAddCategory}
        onRemoveCategory={handleRemoveCategory}
      />
    </div>
  );
}

export default InventoryOverview;