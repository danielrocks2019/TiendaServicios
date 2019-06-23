const mongoose = require("../connect");
var mon = require('mongoose');
 var Schema = mon.Schema;
var imgSchema = new Schema({
  name : String,
  idProducto: String,
  physicalpath : String,
  relativepath : String
});
var img = mongoose.model("Img", imgSchema);
module.exports = img;
