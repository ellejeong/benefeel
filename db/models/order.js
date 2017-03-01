'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')

// EI: test these methods!
// EI: check out JSDoc for formatting

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
  items: Sequelize.ARRAY(Sequelize.JSON) // EI: can we do this with associations instead of an array of JSON?
}, {
    getterMethods: {
        // this is the subtotal => entire order total
        getSubTotal: function() {
            return this.items.reduce((total, currentProduct) => {
                return total + (currentProduct.price * currentProduct.quantity);
            }, 0)
        }
    },

    instanceMethods: {
        addProduct: function(productId, productQuantity, productPrice) {
            for (let product in this.items) {
                if (product.id === productId) {
                   product.quantity = productQuantity;
                   return this.items;
                }
            }
            return this.items.push({id: productId, quantity: productQuantity, price: productPrice});
        },
        // EI: rename this func
        getProductById: function(id) {
            // EI: not sure if Sequelize will care about getProduct vs. getProducts...
            return this.getProducts({
                where: {
                    id: id
                }
            })
        },
        removeProduct: function(id) {
            this.items = this.items.filter(product => {
                return product.id !== id;
            })
        },
        editItemQuantity: function(id, quantity) {
            for (let product in this.items) {
                if (product.id === id) {
                   product.quantity = quantity;
                   return true;
                }
            }
            return false;
        }
    }
});




module.exports = Order
