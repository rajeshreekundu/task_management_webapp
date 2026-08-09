const userModal = require("../modals/user.modal");
const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(403).json({
      message: "Unauthorized User!!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === "admin") {
      return res.status(403).json({
        message: `You don't have an access.`,
      });
    }
    req.user = decoded;
    next();
    s;
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: `${err}`,
    });
  }

  // const user = await userModal.findOne({
  //     $or:[
  //         {username}, {email}, {phone}
  //     ]
  // });
};

module.exports = { authUser };
