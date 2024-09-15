import React, { useState } from 'react';
import '../styles/InventoryCategoryModal.css';

function InventoryCategoryModal({ isOpen, onClose, categories, onAddCategory, onRemoveCategory }) {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim());
      setNewCategory('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="category-modal-overlay">
      <div className="category-modal">
        <h2>Manage Categories</h2>
        <div className="add-category">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
          />
          <button onClick={handleAddCategory}>Add</button>
        </div>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category}>
              {category}
              {category !== 'all' && (
                <button onClick={() => onRemoveCategory(category)}>Remove</button>
              )}
            </li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InventoryCategoryModal;