const express = require('express');
const cors = require('cors');
const {PORT }= require('../config');
const fileUpload = require('express-fileupload');

class Server {
    constructor(){
        this.app = express();
        this.Port = PORT;
        this.conciones = '/canciones';
        this.concioneSubir = '/';

        this.middlewares();
        this.rutas();
    }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }   
    rutas(){
      
        this.app.use(this.concioneSubir,require('../routes/subirCanciones.routes'))
        this.app.use(this.conciones,require('../routes/canciones.routes.js'))

    }
    listen(){
        this.app.listen(this.Port,()=>{
            console.log(`servidor corriendo en el puerto ${this.Port}`)
        })
    }

}
module.exports= Server;