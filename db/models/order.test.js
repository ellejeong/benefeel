'use strict'

const db = require('APP/db')
const LineItem  = require('./lineitem')
const Order = require('./order')
const {expect} = require('chai')

describe('Order', () => {
  before('wait for the db', () => db.didSync)

  describe('Check Order Model', ()=> {
    //sample test, not necessary
    beforeEach(function(){
      return Promise.all([
        Order.create({
          status: 'inCart'
        }),
        LineItem.create({
          description: "best product ever",
          price: 800,
          quantity: 2
        })
      ]);
    });

    it('gettermethod subTotal returns correct value', (done)=>{
      let testLineItem
      let testOrder
      LineItem.create({
        description: "best product ever",
        price: 800,
        quantity: 2
      }).then(lineitem=>{
        testLineItem=lineitem;
        return Order.create({
          status: 'inCart'
        })
      }).then(order => {
        testOrder=order
        return order.addLineItem(testLineItem.id)
      }).then(()=>{
        return testOrder.subTotal.then((total)=>{
          expect(total).to.equal(1600);
          done()
        })
      }).catch(done)
    })

  })
})
