const { connect } = require('../helpers/dbConnect');
const { softwares } = require('./queriesModel');


//Obtener una lista de softwares
const getSoftwares = async () => {
    const result = await connect(softwares.getSoftwares);
    return result;
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
    createSoftware,
};