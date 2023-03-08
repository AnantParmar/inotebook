const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

// ROUTES : 1 Get All The Notes using : GET "/api/notes/fetchallnotes". Login Required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTES : 2 Add a new Note using : Post "/api/notes/addnote". Login Required
router.post(
  "/addnote",
  [
    body("title", "Enter a Valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  fetchUser,
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTES : 3 Update an existing Note using : Post "/api/notes/updatenote". Login Required

router.put("/updatenotes/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Create a newnote object
  try {
    const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  // Find the note to be updated and update it
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTES : 4 Delete an existing Note using : Post "/api/notes/deletenote". Login Required

router.delete("/deletenotes/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  
  try {
    // Find the note to be delete and delete it
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }
  // Allows deletion only if user owns this note
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndDelete(
    req.params.id
  );
  res.json({ "Success":"Note has been deleted", note: note});
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
