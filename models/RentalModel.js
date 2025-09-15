import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    inquilino: String,
    propiedad: String,
    inicioDeContrato: String,
    finDeContrato: String,
    estado: String,
});

const Rental = mongoose.model('Rental', esquema);
export default Rental;