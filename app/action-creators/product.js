import React from 'react';
import axios from 'axios';

import { SELECT_PRODUCT, SELECT_ALL_PRODUCTS } from 'APP/app/constants';

export const selectAllProducts = products => ({
	type: SELECT_ALL_PRODUCTS,
	products: products
});

export const selectProduct = product => ({
	type: SELECT_PRODUCT,
	selectedProduct: product
});

export const receiveAllProducts = () => {
	return dispatch => {
		axios.get('/api/products')
			.then(products => {
				dispatch(selectAllProducts(products.data));
			})
			.catch();
	};
};

export const receiveProduct = productId => {
	return dispatch => {
		axios.get(`/api/products/${productId}`)
			.then(product => {
				dispatch(selectProduct(product.data));
			})
			.catch(console.error());
	};
};
