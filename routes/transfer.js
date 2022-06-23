const router = require("express").Router()
const transferdetail  = require("../model/transfer")

router.post("/", async (req, res) => {
   var dbcard = req.body
    transferdetail.insertMany(dbcard, (err,data) => {
    if(err) {
        res.status(500).send(res)
    }else{
        res.status(200).send(data)
    }
   })
})

router.post("/date", async(req,res) => {
    var dbcard = req.body
    transferdetail.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
    })
})

router.post("/detail", async(req,res) => {
      var dbcard = req.body
    transferdetail.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
    })
})

module.exports = router