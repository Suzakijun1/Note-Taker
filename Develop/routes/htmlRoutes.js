const html = require("express").Router();
const { readFromFile, readAndAppend } = require("../fsUtils");

//GET route for retrieving all the

html.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);
