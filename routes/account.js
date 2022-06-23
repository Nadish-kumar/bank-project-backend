const router = require("express").Router()
const accountdetail = require("../model/account")



router.post("/", async (req, res) => {
    try {
        var car = req.body
        const newcar = await new accountdetail(car).save().then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(newcar)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const allcar = await accountdetail.find({}).then((res) => { return res }).catch((err) => { throw err.message })
        return res.send(allcar)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.post("/acc", (req, res) => {
    var dbcard = req.body
    accountdetail.findOne(dbcard, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
        console.log(data)
      }
    });
  });

  router.put("/update", (req,res) => {
    
     console.log(req.body)
    accountdetail.findOneAndUpdate({accountnumber : req.body.accountnumber},{balance : req.body.balance},{ new: true }, (err,data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
  })
  
  router.put("/added", (req,res) => {
    
    console.log(req.body)
   accountdetail.findOneAndUpdate({accountnumber : req.body.accountnumber},{balance : req.body.balance},{ new: true }, (err,data) => {
       if(err) {
           res.status(500).send(err)
       }else{
           res.status(200).send(data)
       }
   })
 })
 

module.exports = router