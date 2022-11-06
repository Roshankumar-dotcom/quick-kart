const express = require("express");
const user = require("../model/userSchema");
const Router = express.Router();
const { register, login } = require("../controller/authController");

Router.get("/",(req,res)=>{

  res.send("deployed");

})
Router.post("/register", register);
Router.post("/login", login);

module.exports = Router;
