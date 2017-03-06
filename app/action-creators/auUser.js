import React from 'react';
import axios from 'axios';

import {SELECT_PASTORDER} from 'APP/app/constants';

export const selectPastOrder = order => ({
	type: SELECT_PASTORDER,
	order: order
});


export const receivePastOrder = orderId => {
	return dispatch => {
		axios.get(`/api/orders/order/${orderId}`)
			.then(order => {
				dispatch(selectPastOrder(order.data));
			})
			.catch(console.error());
	};
};
