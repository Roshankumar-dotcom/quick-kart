const express = require("express");
const user = require("../model/userSchema");
const Router = express.Router();
const { register, login } = require("../controller/authController");

Router.get("/",(req,res)=>{

  res.send("Deployed By Roshan Kumar");

})
Router.post("/register", register);
Router.post("/login", login);

module.exports = Router;
