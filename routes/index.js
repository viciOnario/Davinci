import usuarioRuta from './UserRouter.js';
import propiedadRuta from './PropiedadRouter.js';
import rentalRuta from './RentalRouter.js';
import reviewRuta from './ReviewRouter.js';


const routerAPI = ( app ) =>{
    app.use('/api/usuarios', usuarioRuta);
    app.use('/api/propiedades', propiedadRuta);
    app.use('/api/rentals', rentalRuta);
    app.use('/api/reviews', reviewRuta);
}
export default routerAPI;
