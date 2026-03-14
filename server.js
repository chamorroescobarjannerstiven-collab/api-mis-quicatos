require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/config/db'); 

// Importamos los archivos de rutas
const productoRoutes = require('./src/routes/productoRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes'); // <--- NUEVA LÍNEA

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 1. Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('API de Mis Quicatos funcionando correctamente y organizada');
});

// 2. CONECTAMOS LAS RUTAS
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes); // <--- NUEVA LÍNEA

app.listen(PORT, () => {
    console.log(`Servidor elegante corriendo en el puerto ${PORT}`);
});