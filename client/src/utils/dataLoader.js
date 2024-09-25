import axios from 'axios';

export const loadProductData = async () => {
  try {
    const response = await axios.get('/data_compressed.json');
    return response.data.products.map(product => ({
      ...product,
      images: product.images.map(image => `/images/${image}`)
    }));
  } catch (error) {
    console.error('Error loading product data:', error);
    return [];
  }
};