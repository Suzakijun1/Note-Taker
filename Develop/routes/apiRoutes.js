const api = require("express").Router();

//GET route for retrieving all the api

api.get("/", (req, res) =>
  readFromFile("./db/").then((data) => res.json(JSON.parse(data)))
);

//POST Route
