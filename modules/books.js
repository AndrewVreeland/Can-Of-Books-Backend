'use strict';
const { response } = require('express');
const Book = require('../models/book');

async function getBook(request, response, next){
  try{
  let books = await Book.find({})

  response.status(200).send(books)
  }
  catch(error){
    next(error);
  }
}


module.exports = getBook;
