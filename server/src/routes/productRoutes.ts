import express, { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { getProducts, addProduct, removeProduct } from '../controllers/productController';

const router: Router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, path.join(__dirname, '..', '..', 'public', 'images'));
  },
  filename: (req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/products', getProducts);
router.post('/products', upload.array('images', 5), addProduct);
router.delete('/products/:id', removeProduct as express.RequestHandler);

export default router;
