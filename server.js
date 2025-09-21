const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://fixhomiteam_db_user:khjkn3QX7bHVHvZQ@cluster0.jygkq0h.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server started on port 5000')))
  .catch(err => console.log(err));
