const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var clienteSchema = new Schema({
  nombre : String,
  apellidos : String,
  ci : String,
  telefono : Number,
  email : String,
  password : String,
  Fecha_Registro: {
      type: Date,
      default: Date.now()
  },
  lat : String,
  lon : String,
  tipo : String
});
var cliente = mongoose.model("Cliente", clienteSchema);
module.exports = cliente;
