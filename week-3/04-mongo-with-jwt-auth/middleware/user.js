const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");
  const JWT_Token = words[1];
  const decoded = jwt.verify(JWT_Token, JWT_SECRET);

  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = userMiddleware;
