import React from 'react';
import axios from 'axios';

import {LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART} from 'APP/app/constants';

export const addToCart = product => ({
    type: ADD_TO_CART,
    product: product
})

export const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product: product
})

export const loadCart = cart => ({
    type: LOAD_CART,
    cart: cart
})

export const receiveCart = (auth) => {
    console.log('AUTH', auth)
    return dispatch => {
        axios.get(`/api/cart/${auth.id}`)
        .then(lineItems => {
            console.log('LINEITEMLIST', lineItems);
            dispatch(loadCart(lineItems.data))
        })
        .catch(console.error())
    };
}
