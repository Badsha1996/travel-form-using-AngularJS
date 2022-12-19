const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const cors = require("cors");

dotenv.config();
const app = express();

mongoose.set('strictQuery', false); // can cause error 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("DB is running"))
  .catch((err)=>console.log(err));;
}


app.use(cors({
  origin: "*",
  methods : ["GET", "POST"],
  credentials: true
}))
app.use(express.json())



app.use("/api/travelForm",userRoute);


  app.listen(8800, ()=>{
    console.log("server is running");
})



