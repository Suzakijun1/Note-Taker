const express = require("express");
const { clog } = require("./middleware/clog");
//import routes

const apiRouter = require("./apiRoutes.js");
const htmlRouter = require("./htmlRoutes.js");

const app = express();

app.apiRouter(clog);
app.htmlRouter(clog);

module.exports = app;
