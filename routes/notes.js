const notesRouter = require("express").Router();
const fs = require("fs");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");

const notes = require("../db/db.json");
const idGenerator = require("../helpers/uuid");

// const { readFromFile, readAndAppend } = require('../db/db.json');

notesRouter.get("/", (req, res) => {
  console.log(`${req.method} request received for feedback`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notesRouter.post("/", (req, res) => {
  `${req.method} request received for feedback`;
  //create a new array and push the new note in as object, then write file sync to db
  var noteList = notes;
  // const newNote = req.body;
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: idGenerator(),
    };
    noteList.push(newNote);
    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
  }
});

notesRouter.delete("/:id", (req, res) => {
  readFromFile("./db/db.json").then((data) => {
    const currentNotes = JSON.parse(data);
    const updatedNotes = currentNotes.filter(
      (note) => note.id !== req.params.id
    );

    // const = newArrayNotes = currentNotes.splice(deleteId, 1);
    writeToFile("./db/db.json", updatedNotes)
    res.json("note was deleted");
  });
  //read file, loop through and find the id of the one you want to delete and compare it,
  //slice the array, overwrite the file
});

module.exports = notesRouter;
