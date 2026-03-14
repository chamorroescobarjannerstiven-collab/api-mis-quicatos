const db = require('../config/db');

// 1. Obtener todos los productos (GET)
const listarProductos = (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al consultar la base de datos' });
        res.json(results);
    });
};

// 2. Crear un nuevo producto (POST) - Con validación
const crearProducto = (req, res) => {
    const { nombre, categoria, precio, cantidad_stock, categoria_id } = req.body;

    // Validación básica: asegura que los campos necesarios vengan
    if (!nombre || !precio || !categoria_id) {
        return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, precio y categoria_id' });
    }

    const query = 'INSERT INTO productos (nombre, categoria, precio, cantidad_stock, categoria_id) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nombre, categoria, precio, cantidad_stock, categoria_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al insertar el producto. Verifica que la categoría exista.' });
        }
        res.status(201).json({ mensaje: 'Producto agregado con éxito', id: result.insertId });
    });
};

// 3. Actualizar un producto (PUT)
const actualizarProducto = (req, res) => {
    const { id } = req.params;
    const { nombre, categoria, precio, cantidad_stock, categoria_id } = req.body;
    
    const query = 'UPDATE productos SET nombre = ?, categoria = ?, precio = ?, cantidad_stock = ?, categoria_id = ? WHERE id = ?';

    db.query(query, [nombre, categoria, precio, cantidad_stock, categoria_id, id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar el producto' });
        if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json({ mensaje: 'Producto actualizado con éxito' });
    });
};

// 4. Eliminar un producto (DELETE)
const eliminarProducto = (req, res) => {
    const { id } = req.params;
    
    db.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar el producto' });
        if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json({ mensaje: `Producto con ID ${id} eliminado correctamente` });
    });
};

module.exports = { 
    listarProductos, 
    crearProducto,
    actualizarProducto,
    eliminarProducto 
};