var express=require('express');
var app=express();
var cors=require('cors');
require('dotenv').config();
var port=process.env.PORT||5000
var path =require('path')

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.use(cors());
const mongoose = require('mongoose');
app.use(express.json());


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {console.log("MongoDB database connection established successfully");})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/api/exercises', exercisesRouter);
app.use('/api/users', usersRouter);


app.listen(port, () => {console.log(`Server is running on port: ${port}`);});
