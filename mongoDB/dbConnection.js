const mongoose= require("mongoose");

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CON_STR);
        console.log("connection to database successful and database name:",connect.connection.name);
    }catch(err){
        console.log("cannot connect to database");
        process.exit(1);
    }
}
module.exports= connectDb;