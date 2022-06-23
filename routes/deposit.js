const router = require("express").Router()
const depositdetail  = require("../model/deposit")

router.post("/", async (req, res) => {
   var dbcard = req.body
   depositdetail.insertMany(dbcard)
})

module.exports = router