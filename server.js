'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;


app.listen(PORT, () => console.log(`listening on ${PORT}`));


// ENDPOINTS

app.get('/test', (request, response) => {

  response.send('test request received')

})