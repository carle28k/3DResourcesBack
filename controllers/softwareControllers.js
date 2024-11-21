
const { getSoftwares, getSoftwaresBySearch, getSoftwareById, createSoftware } = require("../models/softwareModel");

/**
 * Crear un nuevo software
 * @async
 * @function createSoftwareController
 * @param {Object} req - Objeto recogido en la solicitud
 * @param {Object} res - Objeto de respuesta enviado al procesar la solicitud
 */
const createSoftwareController = async (req, res) => {
    let {title,description_short,logo,category,tags} = req.body;
    try {
        const result = await createSoftware([title,description_short,logo,category,tags]);
        if (result){
            return res.status(200).json({
                ok: true,
                msg: "Software creado correctamente",
                result
            })
        } else {
            return res.status(400).json({
                ok: false,
                msg: "no hay resultados"
            })
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error al crear software"
        })
    }
};

//Obtener la lista de softwares
const getSoftwareController = async (req, res) => {
    try {
        const result = await getSoftwares();
            if(result) {
                return res.status(200).json({
                    ok: true,
                    msg: "Lista de softwares obtenida",
                    result
                })
            } else {
                return res.status(200).json({
                    ok: false,
                    msg: "error al obtener softwares",
                    result
                })
            }
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al obtener la lista de softwares", error})
    }
};


//Obtener la lista de softwares por texto y/o tags
const getSoftwaresBySearchController = async (req, res) => {
    let { search, tags, limit } = req.query;

    try {

        if (!tags){
            tags= []
        } else{
            tags= tags.split(',')
        }
        /* "tags.split(',')" convierte la cadena recivida en un array para ser interpretado en la consulta SQL */
        const result = await getSoftwaresBySearch({ search, tags, limit });
            if(result) {
                return res.status(200).json({
                    ok: true,
                    msg: "Lista de softwares obtenida",
                    result
                })
            } else {
                return res.status(400).json({
                    ok: false,
                    msg: "error al obtener softwares",
                    result
                })
            }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error al obtener la lista de softwares", error})
    }
};


// Obtener un software por ID
const getSoftwareByIdController = async (req, res) => {
    const { id } = req.params
    try {
        const result = await getSoftwareById(id);
        if(result) {
            return res.status(200).json({
                ok: true,
                msg: "Software por ID obtenido",
                result
            })
        } else {
            return res.status(200).json({
                ok: false,
                msg: "Software no encontrado",
                result
            })
        }
    } catch (error) {
        console.error('Error al obtener software:', error.message);
        return res.status(400).json({
            ok: false,
            msg: 'Error al obtener software',
        });
    }
};


module.exports = {
    createSoftwareController,
    getSoftwareController,
    getSoftwaresBySearchController,
    getSoftwareByIdController
};