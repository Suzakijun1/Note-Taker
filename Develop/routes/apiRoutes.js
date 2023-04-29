const router = require("express").Router();
// const { readFromFile, readAndAppend } = require("../fsUtils");
path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//GET route for retrieving all the api

router.get("/notes", (req, res) => {
  // fs.readFile("./db/db.json").then((data) => {
  //   res.json(JSON.parse(data));
  // });
  let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  console.log("GET request: " + JSON.stringify(data));
  res.json(data);
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
