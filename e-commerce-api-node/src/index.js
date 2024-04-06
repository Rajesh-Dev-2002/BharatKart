const express = require("express")

const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(201).send({message:"welcome to e-commerce website - node",status:true})
})
const authRouters = require("./routes/auth.route.js")
app.use("/auth",authRouters)

const userRouters = require("./routes/user.route.js")
app.use("/api/users",userRouters)

module.exports=app