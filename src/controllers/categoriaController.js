const db = require('../config/db');

// Listar todas las categorías
const listarCategorias = (req, res) => {
    db.query('SELECT * FROM categorias', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al listar categorías' });
        res.json(results);
    });
};

// Crear una nueva categoría
const crearCategoria = (req, res) => {
    const { nombre } = req.body;
    db.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear categoría' });
        res.status(201).json({ mensaje: 'Categoría creada', id: result.insertId });
    });
};

module.exports = { listarCategorias, crearCategoria };