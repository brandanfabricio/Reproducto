const{Router} = require('express');
const CancionesController = require('../controllers/canciones.controllers');
const router = Router();


router.get('/',CancionesController.get)
router.get('/:nombre',CancionesController.cancion)


module.exports=router;