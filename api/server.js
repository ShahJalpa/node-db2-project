const express = require("express")
const server = express()

// DO YOUR MAGIC
//const helmet = require("helmet");

const carRouter = require("./cars/cars-router")

//server.use(helmet());
server.use(express.json());

server.use("/api/cars", carRouter);

module.exports = server
