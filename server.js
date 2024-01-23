const express = require('express')
const dotenv= require("dotenv").config();
const connectDb= require("./mongoDB/dbConnection");
const errorHandler=require("./middleware/errHandler")
const cors = require('cors');

connectDb()
const app = express();
app.use(cors());

const port = process.env.PORT || 5001;
app.use(express.json());
app.use("/api", require("./routers/get_count_router"), require("./routers/get_similar_router"),require("./routers/get_all_router"),require('./routers/get_filtered_cars_router')); 
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})