const mongoose = require('mongoose');

const Note = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 1024,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const NoteCategory = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  notes: [Note],
});

module.exports.NoteCategory = mongoose.model('NoteCategory', NoteCategory);
