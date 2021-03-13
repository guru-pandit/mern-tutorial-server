const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

dotenv.config({
  path: "./config.env",
});

// Database
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });

// MIDDLEWARE
const middleware = (req, res, next) => {
  console.log("Hello from Middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello from SERVER");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello from ABOUT");
  console.log("Hello from ABOUT");
});

app.get("/contact", (req, res) => {
  res.send("Hello from CONTACT");
});

app.get("/signin", (req, res) => {
  res.send("Hello from SIGNIN");
});

app.get("/signup", (req, res) => {
  res.send("Hello from SIGNUP");
});

app.listen(5000, () => {
  console.log(`Server is running on PORT 3000`);
});
