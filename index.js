const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/socialmedia', {
    useNewUrlParser: true,
    uneUnifiedTopology: true,
});
