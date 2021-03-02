const router = require('express').Router();
const Habit = require('../models/Habit');
const verify = require('./verifyToken');

router.get('/', verify, async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user });

    res.status(200).send(habits);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', verify, async (req, res) => {
  const { id } = req.params;

  try {
    const habit = await Habit.findById(id);
    res.status(201).send(habit);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', verify, async (req, res) => {
  const { name, weeklyFrequency, color } = req.body;
  const today = new Date();
  const [todayDate] = today.toISOString().split('T');
  const data = {
    name,
    userId: req.user,
    weeklyFrequency,
    color,
    dateCreated: new Date(),
    history: { [todayDate]: false },
  };

  try {
    const habit = new Habit(data);
    const savedHabit = await habit.save();
    res.status(200).send(savedHabit);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', verify, async (req, res) => {
  const { id } = req.params;

  try {
    const habit = await Habit.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true },
    );
    res.status(201).send(habit);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id/history', verify, async (req, res) => {
  const { id } = req.params;
  const { date, done } = req.body;

  try {
    const current = await Habit.findById(id);
    const history = { ...current.history, [date]: done };
    const habit = await Habit.findByIdAndUpdate(
      id,
      { $set: { history } },
      { new: true },
    );
    res.status(200).send(habit);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', verify, async (req, res) => {
  const { id } = req.params;

  try {
    const habit = await Habit.findById(id);
    if (!habit) return res.status(400).send("Habit doesn't exist.");
    habit.delete();
    res.status(201).send(true);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
