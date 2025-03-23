import { Request, Response } from 'express';
import mysql, { Pool } from 'mysql2/promise';
import { createConnection } from 'mysql2';

// Crear un pool de conexiones
export const pool: Pool = mysql.createPool({
  host: '172.26.95.116', // Cambia esto si tu base de datos no está en localhost
  port: 3306,
  user: 'admin', // Reemplaza con tu usuario de MySQL
  password: 'CarlosDB!2025', // Reemplaza con tu contraseña de MySQL
  database: 'usuarios' // Reemplaza con el nombre de tu base de datos
});
