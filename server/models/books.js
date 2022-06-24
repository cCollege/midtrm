/**
 * books.js
 *
 * Wepp App Name: Mid-Term Test - Favourite Book List App
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Date: March 05, 2022
 *
 * @link   models/books.js
 * @file   This file defines the models to create in the DB
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
