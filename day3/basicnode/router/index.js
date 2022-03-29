const express = require("express")
const router = express.Router();

router.use("/user1", require("./user"))
router.use("/hi", require("./hello"))

module.exports = router;