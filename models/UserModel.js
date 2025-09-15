
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Definimos el esquema
const esquema = new Schema({
    nombre: String,
    email: String,
    clave: String,
    tel: String
});

const Usuario = mongoose.model('Usuario', esquema);
export default Usuario;