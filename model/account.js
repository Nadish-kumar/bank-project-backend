const mongoose  = require("mongoose")

const accountschema = mongoose.Schema({
    name : {
        type : String
    },
    accountnumber : {
        type : Number
    },
    balance : {
        type : Number
    },
    date : {
        type :  String
    }
})

const accountef = mongoose.model("account",accountschema)

module.exports = accountef