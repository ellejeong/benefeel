import React from 'react';
import axios from 'axios';

import {ADD_TO_CART, REMOVE_FROM_CART} from 'APP/app/constants';

export const addToCart = product => ({
    type: ADD_TO_CART,
    product: product
})

export const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product: product
})

export const receiveCart = () => ({
    axios.get(`/api/orders/order/${this.orderid}`)
    .then(res => {
        console.log('RES DATA', res.data);
        return res.data;
    })
    .then(lineItems => {
        this.setState({
            lineItemList: lineItems
        })
        console.log('LINEITEMLIST', this.state.lineItemList);
    })
})
