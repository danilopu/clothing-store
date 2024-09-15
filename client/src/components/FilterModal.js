import React, { useState } from 'react';
import '../styles/Modal.css';

function FilterModal({ onClose, onApplyFilters, initialFilters }) {
  const [priceRange, setPriceRange] = useState(initialFilters.priceRange || [0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState(initialFilters.brands || []);

  const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D']; // Replace with actual brands

  const handleApply = () => {
    onApplyFilters({ priceRange, brands: selectedBrands });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Filter Products</h2>
        <div className="modal-section">
          <h3>Price Range</h3>
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
            <div>
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
        </div>
        <div className="modal-section">
          <h3>Brands</h3>
          <div className="brand-options">
            {brands.map((brand) => (
              <label key={brand} className="brand-option">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => {
                    setSelectedBrands(
                      selectedBrands.includes(brand)
                        ? selectedBrands.filter((b) => b !== brand)
                        : [...selectedBrands, brand]
                    );
                  }}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>
        <button className="modal-apply" onClick={handleApply}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default FilterModal;