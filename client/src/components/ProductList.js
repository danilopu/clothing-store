import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, viewMode, addToFavorites, addToCart, favorites, cartItems }) {
  return (
    <div className={viewMode === 'grid' ? 'product-grid' : 'product-list'}>
      {products.map((product) => (
        <ProductItem 
          key={product.name} 
          product={product} 
          viewMode={viewMode}
          addToFavorites={addToFavorites}
          addToCart={addToCart}
          isFavorite={favorites.some(fav => fav.name === product.name)}
          isInCart={cartItems.some(item => item.name === product.name)}
        />
      ))}
    </div>
  );
}

export default ProductList;