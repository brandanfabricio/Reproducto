
const path  = require('path');
const DB_PATH = path.join(__dirname + '/../database/datos.json')
let db = require(DB_PATH);
const fs = require('fs');
const {response} = require('express');


class SubirController{
    constructor(){}



    async subir(req,res=response){

   
        if (!req.files || Object.keys(req.files).length === 0) {
          res.status(400).json({msg:'no hya archivos en la peticion'});
          return;
        }
           
        if (!req.files.archivo ) {
          res.status(400).json({msg:'no hya archivos en la peticion'});
          return;
        }
      
      
        const {archivo} = req.files
        const nombreCortado = archivo.name.split('.');
        const extencion = nombreCortado[nombreCortado.length - 1]
        const extPermitida = ['mp3']
        if(!extPermitida.includes(extencion)){
            return res.status(400).json({ msj:"La extencion no es prmitida"})
        }
      
         const uploadPath = path.join( __dirname, '/../canciones/',archivo.name)
      
        archivo.mv(uploadPath, (err)=> {
          if (err) {
            return res.status(500).send(err);
          }
      
         
          
          let Cancioned = db
           Cancioned.push({nombre:`${archivo.name}`})
           fs.writeFileSync(DB_PATH,JSON.stringify(db))

      
        }); 
         return res.sendFile(path.join(__dirname , '/../../public/index.html'))

          
          
         
        
          }   


}
module.exports = new SubirController()