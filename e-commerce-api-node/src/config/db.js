const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://rajeshkumar:mIQc3omL5WozzpKE@cluster0.jatwokp.mongodb.net/?retryWrites=true&w=majority"

const connectDb= () =>{
  return mongoose.connect(mondbUrl);
}

module.exports={connectDb}