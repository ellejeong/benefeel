'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  title: Sequelize.STRING,
  category: Sequelize.ENUM('mental', 'physical', 'thoughts', 'themes'),
  price: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  inventory: Sequelize.INTEGER,
  imageURL: Sequelize.TEXT
});


module.exports = Product
