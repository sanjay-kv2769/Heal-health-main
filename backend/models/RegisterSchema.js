const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  login_id: { type: Schema.Types.ObjectId, ref: 'login_tb', required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  image: { type: String, require: true },
});

var Registerdata = mongoose.model('register_tb', RegisterSchema); 
module.exports = Registerdata;
