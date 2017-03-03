'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Product = db.model('products')
const LineItem = db.model('lineItems')

module.exports = require('express').Router()
  //get all orders, ADMIN ONLY
  .get('/', (req, res, next) =>
		Order.findAll()
		.then(orders => res.json(orders))
		.catch(next))
  //get all orders for a logged in user
  .get('/:userid', (req, res, next) =>
    Order.findAll({
      where:{
        customer_id: req.params.userid
      }
    })
    .then(orders => res.json(orders))
    .catch(next))
  //router param, find or create cart(Order status:"inCart") for user
  //need user id in req.body
  .param('userid', (req, res, next, userid) => {
    let customerId= userid   //put correct reference for user id
    Order.findOrCreate({
      where:{
        customer_id: customerId,
        status: 'inCart'
      }
    })
    .then(result => {
      req.cart= result[0];
      next()
    }).catch(next)
   })
   //Get Cart of user by user id
  .get('/cart/:userid', (req, res, next)=>{
    res.status(200).json(req.cart);
  })
  //post: add item to cart relying on router.param for 'cart'
  //create lineitem from product
  //lineitem.addProduct
  //need product in req.body
  //need quantity in req.body
  .post('/cart/:userid/add', (req, res, next) => {
    // console.log('REQBODYYYY', req.body);
    // console.log("productid body", req.body.productId);
    // console.log("quantity body", req.body.quantity )

    let productId = +req.body.productId
    let quantity = +req.body.quantity
    let cart = req.cart
    let lineitem;

    console.log('PRODUCTIDDDD BEFORE', productId);
    Product.findById(productId)
    .then(product => {
      //console.log('PRODUCTIDDDD AFTERRRRRRR', product);
      return LineItem.create({
        name: product.title,
        price: product.price,
        quantity: quantity
      })
    })
  .then(createdLineItem => {
   // console.log("createdLineItem", createdLineItem)
        lineitem=createdLineItem
        return lineitem.setProduct(productId)
    })
  .then(()=> {
    console.log('PRODUCT SETTTTTTT')
    return lineitem.setOrder(req.cart.id)
  })
  .then(()=> {
    console.log('ORDER SETTTTTTTTTTT')
    console.log('cart: ', cart)
    return cart.addLineItem(lineitem.id)
  })
  .then(function() {
    console.log('AFTER ORDER SETTTINGGGGG')
    res.status(201).json(lineitem);
  })
  .catch(next)
  })


  /////////////////////////////////////////////////////////////////
  //router param, save order
  .param('orderid', (req, res, next, orderid) => {
    Order.findOne({
      where:{
        id: orderid
      }
    })
    .then(foundOrder => {
      req.order= foundOrder;
      next()
    }).catch(next)
   })
   //Get all line items of an order
  .get('/order/:orderid', (req, res, next)=>{
    req.order.getLineItems()
      .then((lineItems)=>{
        res.status(200).json(lineItems);
      }).catch(next)
  })
