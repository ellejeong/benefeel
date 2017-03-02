'use strict'

const db = require('APP/db')
const LineItem  = require('./lineitem')
const {expect} = require('chai')

describe('LineItem', () => {
  before('wait for the db', () => db.didSync)

  describe('Check LineItem Model', ()=> {
    //sample test, not necessary
    it('gettermethod itemTotal returns correct value', (done)=>{
      LineItem.create({
        description: "best product ever",
        price: 800,
        quantity: 2
      })
        .then(lineitem => {
           expect(lineitem.itemTotal).to.equal(1600);
          done()
        }).catch(done)
    })

  })
})
