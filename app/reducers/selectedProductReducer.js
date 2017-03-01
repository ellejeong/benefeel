import React from 'react';

import SELECT_PRODUCT from 'APP/app/constants';

export default function selectedProductReducer(state = null, action) {
	let newState = Object.assign({}, state);
	switch (action.type) {

		case SELECT_PRODUCT: {
			console.log('reached SELECT_PRODUCT');
			newState.selectedProduct = action.selectedProduct;
			break;
		}
		default: {
	console.log('new state: ', newState);
			return state;
		}
	}
	return newState;
}
