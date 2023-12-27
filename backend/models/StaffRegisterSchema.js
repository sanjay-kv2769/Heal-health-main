const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffRegisterSchema = new Schema({
  login_id: { type: Schema.Types.ObjectId, ref: 'login_tb', required: true },
  name: { type: String, require: true },
  gender: { type: String, require: true },
  phone: { type: Number, require: true },
  experience: { type: String, require: true },
  email: { type: String, require: true },
  city: { type: String, require: true },
  
});

var Registerdata = mongoose.model('staff_registertb', StaffRegisterSchema); 
module.exports = Registerdata;
