/**
 * books.js
 *
 * Web App Name: MidTerm Test - Favourite Book List App
 * Student Name: Joel VANGA
 * Student Id: 301138320
 * Date: Friday 24 June 2022
 *
 * @link   models/books.js
 * @file   This file defines the models to create in the DB
 * @author Joel Vanga <jvanga@my.centennialcollege.ca>
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
