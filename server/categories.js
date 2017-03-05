const db = require('APP/db');
const Product = db.model('products');

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
		Product.findAll()
			.then(categories => res.json(categories))
			.catch(next);
	})
	.get('/:category', (req, res, next) => {
		Product.findAll({ where: { category: req.params.category } })
			.then(category => res.json(category))
			.catch(next);
	});
