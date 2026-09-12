const userModal = require("../modals/user.modal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  const isUserExist = await userModal.findOne({
    or: [{ username }, { email }],
  });

  if (isUserExist) {
    return res.status(409).json({ message: "User already exists!!" });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModal.create({
    name,
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      // role: user.role
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "Register User Successfully",
    user: {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  console.log("Login request:", {
    email,
    username,
  });

  const user = await userModal.findOne({
    email,
    // $or: [{ email }, { username }],
  });

  console.log("Found user:", user);

  if (!user) {
    console.log("❌ User not found");
    return res.status(401).json({
      message: "Unauthorized User",
    });
  }

  const passValid = await bcrypt.compare(password, user.password);
  console.log("Password valid:", passValid);

  if (!passValid) {
    return res.status(401).json({
      message: "Password is incorrect",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

  res.status(200).json({
    message: "Login successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const getProfile = async (req, res) => {
  const user = req.user;
  res.status(200).json({
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    },
  });
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: `Logged out successfully`,
  });
};

module.exports = { registerUser, loginUser, getProfile, logoutUser };
