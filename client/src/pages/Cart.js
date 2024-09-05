import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Bag</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <p>Explore our shop to find amazing products!</p>
          <a href="/shop" className="shop-button">Go to Shop</a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.images[0]} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total: ${total.toFixed(2)}</p>
            <button className="checkout-button">Proceed to Secure Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;