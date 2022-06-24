/**
 * index.js
 *
 * Wepp App Name: Mid-Term Test - Favourite Book List App
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Date: March 05, 2022
 *
 * @link   routes/index.js
 * @file   This file defines the routes to navigate the page, and included the "Home" Page.
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
