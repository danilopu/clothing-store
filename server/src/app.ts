import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Create upload directory if it doesn't exist
const uploadDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/store_db';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    if (mongoose.connection.db) {
      console.log(`Database: ${mongoose.connection.db.databaseName}`);
    } else {
      console.log('Database name not available');
    }
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

// Routes
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
