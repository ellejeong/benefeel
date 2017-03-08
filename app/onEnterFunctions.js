import React from 'react'
import axios from 'axios'

import store from './store'
import { receiveProduct, selectAllProducts, receiveCategories, selectAllReviews } from './action-creators/product';
import { receiveCart } from './action-creators/cart';

export const onAppEnter = () => {
  axios.get('/api/products')
    .then(products => {
      store.dispatch(selectAllProducts(products.data));
    }).then(()=>{
      return axios.get('/api/reviews')
    }).then(reviews => {
      store.dispatch(selectAllReviews(reviews.data));
    }).catch();
};

export const onProductEnter = nextState => {
  store.dispatch(receiveProduct(nextState.params.productId));
};

export const onCategoryEnter = nextState => {
  store.dispatch(receiveCategories(nextState.params.category));
};

export const onCartEnter = nextState => {
  let storeState = store.getState();
  if (storeState.auth !== '' && storeState.auth !== null){
  store.dispatch(receiveCart(storeState.auth));
  }
}

export const onDashboardEnter = nextState => {
  let storeState = store.getState();
  if (storeState.auth === '' || storeState.auth === null){
    console.log('Please login to view this page!');
  }
}

