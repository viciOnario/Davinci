import express from 'express';
import { 
        crearReview, 
        listarReviews, 
        getReviewById,
        deleteReviewById,
        updeteReviewById 
    } from '../controllers/ReviewController.js';
const router = express.Router();

// Creamos las rutas
router.get('/', listarReviews);
router.get('/:id', getReviewById);
router.delete('/:id', deleteReviewById);
router.put('/:id', updeteReviewById);
router.post('/', crearReview);

export default router;