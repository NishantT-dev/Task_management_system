import mongoose from "mongoose"

function dbConnection(){
    try{ 
const connection =  mongoose.connect(process.env.MONGO_URI);
        if(connection){
            console.log( " Dbase connected Successfully ");
        }
      else{
        process.exit(1)
      }
    }
    catch(err){
console.error(err.message)    }
}
export default dbConnection;