'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  title: Sequelize.STRING,
  // ** DOUBLE CHECK ON HOW TO ADD A RATING ON THE MODEL ...
  rating: {
      type: Sequelize.INTEGER,
      validate: {min: 0, max: 5}
  },
  description: Sequelize.TEXT
});


module.exports = Review
