'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')


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
  products: Sequelize.ARRAY(Sequelize.JSON)
}, {
    getterMethods: {
        // this is the subtotal => entire order total
        getSubTotal: function() {
            return this.products.reduce((total, currentProduct) => {
                return total + (currentProduct.price * currentProduct.quantity);
            }, 0) 
        }
    },

    instanceMethods: {
        addProduct: function(productId, productQuantity, productPrice) {
            for (let product in this.products) {
                if (product.id === productId) {
                   product.quantity = productQuantity;
                   return this.products;
                }
            }
            return this.products.push({id: productId, quantity: productQuantity, price: productPrice});
        },
        getProduct: function(id) {
            return this.getProduct({
                where: {
                    id: id
                }
            })
        },
        removeProduct: function(id) {
            this.products = this.products.filter(product => {
                return product.id !== id;
            })
        },
        editItemQuantity: function(id, quantity) {
            for (let product in this.products) {
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
