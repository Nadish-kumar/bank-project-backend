const router = require("express").Router()
const depositdetail  = require("../model/deposit")

router.post("/", async (req, res) => {
   var dbcard = req.body
    depositdetail.insertMany(dbcard, (err,data) => {
    if(err) {
        res.status(500).send(res)
    }else{
        res.status(200).send(data)
    }
   })
})

router.post("/date", async(req,res) => {
    var dbcard = req.body
    depositdetail.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
    })
})

router.post("/detail", async(req,res) => {
      var dbcard = req.body
    depositdetail.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
    })
})

module.exports = router