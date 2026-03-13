const express = require('express');
const router = express.Router();

// Importamos TODAS las funciones del controlador
const { 
    listarProductos, 
    crearProducto, 
    actualizarProducto, 
    eliminarProducto 
} = require('../controllers/productoController');

// 1. Obtener todos los productos (GET)
// URL: http://localhost:3000/api/productos
router.get('/', listarProductos);

// 2. Crear un nuevo producto (POST)
// URL: http://localhost:3000/api/productos
router.post('/', crearProducto);

// 3. Actualizar un producto existente (PUT)
// URL: http://localhost:3000/api/productos/:id (ej: /api/productos/1)
router.put('/:id', actualizarProducto);

// 4. Eliminar un producto (DELETE)
// URL: http://localhost:3000/api/productos/:id (ej: /api/productos/1)
router.delete('/:id', eliminarProducto);

module.exports = router;