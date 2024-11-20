const { connect } = require('../helpers/dbConnect');
const { softwares } = require('./queriesModel');


//Obtener una lista de softwares
const getSoftwares = async () => {
    const result = await connect(softwares.getSoftwares);
    return result;
  };


//Obtener una lista de softwares por texto y/o tags
const getSoftwaresBySearch = async (searchParams) => {
    const { search, tags, limit = 10 } = searchParams

    //Seteo de valores null por defecto en caso de no ser necesarios en la búsqueda
    let searchValue = null;
    let tagsValue = null;

    //Comprobación de entrada de search y tags para asignarlos en lugar del null
    if (search) {
        searchValue = search; 
    }
    if (tags) {
        tagsValue = tags; 
    }

    try {
        const result = await connect(softwares.getSoftwareBySearch, [
            searchValue, 
            tagsValue,   
            limit
        ]);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


//Obtener un software por su ID
const getSoftwareById = async (software_id) => {
    try {
        const result = await connect(softwares.getSoftwareById, [software_id]);
        return result[0]
    } catch (error) {
        console.error(error);
        throw error;
    }
};

 
//Crear un nuevo software
const createSoftware = async (newSoftware) => {
    // Extraer las propiedades de newSoftware
    const { title, description_short, logo, category, tags } = newSoftware;
    
    try {
        const respuesta = await connect(softwares.createSoftware, [title, description_short, logo, category, tags]);
        return respuesta;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


module.exports = {
    getSoftwares,
    getSoftwaresBySearch,
    getSoftwareById,
    createSoftware
};