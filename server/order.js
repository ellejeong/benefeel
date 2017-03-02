'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Product = db.model('products')
const LineItem = db.model('lineitems')

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
    var customerId= userid   //put correct reference for user id
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
  .get('cart/:userid', (req, res, next)=>{
    console.log("order:", req.cart)
    res.send("")
  })
  //post: add item to cart relying on router.param for 'cart'
  //create lineitem from product
  //lineitem.addProduct
  //need product in req.body
  //need quantity in req.body
  // .post('/cart/add', (req, res,next) =>
  //   let product=req.body.product
  //   let quantity=req.body.quantity
  //
  //   LineItem.create({
  //     description: product.description
  //     price: product.price
  //     quantity: quantity
  //   }).then(lineitem => {
  //       lineitem.addProduct(product.id)
  //       lineitem.addOrder(req.cart.id)
  //       req.cart.addLineItem()
  //   }).then(
  //   }).catch(next)
  // )



  //need to find order::
  //lineItem.addOrder//Order.addLineItem
