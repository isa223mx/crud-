import { Request, Response } from 'express';
import { pool } from '../model/dbproductos'; // Importar la conexión

// Obtener todos los productos
export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const [results] = await pool.query('SELECT * FROM productos');
    res.json(results);
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).send('Error en la consulta');
  }
};

// Crear un nuevo producto
export const crear = async (req: Request, res: Response): Promise<void> => {
  const { descripcion, precio } = req.body;

  if (!descripcion || !precio) {
    res.status(400).send('Faltan datos requeridos: descripcion y precio');
    return;
  }

  try {
    const [result] = await pool.query('INSERT INTO productos (descripcion, precio) VALUES (?, ?)', [descripcion, precio]);
    res.status(201).json({ message: 'Producto creado', id: (result as any).insertId });
  } catch (err) {
    console.error('Error al insertar el producto:', err);
    res.status(500).send('Error al insertar el producto');
  }
};

// Actualizar un producto
export const actualizar = async (req: Request, res: Response): Promise<void> => {
  const { id, descripcion, precio } = req.body;

  if (!id || !descripcion || !precio) {
    res.status(400).send('Faltan datos requeridos: id, descripcion y precio');
    return;
  }

  try {
    const [result] = await pool.query('UPDATE productos SET descripcion = ?, precio = ? WHERE id = ?', [descripcion, precio, id]);
    if ((result as any).affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.json({ message: 'Producto actualizado' });
    }
  } catch (err) {
    console.error('Error al actualizar el producto:', err);
    res.status(500).send('Error al actualizar el producto');
  }
};

// Borrar un producto
export const borrar = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body;

  if (!id) {
    res.status(400).send('Falta el id del producto');
    return;
  }

  try {
    const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    if ((result as any).affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.json({ message: 'Producto eliminado' });
    }
  } catch (err) {
    console.error('Error al eliminar el producto:', err);
    res.status(500).send('Error al eliminar el producto');
  }
};