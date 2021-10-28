const{Router} = require('express');
const subirControllers = require('../controllers/subir.controllers');
const router = Router();









router.post('/',subirControllers.subir)


module.exports=router;