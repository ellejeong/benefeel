'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

// heartbeat -> this will check if you are still connected to site/server
api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/reviews', require('./reviews'))
  .use('/orders', require('./order'))
  .use('/categories', require('./categories'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
