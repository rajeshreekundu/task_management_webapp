const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone:{
   type: String,
   unique: true
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModal = mongoose.model("auth", userSchema);
module.exports = userModal;
