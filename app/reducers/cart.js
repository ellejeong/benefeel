import React from 'react';

import {ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART} from 'APP/app/constants';

const initialState = [];

export default function (state = initialState, action) {
console.log('ACTION', action)
	switch (action.type) {

		case ADD_TO_CART:
			return action.lineItem;

        case REMOVE_FROM_CART:
			return action.lineItem;

        case LOAD_CART:
            console.log('LOAD CART ACTION', action)
			return action.lineItem;

		default:
			return state;

	}
}
