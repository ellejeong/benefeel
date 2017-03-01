'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Product = require('./product')
const Order = require('./order')
const Review = require('./review')
const LineItem = require('./lineitem')




LineItem.belongsTo(Order)
// adds order as orderId to LineItem
// LineItem.getOrder, LineItem.setOrder, LineItem.createOrder

Order.hasMany(LineItem)
// Order.addLineItem, order.removeLineItem, Order.getLineItems

LineItem.belongsTo(Product)
// adds product as productId to LineItem 
// LineItem.getProduct, LineItem.setProduct, LineItem.createProduct

Review.belongsTo(Product)
// adds product as productId to Review
// Review.getProduct, Review.setProduct, Review.createProduct
 
Review.belongsTo(User, {as: 'author'})
// adds User as authorId to Review 
// Review.getAuthor, Review.setAuthor, Review.createAuthor


Order.belongsTo(User, {as: 'customer'})
// adds User as customerId to Order
// Order.getCustomer, Order.setCustomer, Order.createCustomer

Product.hasMany(Order)
// access Product from Order
// Ari: I don't think we need this . . . 
// adds productId to Order
// Product.addOrder, Product.removeOrder, Product.getOrders



OAuth.belongsTo(User)
// adds User as userId to OAuth 
// OAuth.getUser, OAuth.setUser, OAuth.createUser

User.hasOne(OAuth)


module.exports = {User, Product, Order}
