const router = require("express").Router()
const withdrawaldetail  = require("../model/withdrawal")

router.post("/", async (req, res) => {
   var dbcard = req.body
    withdrawaldetail.insertMany(dbcard, (err,data) => {
    if(err) {
        res.status(500).send(res)
    }else{
        res.status(200).send(data)
    }
   })
})

router.post("/date", async(req,res) => {
    var dbcard = req.body
    withdrawaldetail.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
    })
})

router.get("/", async(req,res) => {
    withdrawaldetail.find(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
    })
})
module.exports = router