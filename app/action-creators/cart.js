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

export const loadCart = lineItems => ({
    type: LOAD_CART,
    cart: lineItems
})

export const receiveCart = (auth) => {
    console.log('AUTH', auth)
    return dispatch => {
        axios.get(`/api/orders/cart/${auth.id}`)
        .then(lineItems => {
            console.log('LINEITEMLIST', lineItems);
            dispatch(loadCart(lineItems.data))
        })
        .catch(console.error())
    };
      // axios.get(`/api/orders/order/${this.orderid}`)
        // .then(res => {
        //     console.log('RES DATA', res.data);
        //   return res.data;
        // })
        // .then(lineItems => {
        //   this.setState({
        //       lineItemList: lineItems
        //   })
        //   console.log('LINEITEMLIST', this.state.lineItemList);

        // })
}
