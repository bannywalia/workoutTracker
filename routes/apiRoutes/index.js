const router = require('express').Router();
const {createNewNote, updateDb} = require("../../lib/notes.js");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");
const User = require('../../models/User');

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });

  // router.put("/notes/:id",async (req, res) =>{
  //   try{
  //     const newNote = await User.update(req.body, {
  //       where: {
  //         id: req.params.id,
  //       },
  //     });
  //     if (!results)

  //   }




  // })

  module.exports = router;