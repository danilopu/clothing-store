import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Favorites.css';

function Favorites({ favorites, addToCart, toggleFavorite }) {
  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="empty-favorites">You haven't added any favorites yet.</p>
      ) : (
        <ProductList
          products={favorites}
          viewMode="grid"
          addToFavorites={toggleFavorite}
          addToCart={addToCart}
          favorites={favorites}
          cartItems={[]}
        />
      )}
    </div>
  );
}

export default Favorites;