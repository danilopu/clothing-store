// HomePage.jsx

import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../styles/HomePage.css"
import React, { useState, useEffect } from "react";
import { loadProductData } from '../utils/dataLoader';

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-prev-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

const HomePage = () => {
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
    autoplaySpeed: 3000,
    arrows: false,
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
        <Slider {...settings}>
          <div className="hero-slide">
            <div className="hero-image" style={{backgroundImage: 'url("/images/faktory_studios_stock_carousel.jpg")'}}></div>
            <div className="hero-content">
              <h1>Faktory Studios</h1>
              <p>Creative and dynamic production services in a cutting-edge environment</p>
              <a href="/services" className="cta-button">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="hero-slide">
            <div className="hero-image" style={{backgroundImage: 'url("/images/faktory_studios_stock.jpg")'}}></div>
            <div className="hero-content">
              <h1>Our Shop</h1>
              <p>Check out the latest gear, music equipment, and accessories</p>
              <a href="/shop" className="cta-button">
                Visit the Shop
              </a>
            </div>
          </div>
          <div className="hero-slide">
            <div className="hero-image" style={{backgroundImage: 'url("/images/faktory_studios_stock_carousel_1.jpg")'}}></div>
            <div className="hero-content">
              <h1>Studio Space</h1>
              <p>Rent our fully equipped studio for your next recording session</p>
              <a href="/studio" className="cta-button">
                Book Studio Space
              </a>
            </div>
          </div>
        </Slider>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
          FAKTORY STUDIOS IS THE ONE-STOP ENTERPRISE WHERE ONE CAN DISCOVER THAT THE PRODUCTION PROCESS WAS NEVER AS ENJOYABLE AS IT IS NOW - THE DESIGN, SOURCING, MANUFACTURING AND SHIPPING AS FOUR PHASES WE TAKE CARE OF THE FULL PROCESS, LETTING THE CLIENT FOCUS ON OTHER PARTS OF A FASHION BUSINESS. WITH THE LOWEST MINIMUM QUANTITIES, ONE CAN FIND ON THE MARKET, WE OFFER OUR CLIENTS AN ABILITY TO REACT QUICKLY ON THE MARKET NEEDS OR TRYING NEW PRODUCT STYLES, WITHOUT RISKING ENDING UP WITH TOO MUCH LEFT-OVER STOCK.
          </p>
        </div>
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
    <section className="services">
    <h2>Our Services</h2>
    <div className="service-cards">
        <Link to="/services#music-production" className="card">
        <h3>CMT</h3>
        <p>Cut, make and trim.</p>
        </Link>
        <Link to="/services#studio-rental" className="card">
        <h3>FPS</h3>
        <p>Full package solution.</p>
        </Link>
        <Link to="/services#media-creation" className="card">
        <h3>Pattern making and grading</h3>
        <p>Custom pattern making and grading..</p>
        </Link>
        <Link to="/services#equipment-rental" className="card">
        <h3>Fabric and trim sourcing</h3>
        <p>Fabric and trim sourcing.</p>
        </Link>
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
        </div>
        ))}
    </Slider>
    </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          Ready to bring your project to life? <a href="/contact">Contact us</a> today!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
