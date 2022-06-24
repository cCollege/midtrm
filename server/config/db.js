/**
 * db.js
 *
 * Web App Name: Midterm Test - Favourite Book List App
 * Student Name: Joel VANGA
 * Student Id: 301138320
 * Date: Friday 24 June 2022
 *
 * @link   config/db.js
 * @file   This file define the configuration of DB
 * @author Joel Vanga <jvanga@my.centennialcollege.ca>
 * @since  1.0.0
 */

 module.exports = 
 {
     "URI":  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.rsmtm.mongodb.net/comp229_midterm?retryWrites=true&w=majority`
 }