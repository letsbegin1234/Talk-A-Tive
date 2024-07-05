const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'arjun', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;