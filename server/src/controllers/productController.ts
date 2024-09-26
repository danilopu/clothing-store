import { Request, Response } from 'express';
import Product from '../models/productModel';

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new product
export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, size, color } = req.body;
    const images = (req.files as Express.Multer.File[])?.map(file => `/images/${file.filename}`) || [];

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      size: size.split(','),
      color: color.split(','),
      images,
      stock: 0
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server Error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

// Remove a product
export const removeProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product removed' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Server Error', error: 'An unknown error occurred' });
    }
  }
};
