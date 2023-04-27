const express = require("express");

//import routes

const apiRouter = require("./apiRoutes.js");
const htmlRouter = require("./htmlRoutes.js");

const app = express();

app.use("/apiRoutes.js", apiRouter);
app.use("/htmlRoutes.js", htmlRouter);

module.exports = app;
