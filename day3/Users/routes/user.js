const express = require("express")
const mongoose = require("mongoose")
const UserSchema = require("../models/User")
const router = express.Router();
const UserService = require("../services/UserService")

const userServiceObj = new UserService();

router.get("/", (req,res) => {
    res.send("Index User Listing")
})

router.post("/login", async (req,res) => {
    
    let loginResult = await userServiceObj.loginUser(req.body);
    res.send(loginResult);
})

router.get("/list", async (req,res) => {
    
    let users = await userServiceObj.getUsers();
    res.send(users);
})

router.post("/create", async(req,res) => {
    /*
    let result = await userServiceObj.createUser({
        fullname: "Sahcin Patil",
        email: "sachi@google.com",
        gender: "male",
        phone: "1234567890",
        salt: "",
        hash: ""
    });
    */
    console.log(req.body)
    let obj = req.body;
    let result = await userServiceObj.createUser(obj);
    res.send(result);
})

router.get("/add", (req,res) => {
    res.send("User Add Page")
})

router.delete("/:id", async(req,res) => {
    const result = await userServiceObj.deleteUser(req.params.id)
    res.send(result)
})

module.exports = router;