/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const path = require("path")

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//ESTABLISH CONNECTION
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error))

  ////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
//is equal to below for destructering
const { Schema, model } = mongoose
const fruitsSchema = new Schema ( {
    name: String,
    color: String,
    readyToEat: Boolean,
})

const Fruit = model('Fruit', fruitsSchema)

