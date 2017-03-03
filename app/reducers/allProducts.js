import React from 'react';

import {SELECT_ALL_PRODUCTS} from 'APP/app/constants';

const initialState = [];

export default function allProducts(state = initialState, action) {

	switch (action.type) {

		case SELECT_ALL_PRODUCTS:
			return action.products;

		default:
			return state;

	}
}
