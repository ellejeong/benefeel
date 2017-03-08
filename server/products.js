'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Review = db.model('reviews')

module.exports = require('express').Router()
	.get('/', (req, res, next) =>
		Product.findAll()
			.then(products => res.json(products))
			.catch(next))
	.get('/:id', (req, res, next) =>
		Product.findById(req.params.id)
			.then(product => {
				return !product ? res.sendStatus(404) : res.json(product)
			})
			.catch(next))
	.get('/:id/reviews', (req, res, next) =>
		Review.findAll({
			where: {
				product_id: req.params.id
			}
		})
			.then(reviews => res.json(reviews))
			.catch(next))
		.post('/:id/reviews', (req, res, next) => {
			Review.create({
					title: req.body.title,
					rating: +req.body.rating,
					description: req.body.description,
					product_id: +req.params.id,
					author_id: +req.body.author_id
			})
			.then(review => res.status(201).json(review))
			.catch(next)
		})
