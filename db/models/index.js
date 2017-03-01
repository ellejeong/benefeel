'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

// EI: what methods different associations will give you: http://docs.sequelizejs.com/en/latest/docs/associations/

const User = require('./user')
const OAuth = require('./oauth')
const Product = require('./product')
const Order = require('./order')

Order.belongsTo(User, {as: 'customer'})
// adds User as customerId to Order

Product.hasMany(Order)
// access Product from Order
// adds productId to Order
// EI: association methods -`Order.getProducts`, `Order.setProducts`

OAuth.belongsTo(User)
// adds User as userId to OAuth

User.hasOne(OAuth)
// EI: User.setOAuth, User.getOAuth

module.exports = {User, Product, Order}
