const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// import routes
const authRoutes = require('./routes/auth');
const noteCategory = require('./routes/noteCategory');

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => console.log(err ? JSON.stringify(err, null, 2) : 'connected to db'),
);

// middleware
app.use(express.json());

// routes middlwares
app.use('/api/user', authRoutes);
app.use('/api/note-categories', noteCategory);

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:${8080}`);
});
