import Review from "../models/ReviewModel.js";

const crearReview = async ( request, response ) => {
    const body = request.body;
    if( !body.autor || !body.propietario){
        response.status(401).json({'Msg': 'Falta campos obligatorios'});
        return
    }
    const nuevo = new Review( body );
    const data = await nuevo.save();

    response.json( data );
}

const listarReviews = async ( request, response ) => {
    const reviews = await Review.find();
    response.json({ data: reviews });
}

const getReviewById = async ( request, response ) => {
    const id = request.params.id;
    const review = await Review.findById(id);
    if(review){
        response.status(200).json({ data: review });
    } else {
        response.status(404).json({ msg: 'Review no Encontrado' });
    }
}

const deleteReviewById = async ( request, response ) => {
    const id = request.params.id;
    const review = await Review.findByIdAndDelete(id);
    if(review){
        response.status(200).json({ data: review });
    } else {
        response.status(404).json({ msg: 'Review no Encontrado' });
    }
}

const updeteReviewById = async ( request, response ) => {
    const id = request.params.id;
    const body = request.body;
    const review = await Review.findByIdAndUpdate(id, body);
    if(review){
        response.status(200).json({ data: review });
    } else {
        response.status(404).json({ msg: 'Review no Encontrado' });
    }
}

export { crearReview, listarReviews, getReviewById, deleteReviewById, updeteReviewById };
