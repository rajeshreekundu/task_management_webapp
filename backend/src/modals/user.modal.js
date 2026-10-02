const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength:  [3, "Name Must Contain At Least 3 Character!"]
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
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
      required: true,
      // minLength:  [4, "Password Must Contain At Least 4 Character!"]
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true },
);

const userModal = mongoose.model("auth", userSchema);
module.exports = userModal;
