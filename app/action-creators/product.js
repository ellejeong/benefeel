import React from 'react';
import axios from 'axios';

import { SELECT_PRODUCT } from 'APP/app/constants';

export const selectProduct = product => ({
	type: SELECT_PRODUCT,
	selectedProduct: product
});

export const asyncSelectProduct = productId => {
	return dispatch => {
		axios.get(`/api/products/${productId}`)
			.then(product => {
				dispatch(selectProduct(product.data));
			})
			.catch(console.error());
	};
};
