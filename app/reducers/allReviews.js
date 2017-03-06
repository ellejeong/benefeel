import React from 'react';

import {SELECT_ALL_REVIEWS, ADD_REVIEW_TO_PRODUCT} from 'APP/app/constants';

const initialState = [];

export default function allReviews(state = initialState, action) {

	switch (action.type) {

		case SELECT_ALL_REVIEWS:
			return action.allReviews;

		default:
			return state;

	}
}
