const api = require("express").Router();
const fs = require("fs");

//GET route for retrieving all the api

api.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

//POST Route
