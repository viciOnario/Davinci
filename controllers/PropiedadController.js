import Propiedad from "../models/PropiedadModel.js";

const crearPropiedad = async ( request, response) => {
    const body = request.body;
    if( !body.titulo  || !body.dueño){
        response.status(401).json({'Msg': 'Falta campos obligatorios'});
        return
    }
    const nuevo = new Propiedad( body );
    const data = await nuevo.save();

    response.json( data);
}

const listarPropiedades = async ( request, response ) => {
    const propiedades = await Propiedad.find();
    response.json({ data: propiedades });
}

const getPropiedadById = async ( request, response ) => {
    const id = request.params.id;
    const propiedad = await Propiedad.findById(id);
    if(propiedad){
        response.status(200).json({ data: propiedad });
    } else {
        response.status(404).json({ msg: 'Propiedad no Encontrada' });
    }
}

const deletePropiedadById = async ( request, response ) => {
    const id = request.params.id;
    const propiedad = await Propiedad.findByIdAndDelete(id);
    if(propiedad){
        response.status(200).json({ data: propiedad });
    } else {
        response.status(404).json({ msg: 'Propiedad no Encontrada' });
    }
}

const updetePropiedadById = async ( request, response ) => {
    const id = request.params.id;
    const body = request.body;
    const propiedad = await Propiedad.findByIdAndUpdate(id, body);
    if(propiedad){
        response.status(200).json({ data: propiedad });
    } else {
        response.status(404).json({ msg: 'Propiedad no Encontrada' });
    }
}

export { crearPropiedad, listarPropiedades, getPropiedadById, deletePropiedadById, updetePropiedadById };
