const mongoose = require("./connect");
USERSCHEMA = {
  name:         String,
  lastname:     String,
  address:      String,
  age:          Number,
  nickname:     String,
  password:     String,
  register: Date,
  updateDate:   Date
}
const USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;
