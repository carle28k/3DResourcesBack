
const { getSoftwares, createSoftware } = require("../models/softwareModel");

//Crear un nuevo software
const createSoftwareController = async (req, res) => {
    let newSoftware = req.body;
    try {
        const result = await createSoftware(newSoftware);
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


module.exports = {
    createSoftwareController,
    getSoftwareController,
};