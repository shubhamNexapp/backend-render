const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/merndb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server started on port 5000')))
  .catch(err => console.log(err));
