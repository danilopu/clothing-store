import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PhotoCollage.css';

function PhotoCollage({ products }) {
  const chunkSize = 9; // Number of products in each layout
  const chunkedProducts = [];
  
  for (let i = 0; i < products.length; i += chunkSize) {
    chunkedProducts.push(products.slice(i, i + chunkSize));
  }

  return (
    <div className="photo-collage">
      {chunkedProducts.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className={`collage-grid ${chunkIndex % 2 === 0 ? 'grid-3x3' : 'grid-5'}`}>
          {chunk.map((product, index) => (
            <Link to={`/product/${product.name}`} key={product.name} className="collage-item">
              <img src={product.images[0]} alt={product.name} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PhotoCollage;