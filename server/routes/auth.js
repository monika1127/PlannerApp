const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerUserSchema, loginSchema } = require('../validation/auth');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const { error } = registerUserSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email });
  if (emailExist) res.status(400).send('Email already exists.');

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      email,
      name,
      password: hashPassword,
    });
    const savedUser = await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('Authorization', token);

    res.send({
      name: savedUser.name,
      email: savedUser.email,
      id: savedUser.id,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email });
  if (!user) res.status(400).send('Email or password is wrong.');

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) res.status(400).send('Email or password is wrong.');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('Authorization', token);
  res.send(user);
  try {
  } catch (error) {}
});

module.exports = router;
