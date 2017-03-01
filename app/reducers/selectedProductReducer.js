import React from 'react';

import SELECT_PRODUCT from 'APP/app/constants';

const initialState = {
	selectedProduct: {}
};

export default function selectedProductReducer(state = initialState, action) {
	let newState = Object.assign({}, state);
	console.log('ACTION: ', action);
	console.log(action.type === 'SELECT_PRODUCT')

	switch (action.type) {

		case 'SELECT_PRODUCT':
			console.log('reached SELECT_PRODUCT');
			newState.selectedProduct = action.selectedProduct;
			break;

		default:
	// console.log('new state: ', newState);
			return state;

	}
	return newState;
}
