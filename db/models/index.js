'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Product = require('./product')
const Order = require('./order')

Order.belongsTo(User, {as: 'customer'})
// adds User as customerId to Order 

Order.hasMany(Product)
// access Product from Order
// adds productId to Order

OAuth.belongsTo(User)
// adds User as userId to OAuth 

User.hasOne(OAuth)
module.exports = {User, Product, Order}
