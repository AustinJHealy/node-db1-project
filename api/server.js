const express = require("express");
const budget = require("./budget");
const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/budget", budget);
module.exports = server;
