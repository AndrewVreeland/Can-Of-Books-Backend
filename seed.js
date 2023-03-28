'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);


const Book = require('./models/book.js');


async function seed() {
  // title: {type: String, required: true},
  // description: {type: String, required: true},
  // status:{ type: Boolean, required: true}



await Book.create({
  title: 'To Kill a Mocking Bird',
  description: "To Kill a Mockingbird is both a young girl's coming-of-age story and a darker drama about the roots and consequences of racism and prejudice, probing how good and evil can coexist within a single community or individual.",
  status: true,
  // img: ,
})


console.log('To Kill a Mocking Bird was Created'); 

await Book.create({
  title: 'The Greate Gatsby',
  description: "The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
  status: true
  // img: ,
}) 


console.log('The Greate Gatsby'); 

await Book.create({
  title: 'One Hundred Years of Solitude ',
  description: "One Hundred Years of Solitude, in 1967. The novel tells the story of seven generations of the Buendía family and follows the establishment of their town Macondo until its destruction along with the last of the family’s descendents. In fantastical form, the novel explores the genre of magic realism by emphasizing the extraordinary nature of commonplace things while mystical things are shown to be common. Márquez highlights the prevalence and power of myth and folktale in relating history and Latin American culture. The novel won many awards for Márquez, leading the way to his eventual honor of the Nobel Prize for Literature in 1982 for his entire body of work, of which One Hundred Years of Solitude is often lauded as his most triumphant.",
  status: false
  // img: ,
}) 


console.log('One Hundred Years of Solitude '); 

mongoose.disconnect();

}

seed();