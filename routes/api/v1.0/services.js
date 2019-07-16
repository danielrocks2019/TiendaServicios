var express = require('express');
const multer = require('multer');
var router = express.Router();
var fs = require('fs');
var _ = require("underscore");

var Img = require("../../../database/collections/img");
var Producto = require("../../../database/collections/../../database/collections/producto");
var Cliente = require("../../../database/collections/../../database/collections/cliente");


/*Producto*/


/*router.post("/producto", (req, res) => {

  //Ejemplo de validacion
  var data = req.body;
  data ["registerdate"] = new Date();
  var newproducto = new Producto(data);
  newproducto.save().then((rr) =>{
    res.status(200).json({
      "resp": 200,
      "dato": newproducto,
      "id" : rr._id,
      "msn" :  "Producto agregado con exito"
    });
  });
});*/


const Producto = require('../../../database/collections/productos')
const Img = require('../../../database/collections/img')
const express = require('express')


//esta variables toma el valor de la IP
const HOST = require('../../../database/collections/HOST')

//////////////////////// multer para imagenes
const multer = require('multer');

const fs = require('fs')

const route = express.Router()

// metodos de peticion GET, POTS, PUT, DELETE

route.get('/', (req, res) =>{
    res.send({ menssage:'SERVICIO API-RES TIENDA MOVIL'})
})


var storage = multer.diskStorage({
    destination: "./public/avatars",
    filename: function (req, file, cb) {
      console.log("-------------------------");
      console.log(file);
      cb(null, "IMG_" + Date.now() + ".jpg");
    }
  });
  var upload = multer({
    storage: storage
  }).single("img");;


route.post('/productoimg', (req, res) => {
    //var url = req.url;
    //console.log(url);
    var id = productoid;
    upload(req, res, (err) => {
      if (err) {
        res.status(500).json({
          "msn" : "No se ha podido subir la imagen"
        });
      } else {
        var ruta = req.file.path.substr(6, req.file.path.length);
        console.log(ruta);
        var img = {
          idproducto: id,
          name : req.file.originalname,
          physicalpath: req.file.path,
          relativepath: `${HOST}:7777`
          //////////////////////////////7////////////relativepath: `${HOST}:4030`
                        //  http://192.168.1.5:4030
        };
        var imgData = new Img(img);
        imgData.save().then( (infoimg) => {
          //content-type
          //Update User IMG
          var producto = {
            gallery: new Array()
          }
          Producto.findOne({_id:id}).exec( (err, docs) =>{
        console.log(docs);
        var data = docs.gallery;
        var aux = new  Array();
        if (data.length == 1 && data[0] == "") {
          producto.gallery.push(`${HOST}:7777/api/v1.0/productoimg/` + infoimg._id)

        } else {
          aux.push(`${HOST}:7777/api/v1.0/productoimg/` + infoimg._id);

          data = data.concat(aux);
          producto.gallery = data;
        }
        ////////////////////////////////////////////////////////////////Producto.useFindAndModify({_id : id}, producto, (err, params) => {
        Producto.findOneAndUpdate({_id : id}, producto, (err, params) => {

          //useFindAndModify
            if (err) {
              res.status(500).json({
                "msn" : "error en la actualizacion del usuario"
              });
              return;
            }
            res.status(200).json(
              req.file
            );
            return;
        });
      });
    });
  }
});
});


module.exports = router;
