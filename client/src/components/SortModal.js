import React from 'react';
import { FiX } from 'react-icons/fi';
import '../styles/Modal.css';

function SortModal({ onClose, sortOption, onSortChange }) {
  const sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FiX />
        </button>
        <h2>Sort Products</h2>
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