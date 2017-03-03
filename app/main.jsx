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
import singleProduct from './components/singleProduct';
import { receiveProduct, receiveAllProducts, selectAllProducts } from './action-creators/product';
import Products from './components/Products';
import NavBar from './components/NavBar';


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

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onAppEnter}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products} />
        <Route path="/Jokes" component={Jokes} />
        <Route path="/products/:productId" component={singleProduct} onEnter={onProductEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
