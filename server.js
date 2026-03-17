import express from "express"
import dotenv from "dotenv";
import app from "./app.js"
import dbConnection from "./config/db.js";

dotenv.config();
dbConnection()
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(` Server running at ${PORT}`)
})



