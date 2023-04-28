const html = require("express").Router();
const path = require("path");
const { readFromFile, readAndAppend } = require("../fsUtils");

//GET route for retrieving all the

html.get("/notes", (req, res) => {
  readFromFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = html;
