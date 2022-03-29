// Creating a router

const express = require("express")
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Welcome to the user root page")
})

router.get("/list", (req,res) => {
    res.send("User Listing Page")  
})

router.get("/details/:id", (req,res) => {
    res.send("User Details Page for id " + req.params.id)
})

module.exports = router;