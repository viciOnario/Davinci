# 🏠 API de Rentas

Esta API permite gestionar **propiedades, rentas, reseñas y usuarios** utilizando **Node.js, Express, MongoDB y Mongoose**.  

## 🚀 Tecnologías

- **Node.js** + **Express** → Framework backend.  
- **MongoDB** → Base de datos NoSQL.  
- **Mongoose** → ODM para modelar esquemas.  
- **REST API** → Arquitectura para comunicación entre cliente y servidor.  

---

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/viciOnario/Davinci.git

# Entrar en la carpeta
cd api-rentas

# Instalar dependencias
npm install

# Levantar el servidor
npm start
```

El servidor se ejecutará por defecto en:  
👉 `http://localhost:3000`

---

## 📂 Modelos en Mongoose

### 🏢 Propiedad
```js
const mongoose = require("mongoose");

const PropiedadSchema = new mongoose.Schema({
  titulo: { type: String },
  descripcion: { type: String },
  direccion: { type: String },
  precio: { type: String },
  dueño: { type: String },
  inmobiliaria: { type: String }
});

module.exports = mongoose.model("Propiedad", PropiedadSchema);
```

### 📑 Rental
```js
const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  inquilino: { type: String},
  propiedad: { type: String},
  inicioDeContrato: { type: String},
  finDeContrato: { type: String},
  estado: { type: String}
});

module.exports = mongoose.model("Rental", RentalSchema);
```

### ⭐ Review
```js
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  autor: { type: String},
  propiedad: { type: String},
  propietario: { type: String},
  rating: { type: String},
  comentario: { type: String, }
});

module.exports = mongoose.model("Review", ReviewSchema);
```

### 👤 Usuario
```js
const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String },
  email: { type: String },
  clave: { type: String },
  tel: { type: String }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
```

---

## 📌 Endpoints

### 🔹 Propiedades
- `GET /propiedades` → Lista todas las propiedades.  
- `POST /propiedades` → Crea una propiedad.  
- `GET /propiedades/:id` → Obtiene una propiedad por ID.  
- `PUT /propiedades/:id` → Actualiza una propiedad.  
- `DELETE /propiedades/:id` → Elimina una propiedad.  

### 🔹 Rentas
- `GET /rentas` → Lista todas las rentas.  
- `POST /rentas` → Crea una renta.  
- `GET /rentas/:id` → Obtiene una renta por ID.  
- `PUT /rentas/:id` → Actualiza una renta.  
- `DELETE /rentas/:id` → Elimina una renta.  

### 🔹 Reseñas
- `GET /reviews` → Lista todas las reseñas.  
- `POST /reviews` → Crea una reseña.  
- `GET /reviews/:id` → Obtiene una reseña por ID.  
- `PUT /reviews/:id` → Actualiza una reseña.  
- `DELETE /reviews/:id` → Elimina una reseña.  

### 🔹 Usuarios
- `GET /usuarios` → Lista todos los usuarios.  
- `POST /usuarios` → Crea un usuario.  
- `GET /usuarios/:id` → Obtiene un usuario por ID.  
- `PUT /usuarios/:id` → Actualiza un usuario.  
- `DELETE /usuarios/:id` → Elimina un usuario.  

---

## 🔒 Seguridad

- Se recomienda **encriptar la clave de usuario** con `bcrypt`.  
- Implementar **JWT (JSON Web Tokens)** para autenticación en endpoints privados.  

---

## 📜 Licencia

Este proyecto es de uso libre para fines educativos y de práctica.  


Nombre: Juan Pedro
Apellido: Jane Linares
Docente: Jonathan Cruz
Comision: dwt4ap
