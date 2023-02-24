const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors")
const mongoUrl = "mongodb+srv://calbertan:albert1203@cluster0.uwbpbkf.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use(cors())

mongoose.connect(mongoUrl, {useNewUrlParser: true})
  .then(()=>console.log("memek"))
  .catch(e=>console.log(e)) 

require("./userDetails")

const User = mongoose.model("UserInfo") 
app.post("/signup", async(req,res)=>{
  const{username, password, reading, completed} = req.body
  try{
    const oldUser = User.findOne({username})
    if(oldUser){
      res.send({error:"Username already exists"})
    }

    await User.create({
      username,
      password,
      reading,
      completed
    })
    res.status({status:'ok'})
  }catch{
    res.status({state:"error"})
  }
})

app.listen(4000, () =>{
  console.log("server started")
})