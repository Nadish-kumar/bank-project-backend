const mongoose  = require("mongoose")

const transferschema = mongoose.Schema({
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

const transferref = mongoose.model("transfer" , transferschema)

module.exports = transferref