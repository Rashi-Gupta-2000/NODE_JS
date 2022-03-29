const express = require("express");
const { MongoServerClosedError } = require("mongodb");
const router = express.Router();

router.use("/user", require("./user"));

module.exports = router;
