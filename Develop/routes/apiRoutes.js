const api = require("express").Router();
const { readFromFile, readAndAppend } = require("../fsUtils");

//GET route for retrieving all the api

api.use("/notes", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

//POST Route

module.exports = api;
