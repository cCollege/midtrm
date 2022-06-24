/**
 * db.js
 *
 * Wepp App Name: Mid-Term Test - Favourite Book List App
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Date: March 05, 2022
 *
 * @link   config/db.js
 * @file   This file define the configuration of DB
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

 module.exports = 
 {
     "URI":  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qqhoz.mongodb.net/comp229_midterm?retryWrites=true&w=majority`
 }