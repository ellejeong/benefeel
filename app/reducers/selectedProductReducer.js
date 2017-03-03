import React from 'react';

import {SELECT_PRODUCT} from 'APP/app/constants';

const initialState = {};

export default function selectedProductReducer(state = initialState, action) {

	switch (action.type) {

		case SELECT_PRODUCT:
			return action.selectedProduct;

		default:
			return state;

	}
}
