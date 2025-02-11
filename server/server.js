const express = require('express');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(cors({exposedHeaders: ['Authorization']}));

// import routes
const authRoutes = require('./routes/auth');
const noteCategory = require('./routes/noteCategory');
const habit = require('./routes/habit');

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
app.use('/api/habits', habit);

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`);
});
