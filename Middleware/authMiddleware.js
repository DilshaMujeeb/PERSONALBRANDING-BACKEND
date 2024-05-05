const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const app = express();
const secretKey = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  console.log(token, "oooooooooooooooooooo");

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .json({ status: false, message: "Token expired" });
        } else {
          console.log("Error verifying token:", err.message);
          return res
            .status(401)
            .json({ status: false, message: "userTokenNotVerified" });
        }
      }

      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ status: false, message: "userTokenNotVerified" });
  }
}

module.exports = authenticateToken;
