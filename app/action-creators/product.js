import React from 'react';
import axios from 'axios';

import { SELECT_PRODUCT, SELECT_ALL_PRODUCTS, SELECT_CATEGORY } from 'APP/app/constants';

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
