var express = require('express');
const multer = require('multer');
var router = express.Router();
var fs = require('fs');
var _ = require("underscore");

var Img = require("../../../database/collections/img");
var Producto = require("../../../database/collections/../../database/collections/producto");
var Cliente = require("../../../database/collections/../../database/collections/cliente");


/*Producto*/


router.post("/producto", (req, res) => {

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
});

router.get("/producto",  (req, res) => {
  var skip = 0;
  var limit = "";
  if (req.query.skip != null) {
    skip = req.query.skip;
  }

  if (req.query.limit != null) {
    limit = req.query.limit;
  }
  Producto.find({}).skip(skip).limit(limit).exec((err, docs) => {
    if (err) {
      res.status(500).json({
        "msn" : "Error en la db"
      });

      return;
    }
    res.json({
      result : docs
    });
  });
});


module.exports = router;
