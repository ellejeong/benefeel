import React from 'react';

import { SELECT_CATEGORY } from 'APP/app/constants';

const initialState = [];

export default function (state = initialState, action) {

	switch (action.type) {

		case SELECT_CATEGORY:
			return action.products;

		default:
			return state;
	}
}
