'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBook = require('./modules/books.js')
const Book  = require('./models/book.js')
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
app.get('/books', getBook);

app.delete('/books/:bookID', deleteBook);

async function deleteBook(request,response,next) {
  try {
    let id = request.params.bookID;

    await Book.findByIdAndDelete(id); 

    response.status(200).send('Book Deleted');

  } catch (error) {

    next(error);

  }
}




app.get('*', (request, response) => {
  response.status(404).send('This route does not exist');
});
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});