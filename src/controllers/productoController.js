const db = require('../config/db');

// 1. Obtener todos los productos (GET)
const listarProductos = (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al consultar la base de datos' });
        }
        res.json(results);
    });
};

// 2. Crear un nuevo producto (POST)
const crearProducto = (req, res) => {
    const { nombre, categoria, precio, cantidad_stock } = req.body;
    const query = 'INSERT INTO productos (nombre, categoria, precio, cantidad_stock) VALUES (?, ?, ?, ?)';
    
    db.query(query, [nombre, categoria, precio, cantidad_stock], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al insertar el producto' });
        }
        res.status(201).json({ 
            mensaje: 'Producto agregado con éxito', 
            id: result.insertId 
        });
    });
};

// 3. Actualizar un producto (PUT)
const actualizarProducto = (req, res) => {
    const { id } = req.params;
    const { nombre, categoria, precio, cantidad_stock } = req.body;
    const query = 'UPDATE productos SET nombre = ?, categoria = ?, precio = ?, cantidad_stock = ? WHERE id = ?';

    db.query(query, [nombre, categoria, precio, cantidad_stock, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el producto' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto actualizado con éxito' });
    });
};

// 4. Eliminar un producto (DELETE)
const eliminarProducto = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM productos WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar el producto' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json({ mensaje: `Producto con ID ${id} eliminado correctamente` });
    });
};

// Exportamos todas las funciones
module.exports = { 
    listarProductos, 
    crearProducto,
    actualizarProducto,
    eliminarProducto 
};