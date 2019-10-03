const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc-eimhg.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

app.use(express.json());
app.use(routes);

app.listen(3333);