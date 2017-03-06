'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const moment= require('moment');

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull:false
  },
  // ** DOUBLE CHECK ON HOW TO ADD A RATING ON THE MODEL ...
  rating: {
      type: Sequelize.INTEGER,
      validate: {min: 0, max: 5},
      allowNull:false
  },
  description: Sequelize.TEXT
},{
  getterMethods:{
    createdAt: function() {
      return moment(this.getDataValue('created_at')).format('MM-DD-YYYY');
    },
    updatedAt: function() {
      return moment(this.getDataValue('updated_at')).format('MM-DD-YYYY');
    }
  }
});


module.exports = Review
