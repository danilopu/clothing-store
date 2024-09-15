import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import AddProduct from './components/AddProduct';
import ProductPage from './pages/ProductPage';
import { loadProductData } from './utils/dataLoader';
import './styles/Header.css';
import './styles/AddProduct.css';
import './styles/Cart.css';
import './styles/Home.css';
import './styles/Footer.css';
import './styles/Services.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage';
import Services from './pages/Services';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await loadProductData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevItems.filter(item => item.name !== product.name);
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(product.name)) {
        return prevFavorites.filter(name => name !== product.name);
      } else {
        return [...prevFavorites, product.name];
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop/*" element={<Shop cartItems={cartItems} addToCart={addToCart} />} />
          <Route path="/shop/product/:productName" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:productName" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/" element={<HomePage addToCart={addToCart} toggleFavorite={toggleFavorite} favorites={favorites} cartItems={cartItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;