import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

function ProductItem({ product, viewMode, addToFavorites, addToCart, isFavorite, isInCart }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addToFavorites(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const renderActions = () => (
    <div className="product-actions">
      <button 
        className={`action-button ${isFavorite ? 'active' : ''}`}
        onClick={handleAddToFavorites}
      >
        <FiHeart fill={isFavorite ? 'black' : 'none'} />
      </button>
      <button 
        className={`action-button ${isInCart ? 'active' : ''}`}
        onClick={handleAddToCart}
      >
        <FiShoppingCart fill={isInCart ? 'black' : 'none'} />
      </button>
    </div>
  );

  return (
    <Link 
      to={`/product/${product.name}`} 
      className={`product-item ${viewMode}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img src={product.images[0]} alt={product.name} />
        {(viewMode === 'grid' && (isHovered || isFavorite || isInCart)) && renderActions()}
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
        {viewMode === 'list' && renderActions()}
      </div>
    </Link>
  );
}

export default ProductItem;