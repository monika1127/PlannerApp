const router = require('express').Router();
const { NoteCategory } = require('../models/NoteCategory');
const verify = require('./verifyToken');

router.get('/', verify, async (req, res) => {
  try {
    const noteCategories = await NoteCategory.find({ userId: req.user });

    res.status(200).send(noteCategories);
  } catch (error) {
    console.log({ error });
    res.status(500).send(error);
  }
});

router.get('/:id', verify, async (req, res) => {
  const { id } = req.params;

  try {
    const noteCategory = await NoteCategory.findById(id);
    res.status(201).send(noteCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', verify, async (req, res) => {
  const { name } = req.body;
  console.log(req.user);

  if (name.trim().length === 0)
    return res.status(400).send('No name provided.');

  try {
    const noteCategory = new NoteCategory({ name, userId: req.user });
    const savedNoteCategory = await noteCategory.save();
    res.status(200).send(savedNoteCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', verify, async (req, res) => {
  const { id } = req.params;

  try {
    const noteCategory = await NoteCategory.findById(id);
    if (!noteCategory) return res.status(400).send("Catagory doesn't exist.");
    noteCategory.delete();
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// ------------- Notes

router.post('/:id/notes', verify, async (req, res) => {
  const { id } = req.params;

  const { name, done } = req.body;

  if (name.trim().length === 0)
    return res.status(400).send('No name provided.');

  try {
    const noteCategory = await NoteCategory.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          notes: {
            name,
            done,
          },
        },
      },
      { new: true },
    );
    res.status(200).send(noteCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id/notes/:noteId', verify, async (req, res) => {
  const { id, noteId } = req.params;
  const { name, done } = req.body;

  try {
    const note = await NoteCategory.findOneAndUpdate(
      {
        _id: id,
        'notes._id': noteId,
      },
      {
        $set: {
          'notes.$.name': name,
          'notes.$.done': done,
        },
      },
      { new: true },
    );
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id/notes/:noteId', verify, async (req, res) => {
  const { id, noteId } = req.params;

  try {
    const category = await NoteCategory.findById(id);
    await category.notes.id(noteId).remove();
    category.save();

    res.status(204).send();
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    res.status(500).send(error);
  }
});

module.exports = router;
