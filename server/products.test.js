const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('Routes: Products: /api/products', () => {
  describe('get all products', () => {
    it('/api/products sends status 200', () =>
      request(app)
        .get(`/api/products`)
        .expect(200)
    )
  })
  describe('get product by id', () => {
    it('/api/products/:id sends status 200', () =>
      request(app)
        .get(`/api/products/1`)
        .expect(200)
    )
  })
  describe('get all reviews of a product', () => {
    it('/api/products/:id/reviews sends status 200', () =>
      request(app)
        .get(`/api/products/1/reviews`)
        .expect(200)
    )
  })
  describe('post review to a product', () => {
    it('post to /api/products/:id/reviews sends status 201', () =>
      request(app)
        .post(`/api/products/1/reviews`)
        .send({
          title: "My Test Review",
          description: "Testing Happiness was a success",
          rating: 5,
          author_id: 2
        })
        .expect(201)
    )
  })
})
