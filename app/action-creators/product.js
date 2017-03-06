import React from 'react';
import axios from 'axios';

import { SELECT_PRODUCT, SELECT_ALL_PRODUCTS, SELECT_CATEGORY, SELECT_ALL_REVIEWS, ADD_REVIEW_TO_PRODUCT} from 'APP/app/constants';

export const selectAllProducts = products => ({
	type: SELECT_ALL_PRODUCTS,
	products: products
});

export const selectProduct = product => ({
	type: SELECT_PRODUCT,
	selectedProduct: product
});

export const selectCategory = products => ({
	type: SELECT_CATEGORY,
	products: products
})

export const receiveProduct = productId => {
	return dispatch => {
		axios.get(`/api/products/${productId}`)
			.then(product => {
				dispatch(selectProduct(product.data));
			})
			.catch(console.error());
	};
};

export const addReviewToProduct = review => ({
	type: ADD_REVIEW_TO_PRODUCT,
	review: review
});

export const addReview = review => {
	console.log("title", review.title, "rating", review.rating, "pid", review.product_id, "aid", review.author_id, "des", review.description);
	return dispatch => {
		axios.post(`/api/products/${review.product_id}/reviews`,{
			title: review.title,
			rating: review.rating,
			description: review.description,
			author_id: review.author_id
		})
			.then(review => {
				console.log("review add", review.data);
				dispatch(addReviewToProduct(review.data));
			})
			.catch(console.error());
	};
};

export const selectAllReviews = allReviews => ({
	type: SELECT_ALL_REVIEWS,
	allReviews: allReviews
});


export const receiveCategories = (category) => {
	return dispatch => {
		axios.get(`/api/products`)
			.then(products => {
				return products.data.filter(product => {
					return product.category === category;
				});
			})
			.then(filteredProducts => {
				dispatch(selectCategory(filteredProducts));
			})
			.catch(console.error());
	};
};
