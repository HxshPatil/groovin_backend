const mongoose= require("mongoose");

const connectDb=async()=>{
    try{
        const connect=await ("mongoose.connectmongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC");
        console.log("connection to database successful and database name:",connect.connection.name);
    }catch(err){
        console.log("cannot connect to database");
        process.exit(1);
    }
}
module.exports= connectDb;