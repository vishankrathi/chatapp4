const express = require("express");
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const User=require('./models/user');
const jwt=require('jsonwebtoken');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcryptjs');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();
const auth=require("./router/auth");
const list=require("./router/List");
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.error("Error: " + err);
});
app.get("/",(req,res)=>{
    res.send("hello");
});
app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(3000,()=>{
    console.log("Server Started")
});

