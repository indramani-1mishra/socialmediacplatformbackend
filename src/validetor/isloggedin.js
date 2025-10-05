const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configlayer/config");

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = {
      id: decoded.id,
      emailorphone: decoded.emailorphone,
    };
    next();
  } catch (error) {
    console.error("Error in isLoggedIn middleware:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = isLoggedIn;
