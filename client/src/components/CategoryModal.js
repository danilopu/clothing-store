import React from 'react';
import '../styles/Modal.css';

function CategoryModal({ categories, selectedCategory, onCategoryChange, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Select Category</h2>
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
