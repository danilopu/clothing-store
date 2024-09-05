import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductPage({ products, addToCart }) {
  const { productName } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Category: {product.category}</p>
        <p>Available sizes: {product.size.join(', ')}</p>
        <p>Available colors: {product.color.join(', ')}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;