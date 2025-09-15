import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerAPI from './routes/index.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const URI_DB = process.env.URI_DB;

// Validamos variables de entorno críticas
if (!URI_DB) {
    console.error('Falta la variable de entorno URI_DB. Define tu cadena de conexión de MongoDB en .env');
    process.exit(1);
}

// Nos conectamos a la DB
mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on('error', () => { console.error('Error de conexión')});
db.once('open', () => { console.log('Conexión con la DB Correcta 👌')});


const app = express();
app.use(  express.json() );

app.use('/', express.static('public'));

app.use(  (request, response, next) => {
    console.log('Hola soy el middleware 👋');
    next();
});

app.get('/', (request, response) => {
    response.send('<h1> API Rental </h1>');
})

routerAPI(app);
app.listen(PORT, () => {
    console.log(`API Rental en el puerto ${PORT}`);
} )