/**
 * populate_book.js
 *
 * Wepp App Name: Mid-Term Test - Favourite Book List App
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Date: March 05, 2022
 *
 * @link   populate_book.js
 * @file   This file execute the db population on the Book table
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

var bookData = require( '../books.json' )

 // create a new book in the DB
 /* REGISTER SOME BOOKS */

// get refs to the models we defined above
const Book = require('../server/models/books');

// clear all existing documents from the collections
Book.deleteMany({}).then(function(){
    console.log("Data deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});

// populate the foods collection from json data
// nothing fancy here as Book documents do not reference anything else
for( var i = 0; i < bookData["books"].length; i++ ) {
    new Book( bookData["books"][ i ] ).save();
}
