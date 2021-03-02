const mongoose = require('mongoose');

const Habit = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  dateCreated: Date,
  weeklyFrequency: Object,
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  color: {
    type: String,
    max: 255,
  },
  history: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model('Habit', Habit);
