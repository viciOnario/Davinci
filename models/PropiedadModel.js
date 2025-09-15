import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    titulo: String,
    descripcion: String,
    direccion: String,
    precio: String,
    dueño: String,
    inmobiliaria: String,
});

const Propiedad = mongoose.model('Propiedad', esquema);
export default Propiedad;