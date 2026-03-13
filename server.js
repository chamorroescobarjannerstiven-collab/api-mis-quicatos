require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/config/db'); 

// IMPORTANTE: Importamos el archivo de rutas elegante
const productoRoutes = require('./src/routes/productoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 1. Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('API de Mis Quicatos funcionando correctamente y organizada');
});

// 2. CONECTAMOS LAS RUTAS (Esto reemplaza los app.get y app.post viejos)
app.use('/api/productos', productoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor elegante corriendo en el puerto ${PORT}`);
});