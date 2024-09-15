import React, { useState } from 'react';
import '../styles/AddProduct.css';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    size: [],
    color: [],
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === 'size' || name === 'color' ? value.split(',') : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Product submitted:', product);
    // Reset form
    setProduct({
      name: '',
      description: '',
      price: '',
      category: '',
      size: [],
      color: [],
      images: []
    });
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Sizes (comma-separated)</label>
          <input
            type="text"
            id="size"
            name="size"
            value={product.size.join(',')}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Colors (comma-separated)</label>
          <input
            type="text"
            id="color"
            name="color"
            value={product.color.join(',')}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Image URLs (comma-separated)</label>
          <input
            type="text"
            id="images"
            name="images"
            value={product.images.join(',')}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;