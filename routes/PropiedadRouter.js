import express from 'express';
import { 
        crearPropiedad, 
        listarPropiedades, 
        getPropiedadById,
        deletePropiedadById,
        updetePropiedadById 
    } from '../controllers/PropiedadController.js';
const router = express.Router();

// Creamos las rutas
router.get('/', listarPropiedades);
router.get('/:id', getPropiedadById);
router.delete('/:id', deletePropiedadById);
router.put('/:id', updetePropiedadById);
router.post('/', crearPropiedad);

export default router;