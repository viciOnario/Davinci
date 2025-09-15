import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    autor: String,
    propiedad: String,
    propietario: String,
    rating: String,
    comentario: String,
});

const Review = mongoose.model('Review', esquema);
export default Review;