const router = require("express").Router();
path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//GET route for retrieving all the api

router.get("/notes", (req, res) => {
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

  // API delete request
  router.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id.toString();
    console.log(`Delete request for noteID: ${noteId}`);
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newData = data.filter((note) => note.id !== noteId);

    fs.writeFileSync("./db/db.json", JSON.stringify(newData));
    console.log(`Successfully deleted note with id: ${noteId}`);
    res.json(newData);
  });
});

module.exports = router;
