'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios';

import store from './store'
import WhoAmI from './components/WhoAmI'

import { receiveProduct, selectAllProducts, receiveCategories, selectAllReviews } from './action-creators/product';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';
import Login from './components/Login';
import SingleProductContainer from './containers/SingleProductContainer';
import CategoriesContiner from './containers/CategoriesContainer';
import OrderHistoryContainer from './containers/OrderHistoryContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import UserPage from './components/UserPage';
import UserProfile from './components/UserProfile'


const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
  <div>
    <div>
      <NavBar />
    </div>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
  </div>
)

const onAppEnter = () => {
  axios.get('/api/products')
    .then(products => {
      store.dispatch(selectAllProducts(products.data));
    }).then(()=>{
      return axios.get('/api/reviews')
    }).then(reviews => {
      store.dispatch(selectAllReviews(reviews.data));
    }).catch();
};

const onProductEnter = nextState => {
  store.dispatch(receiveProduct(nextState.params.productId));
};

const onCategoryEnter = nextState => {
  store.dispatch(receiveCategories(nextState.params.category));
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onAppEnter}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={onProductEnter} />
        <Route path="/categories/:category" component={Products} onEnter={onCategoryEnter} />
        <Route path="/users/:id" component={UserPage} />
        <Route path="/orderhistory" component={OrderHistoryContainer} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/cart" component={Cart} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
