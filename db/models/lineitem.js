'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')
const Order = require('./order')

const LineItem = db.define('lineItems', {
    description: Sequelize.TEXT,
    price: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER
},{
  getterMethods:{
    itemTotal: function(){
      return this.price*this.quantity
    }
  }
});


module.exports = LineItem
