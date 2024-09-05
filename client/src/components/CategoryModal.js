import React from 'react';
import { FiX } from 'react-icons/fi';
import '../styles/Modal.css';

function CategoryModal({ onClose, categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FiX />
        </button>
        <h2>Select Category</h2>
        <div className="modal-options">
          <button
            className={`modal-option ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => {
              onCategoryChange('');
              onClose();
            }}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`modal-option ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                onCategoryChange(category);
                onClose();
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;