import express from 'express';
import productosRouter from './routers/productos.routers'; // Importar el enrutador

const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Usar el enrutador de productos
app.use('/productos', productosRouter); // Todas las rutas de productos estarán bajo /productos

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});