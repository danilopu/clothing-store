import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import "../styles/HomePage.css"
import { useState, useEffect } from "react";
import { loadProductData } from '../utils/dataLoader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      onClick={onClick}
    />
  );
};

const services = [
  { id: 'cmt', title: 'CMT' },
  { id: 'fps', title: 'FPS' },
  { id: 'pattern-making', title: 'PATTERN MAKING AND GRADING' },
  { id: 'fabric-sourcing', title: 'FABRIC AND TRIM SOURCING' },
  { id: 'apparel-development', title: 'APPAREL DEVELOPMENT' },
  { id: 'photography', title: 'PHOTOGRAPHY' },
  { id: 'shipping', title: 'SHIPPING' }
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const HomePage = ({ addToCart, toggleFavorite, favorites, cartItems }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const productsData = await loadProductData();
        setProducts(productsData);
      };
  
      fetchProducts();
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000, // Increased to 5 seconds for better visibility
      arrows: true, // Changed to true to add navigation arrows
      fade: true, // Add fade effect for smoother transition
      beforeChange: (current, next) => console.log(`Changing from slide ${current} to ${next}`),
      afterChange: current => console.log(`Changed to slide ${current}`),
    };

  const shopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-item">
            <img src="/images/faktory_studios_stock_5.jpg" alt="Services" />
            <Link to="/services" className="hero-button">Services</Link>
          </div>
          <div className="hero-item">
            <img src="/images/home_shop.jpg" alt="Shop" />
            <Link to="/shop" className="hero-button">Shop</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <p>
          We are a creative studio dedicated to bringing your ideas to life. Our team of experts specializes in music production, video creation, and innovative merchandise.
        </p>
      </section>

    {/* What we stand for section */}
    {/* <section className="stand-for">
    <div className="stand-for-content">
        <h2>What we stand for</h2>
        <p>    
        <strong>No Minimum Order Requirements:</strong> We cater to projects of all sizes, big or small.<br />
        <strong>Complete In-House Production:</strong> Every step of production is handled with care under one roof.<br />
        <strong>Expert Team:</strong> Our skilled staff ensures top-notch results for every project.<br />
        <strong>Unmatched Quality:</strong> We deliver superior products that meet the highest standards.<br />
        <strong>Ethical Practices:</strong> Committed to responsible and sustainable production methods.
        </p>
    </div>
    </section> */}

    {/* Services Section */}
    <section className="home-services">
      <h2>Our Services</h2>
      <div className="home-services-grid">
        {services.map((service) => (
          <Link key={service.id} to={`/services#${service.id}`} className="home-service-item">
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>

    {/* Shop Section */}
    <section className="shop-preview">
    <h2>Featured Products</h2>
    <Slider {...shopSettings}>
      {products.slice(0, 8).map((product) => (
        <div key={product.name} className="product-card">
          <Link to={`/shop/product/${product.name}`}>
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </Link>
          <div className="product-actions">
            <button 
              className={`action-button ${favorites.includes(product.name) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(product);
              }}
            >
              <FiHeart fill={favorites.includes(product.name) ? 'black' : 'none'} />
            </button>
            <button 
              className={`action-button ${cartItems.some(item => item.name === product.name) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
            >
              <FiShoppingCart fill={cartItems.some(item => item.name === product.name) ? 'black' : 'none'} />
            </button>
          </div>
        </div>
      ))}
    </Slider>
  </section>

      {/* Contact Section */}
      <section className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>
          Ready to bring your project to life? <Link to="/contact">Contact us</Link> today!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
