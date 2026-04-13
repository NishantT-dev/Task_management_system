// importing modules and packages
import dotenv from "dotenv";
import app from "./app.js"
import dbConnection from "./config/db.js";

// configuring dotenv for env variables
dotenv.config();

// database connection
dbConnection()

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(` Server running at ${PORT}`)
})



