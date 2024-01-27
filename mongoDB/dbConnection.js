const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC"
    );

    console.log(
      "Connection to database successful. Database name:",
      connect.connection.name
    );
  } catch (err) {
    console.error("Cannot connect to the database:", err);
    process.exit(1);
  }
};

module.exports = connectDb;
