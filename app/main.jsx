'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SingleProduct from './components/SingleProduct';
import { receiveProduct, receiveAllProducts } from './action-creators/product';
import Products from './components/Products';
import NavBar from './components/NavBar';
import SingleProductContainer from './containers/SingleProductContainer';



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

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/products" />
        <Route
          path="/products"
          component={Products}
          onEnter={(nextState) => {
            store.dispatch(receiveAllProducts(nextState.params.products));
          }}
        />
        <Route path="/Jokes" component={Jokes} />
        <Route
          path="/products/:productId"
          component={SingleProductContainer}
          onEnter={(nextState) => {
            store.dispatch(receiveProduct(nextState.params.productId));
          }}
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
