import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductPage.css';

function ProductPage({ products, addToCart }) {
  const { productName } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.name === productName);
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
      navigate('/cart');
    } else {
      alert('Please select a size');
    }
  };

  return (
    <div className="product-page">
      <div className="product-images">
        <div className="image-scroller">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - View ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={index === currentImageIndex ? 'active' : ''}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={product.images[currentImageIndex]} alt={product.name} />
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)} USD</p>
        <p className="product-season">{product.season}</p>
        <div className="color-selection">
          <p>COLOUR</p>
          <div className="color-option">
            <span className="color-swatch" style={{ backgroundColor: product.color }}></span>
            <span className="color-name">{(typeof product.color === 'string' ? product.color.toUpperCase() : product.color)}</span>
          </div>
        </div>
        <div className="size-selection">
          <p>EU SIZE</p>
          <div className="size-options">
            {product.size.map((size) => (
              <button
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <a href="#" className="size-guide">SIZE GUIDE</a>
        <button className="add-to-bag" onClick={handleAddToCart}>ADD TO BAG</button>
        <a href="#" className="find-in-store">FIND IN STORE</a>
        <div className="product-info">
          <details>
            <summary>DESCRIPTION</summary>
            <p>{product.description}</p>
          </details>
          <details>
            <summary>DELIVERY & PAYMENT</summary>
            <p>Delivery and payment information goes here.</p>
          </details>
          <details>
            <summary>DETAILS</summary>
            <p>Additional product details go here.</p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;