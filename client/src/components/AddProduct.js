// import React, { useState } from 'react';
// import '../styles/AddProduct.css';

// function AddProduct() {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     size: [],
//     color: [],
//     images: []
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct(prevProduct => ({
//       ...prevProduct,
//       [name]: name === 'size' || name === 'color' ? value.split(',') : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to backend)
//     console.log('Product submitted:', product);
//     // Reset form
//     setProduct({
//       name: '',
//       description: '',
//       price: '',
//       category: '',
//       size: [],
//       color: [],
//       images: []
//     });
//   };

//   return (
//     <div className="add-product">
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Product Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="category">Category</label>
//           <input
//             type="text"
//             id="category"
//             name="category"
//             value={product.category}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="size">Sizes (comma-separated)</label>
//           <input
//             type="text"
//             id="size"
//             name="size"
//             value={product.size.join(',')}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="color">Colors (comma-separated)</label>
//           <input
//             type="text"
//             id="color"
//             name="color"
//             value={product.color.join(',')}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="images">Image URLs (comma-separated)</label>
//           <input
//             type="text"
//             id="images"
//             name="images"
//             value={product.images.join(',')}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProduct;
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProduct.css';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    size: [],
    color: [],
    images: [],
    stockQuantity: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === 'size' || name === 'color' || name === 'images' 
        ? value.split(',').map(item => item.trim()) 
        : name === 'price' || name === 'stockQuantity' 
          ? value === '' ? '' : parseFloat(value) 
          : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        stockQuantity: parseInt(product.stockQuantity),
        category: product.category,
        sizes: product.size,
        colors: product.color,
        imageUrls: product.images
      };

      console.log('Sending product data:', JSON.stringify(productData, null, 2));

      const response = await axios.post('http://localhost:5224/api/Product', productData);
      console.log('Product added:', response.data);
      // Reset form
      setProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        size: [],
        color: [],
        images: [],
        stockQuantity: 0
      });
    } catch (error) {
      console.error('Error adding product:', error);
      if (error.response) {
        console.error('Response data:', JSON.stringify(error.response.data, null, 2));
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
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
          <label htmlFor="stockQuantity">Stock Quantity</label>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            value={product.stockQuantity}
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