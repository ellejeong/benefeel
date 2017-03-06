import React from 'react';

import {ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART} from 'APP/app/constants';

const initialState = [];

export default function (state = initialState, action) {

	switch (action.type) {

		case ADD_TO_CART:
			return action.cart;

        case REMOVE_FROM_CART:
			return action.cart;

        case LOAD_CART:
            console.log('LOAD CART ACTION', action)
            //action.cart is an array of line items
			return action.cart;

		default:
			return state;

	}
}
