import Rental from "../models/RentalModel.js";

const crearRental = async ( request, response) => {
    const body = request.body;
    const nuevo = new Rental( body );
    const data = await nuevo.save();

    response.json( data);
}

const listarRentals = async ( request, response ) => {
    const rentals = await Rental.find();
    response.json({ data: rentals });
}

const getRentalById = async ( request, response ) => {
    const id = request.params.id;
    const rental = await Rental.findById(id);
    if(rental){
        response.status(200).json({ data: rental });
    } else {
        response.status(404).json({ msg: 'Rental no Encontrado' });
    }
}

const deleteRentalById = async ( request, response ) => {
    const id = request.params.id;
    const rental = await Rental.findByIdAndDelete(id);
    if(rental){
        response.status(200).json({ data: rental });
    } else {
        response.status(404).json({ msg: 'Rental no Encontrado' });
    }
}

const updeteRentalById = async ( request, response ) => {
    const id = request.params.id;
    const body = request.body;
    const rental = await Rental.findByIdAndUpdate(id, body);
    if(rental){
        response.status(200).json({ data: rental });
    } else {
        response.status(404).json({ msg: 'Rental no Encontrado' });
    }
}

export { crearRental, listarRentals, getRentalById, deleteRentalById, updeteRentalById };