const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });


 const students = require("./router/students");
 app.use("/students", students);

app.get("/", (req,res)=>{
  res.status(200).send("Welcome to our app");

})


module.exports = app;
