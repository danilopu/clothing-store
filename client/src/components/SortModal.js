import React from 'react';
import '../styles/Modal.css';

function SortModal({ sortOption, onSortChange, onClose }) {
  const sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Sort Products</h2>
        <div className="modal-options">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className={`modal-option ${sortOption === option.value ? 'active' : ''}`}
              onClick={() => {
                onSortChange(option.value);
                onClose();
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SortModal;