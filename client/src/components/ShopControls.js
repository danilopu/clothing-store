import React from 'react';
import { FiFilter, FiList, FiGrid } from 'react-icons/fi';
import { BiSort } from 'react-icons/bi';
import { BsTagsFill } from 'react-icons/bs';
import '../styles/ShopControls.css';

function ShopControls({ viewMode, onFilterClick, onCategoryClick, onSortClick, onViewChange }) {
  return (
    <div className="shop-controls">
      <button className="control-button" onClick={onFilterClick}>
        <FiFilter />
      </button>
      <button className="control-button" onClick={onCategoryClick}>
        <BsTagsFill />
      </button>
      <button className="control-button" onClick={onSortClick}>
        <BiSort />
      </button>
      <button 
        className="control-button"
        onClick={() => onViewChange(viewMode === 'grid' ? 'list' : 'grid')}
      >
        {viewMode === 'grid' ? <FiList /> : <FiGrid />}
      </button>
    </div>
  );
}

export default ShopControls;