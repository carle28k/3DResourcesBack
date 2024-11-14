const express = require (`express`);
const { getSoftwareController, createSoftwareController } = require("../controllers/SoftwareControllers");
const router = express.Router()





//Leer softwares: GET
router.get('/softwares', getSoftwareController);

//Crear un nuevo software
router.post('/softwares/create', createSoftwareController);



module.exports = router;