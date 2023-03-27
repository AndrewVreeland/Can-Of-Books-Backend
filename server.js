'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;


app.listen(PORT, () => console.log(`listening on ${PORT}`));


// *** CONNECT MONGODB USING MONGOOSE ***
// *** PER THE MONGGOOSE DOCS - PLUG AND PLAY CODE 

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
  console.log('Mongoose is connected');
})

// ENDPOINTS

app.get('/test', (request, response) => {

  response.send('test request received')

})

