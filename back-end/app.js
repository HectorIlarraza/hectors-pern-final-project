// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productController = require("./controllers/productController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Gilameshs Other-Worldly Arms Shop!");
});

// Products ROUTES
app.use("/products", productController);

// 404 PAGE
app.get("*", (req,res)=>{
  res.status(404).send("Page Not Found!")
});

// EXPORT
module.exports = app;
