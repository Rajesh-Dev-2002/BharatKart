const mongoose  = require("mongoose")

const UserSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER",

    },
    mobile:{
        type:String,

    },
    address: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment_information"
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    revies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"

    }],
    createAt:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model("users", UserSchema)
module.exports= User