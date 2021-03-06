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
    },
    date : {
        type : String
    }
})

const depositref = mongoose.model("deposit" , depositschema)

module.exports = depositref