import React from 'react';
import axios from 'axios';

import {LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART} from 'APP/app/constants';

export const addToCart = product => ({
    type: ADD_TO_CART,
    product: product
})

export const removeFromCart = (lineitemId, cart) => ({
    type: REMOVE_FROM_CART,
    lineitemId: lineitemId,
    cart: cart
})

export const loadCart = lineItems => ({
    type: LOAD_CART,
    cart: lineItems
})

export const receiveCart = (auth) => {
    return dispatch => {
        axios.get(`/api/orders/cart/${auth.id}`)
        .then(order => {
            dispatch(loadCart(order.data))
        })
        .then()
        .catch(console.error())
    };
}

export const asyncRemoveFromCart = (lineitem, cart) => {
    let lineitemId = lineitem.id;
    return dispatch => {
        axios.delete(`/api/orders/cartitem/${lineitem.id}`)
        .then(() => {
            console.log('in the async action creator')
            dispatch(removeFromCart(lineitemId, cart))
        })
        .catch(console.error())
    };
}

