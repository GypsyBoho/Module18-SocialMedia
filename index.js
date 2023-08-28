const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});

mongoose.connect('mongodb://localhost:27017/socialmedia', {
    useNewUrlParser: true,
    uneUnifiedTopology: true,
});
