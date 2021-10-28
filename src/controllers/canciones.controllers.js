const path  = require('path');
const DB_PATH = path.join(__dirname + '/../database/datos.json')
let db = require(DB_PATH);
const mediaserver = require('mediaserver')
const fs = require('fs')




class CancionesController{
    constructor(){}

    async get(req,res){
        return res.send(db)
    }

    async cancion(req,res){
        const cancion = path.join(__dirname , '/../canciones/' , req.params.nombre) ;
    
            mediaserver.pipe(req,res,cancion)
    }

    
}




module.exports = new CancionesController();