import { Router } from 'express';
import { getAll,  crear, actualizar , borrar } from '../controllers/productos.controller';

const router = Router();

// Ruta para obtener todos los productos
router.get('/all', getAll);
router.post('/crear', crear);
router.put('/up', actualizar);
router.delete('/del', borrar);
export default router;