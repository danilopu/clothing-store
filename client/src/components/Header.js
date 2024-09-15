import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiHeart, FiUser, FiMail } from 'react-icons/fi';
import '../styles/Header.css';

function Header({ cartItemCount }) {
  return (
    <header>
      <div className="header-content">
        <div className="left-section">
          <Link to="/" className="logo-container">
            <img src="/images/faktory_logo.jpg" alt="Faktory Studios" className="store-logo" />
          </Link>
        </div>
        <div className="right-section">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li> {/* Add this line */}
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </nav>
<div className="header-icons">
  <Link to="/favorites" className="icon-link">
    <FiHeart />
  </Link>
  <Link to="/cart" className="icon-link">
    <FiShoppingBag />
    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
  </Link>
  <Link to="/contact" className="icon-link">
    <FiMail />
  </Link>
  <Link to="/account" className="icon-link">
    <FiUser />
  </Link>
</div>        </div>
      </div>
    </header>
  );
}

export default Header;