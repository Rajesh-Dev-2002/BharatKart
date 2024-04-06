const mongoose = require("mongoose")


const addressSchema = new mongoose.Schema({

    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,

    },
    city:{
        type:String,
        required:true,

    },
    state:{
        type:String,
        required:true,

    },
    zipCode:{
        type:Number,
        required:true,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    mobile:{
        type:String,
        required:true,

    }
    

})

const Address = mongoose.model("addresses",addressSchema)


module.exports=Address;