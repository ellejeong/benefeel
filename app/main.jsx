'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios';

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { receiveProduct, selectAllProducts, receiveCategories } from './action-creators/product';
import { receiveCart } from './action-creators/cart';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';
import SingleProductContainer from './containers/SingleProductContainer';
import CategoriesContiner from './containers/CategoriesContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';


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
    })
    .catch();
};

const onProductEnter = nextState => {
  store.dispatch(receiveProduct(nextState.params.productId));
};

const onCategoryEnter = nextState => {
  store.dispatch(receiveCategories(nextState.params.category));
};

const onCartEnter = nextState => {
  console.log(nextState.params)
  store.dispatch(receiveCart(nextState.params.orderId));
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onAppEnter}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} />
        <Route path="/Jokes" component={Jokes} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={onProductEnter} />
        <Route path="/categories/:category" component={Products} onEnter={onCategoryEnter} />
        <Route path="/cart" component={Cart} onEnter={onCartEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
