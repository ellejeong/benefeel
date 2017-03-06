'use strict'

const db = require('APP/db')
const Review = db.model('reviews')
const User= db.model('users')

module.exports = require('express').Router()
	.get('/', (req, res, next) =>
		Review.findAll({
			include: [{
				model: User,
				as: 'author'
			}]
		})
		.then(reviews => res.json(reviews))
		.catch(next))
	.get('/:id', (req, res, next) =>
		Review.findById(req.params.id)
		.then(review => res.json(review))
		.catch(next))
