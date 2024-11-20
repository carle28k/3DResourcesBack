const express = require (`express`);
const { getSoftwareController, createSoftwareController, getSoftwaresBySearchController, getSoftwareByIdController } = require("../controllers/SoftwareControllers");
const router = express.Router()





//Leer softwares: GET
/* router.get('/softwares', getSoftwareController); */
router.get('/softwares', getSoftwaresBySearchController);

//Leer software por ID: GET
router.get('/software/:id', getSoftwareByIdController);

//Crear un nuevo software
router.post('/softwares/create', createSoftwareController);



module.exports = router;