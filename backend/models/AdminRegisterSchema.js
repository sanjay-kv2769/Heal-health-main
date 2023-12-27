const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminRegisterSchema = new Schema({
  login_id: { type: Schema.Types.ObjectId, ref: 'login_tb', required: true },
  name: { type: String, require: true },
  phone: { type: Number, require: true },
  email: { type: String, require: true },
  admin: { type: String, require: true },
  city: { type: String, require: true },
  
});

var Registerdata = mongoose.model('admin_registertb', AdminRegisterSchema); 
module.exports = Registerdata;
