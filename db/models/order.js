'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')
const LineItem = require('./lineitem')


// methods: subtotal, additem, getitemprice, get item
// array of product objects with id, quantity and price
// instance method ==> {id: 293, quantity: 1, price: 1.00}
// automatic--> item price, total price, subtotal
// [
// {id: 5, quantity: 1, itemPrice:10, totalPrice: 10},
// {id: 6, quantity: 2, itemPrice:5, totalPrice: 10}
// ]

const Order = db.define('orders', {
  status: Sequelize.ENUM('inCart', 'processing', 'complete'),
}, {
    getterMethods: {
        // this is the subtotal => entire order total
        getSubTotal: function() {
            var lineItems = this.getLineItems() 
            console.log('OVAAA HEAAAA BEY',lineItems);
            //.reduce((total, currentProduct) => {
            //    return total + (currentProduct.price * currentProduct.quantity);
            //}, 0) 
        }
    }
});




module.exports = Order
