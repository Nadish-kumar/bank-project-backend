const mongoose  = require("mongoose")

const depositschema = mongoose.Schema({
    accountnumber : {
        type : Number
    },
    targetaccount : {
        type : Number
    },
    amount : {
        type : Number
    }
})

const depositref = mongoose.model("deposit" , depositschema)

module.exports = depositref