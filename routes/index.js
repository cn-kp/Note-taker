const express = require("express");

const app = express();
// import the other routers here
const noteRouter = require("./notes")

app.use("/notes", noteRouter)

module.exports = app;