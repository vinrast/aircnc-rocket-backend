
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

mongoose.connect('mongodb+srv://vinrast:manela.18@rocket-srbnv.mongodb.net/rocket?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
const app = express();

// request with json
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);


app.listen(3300);