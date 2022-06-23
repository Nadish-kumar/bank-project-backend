const mongoose  = require("mongoose")

const withdrawalschema = mongoose.Schema({
    accountnumber : {
        type : Number
    },
    amount : {
        type : Number
    },
    date : {
        type : String
    }
})

const withdrawalref = mongoose.model("withdrawal" , withdrawalschema)

module.exports = withdrawalref