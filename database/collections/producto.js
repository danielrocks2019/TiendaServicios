const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var productoSchema = new Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente"},
  nombre : String,
  nit : String,
  propietario : String,
  calle : String,
  cantidad : Number,
  lat : String,
  lon : String,
  Fecha_Registro: {
    type: Date, default: Date.now
  },
  fotolugar : String,
  precio : Number,
  descripcion : String
});
var producto = mongoose.model("Producto", productoSchema);
module.exports = producto;
