'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('Check Product Model', ()=> {
    //sample test, not necessary
    it('create product with correct title', (done)=>{
      Product.create({
        title: "Dreamy",
        category: "mental",
        price: 200,
        description: "lalala",
        inventory: 2
      })
        .then(product => {
          expect(product).to.have.property('title').that.equals('Dreamy')
          done()
        }).catch(done)
    })

  })
})
