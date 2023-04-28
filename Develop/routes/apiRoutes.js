const api = require("express").Router();
const { readFromFile, readAndAppend } = require("../fsUtils");
path = require("path");

//GET route for retrieving all the api

api.get("/notes", (req, res) => {
  if (error) {
    return console.log(error);
  }
  res.json(JSON.parse(notes));
});

//POST Route

module.exports = api;
