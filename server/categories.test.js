const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Product = require('APP/db/models/product');
const app = require('./start');

describe('Individual Category View', () => {

	let love, squee, meh;

	beforeEach('seed products', () => {
		const products = [
			{
				title: 'love',
				category: 'mental',
				price: '10',
				description: 'a positive emotion',
				inventory: 20
			},
			{
				title: 'squee',
				category: 'physical'
			},
			{
				title: 'meh',
				category: 'physical'
			}
		];
		return Product.bulkCreate(products)
			.then(createdProducts => {
				love = createdProducts[0].id;
				squee = createdProducts[1].id;
				meh = createdProducts[2].id;
			});
	});

	it('has the correct number of products in each category', () => {
		request(app)
			.get('/api/categories/physical')
			.then(res => {
				console.log(res.body);
				expect(res.body.length).to.be.equal(2);
			});
	});

	// it('/api/categories/:category sends status 200', () =>
	// 	request(app)
	// 		.get('/api/categories/mental')
	// 		.expect(200)
	// );
});
