# API Mis Quicatos

Backend profesional desarrollado para la gestión de inventario, implementando una arquitectura por capas (MVC) y operaciones CRUD completas.

## 🚀 Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework web.
- **MySQL**: Base de datos relacional.
- **Cors**: Middleware para habilitar el intercambio de recursos.
- **Dotenv**: Gestión de variables de entorno.

## 🏗️ Estructura del proyecto
- `/src/config`: Configuración de la conexión a la base de datos.
- `/src/controllers`: Lógica de negocio y manejo de peticiones.
- `/src/routes`: Definición de los endpoints de la API.
- `server.js`: Archivo principal de la aplicación.

## 🛠️ Instalación
1. Clona el repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` basado en el `.env.example`.
4. Ejecuta el servidor: `node server.js`

## 📡 Endpoints (CRUD)
- `GET /api/productos` - Listar todos los productos.
- `POST /api/productos` - Crear un nuevo producto.
- `PUT /api/productos/:id` - Actualizar un producto existente.
- `DELETE /api/productos/:id` - Eliminar un producto.