const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/ninjago')
mongoose.Promise = global.Promise;

//setting body parser
app.use(bodyParser.json())
//initializing routes
app.use('/api', require('./routes/api'));

//listening for requests
app.listen(process.env.port || 4000, function(){
    console.log('motiwa online')
}); 