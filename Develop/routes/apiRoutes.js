const router = require("express").Router();
// const { readFromFile, readAndAppend } = require("../fsUtils");
path = require("path");

const { json } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//GET route for retrieving all the api

router.get("/notes", (req, res) => {
  if (error) {
    return console.log(error);
  }
  res.json(JSON.parse(notes));
});

//POST Route for note
router.post("/notes", (req, res) => {
  const newNote = req.body;
  console.log("New Note:" + JSON.stringify(newNote));

  newNote.id = uuidv4();

  let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  data.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  console.log("Successfully added new note!");
  res.json(data);

  // readAndAppend(JSON.stringify(notes), (err) => {
  //   if (err) throw err;
  //   res.json(db);
  //   console.log("Success");
});

module.exports = router;
