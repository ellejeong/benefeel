'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// * ALL ROUTES ARE SEPARATE!
// the middle parameter 'forbidden' is limiting who can call this route
// controls who does this GET route -> filters for the route
	.get('/', forbidden('only admins can list users'), (req, res, next) => 
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
		// this is creating a new user -> used for SIGN UP!
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
		// this would be a 'profile page' or 'dashboard' for each user
	.get('/:id', mustBeLoggedIn, (req, res, next) => 
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))