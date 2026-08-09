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
  username: {
    type: String,
    require: true,
    unique: true,
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
  role:{
    type: String,
    enum : ['user', 'admin'],
    default : 'user'
  }
});

const userModal = mongoose.model("auth", userSchema);
module.exports = userModal;

