// Creating a router

const express = require("express")
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello Everyone!!")
})

router.get("/seeyou", (req,res) => {
    res.send("See You All")  
})

module.exports = router;