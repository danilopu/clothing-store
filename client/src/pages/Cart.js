import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your shopping bag is empty</p>
          <a href="/shop" className="continue-shopping">Continue shopping</a>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-image">
                  <img src={item.images[0]} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <p className="item-color">Color: {item.color}</p>
                  <p className="item-size">Size: {item.size}</p>
                  <button onClick={() => removeFromCart(index)} className="remove-item">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-button">Proceed to checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;