import React from 'react';

import {ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART} from 'APP/app/constants';

const initialState = [];

export default function (state = initialState, action) {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case ADD_TO_CART:
			return action.cart;

        case REMOVE_FROM_CART:
			console.log('ACTION LINE ITEM', action, 'CART', state)
			newState.lineItems.filter(item => {return item.id !== action.lineitemId})
			return newState.lineItems;

        case LOAD_CART:
			return action.cart;

		default:
			return state;

	}
}
