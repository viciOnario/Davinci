import express from 'express';
import { 
        crearRental, 
        listarRentals, 
        getRentalById,
        deleteRentalById,
        updeteRentalById 
    } from '../controllers/RentalController.js';
const router = express.Router();

// Creamos las rutas
router.get('/', listarRentals);
router.get('/:id', getRentalById);
router.delete('/:id', deleteRentalById);
router.put('/:id', updeteRentalById);
router.post('/', crearRental);

export default router;