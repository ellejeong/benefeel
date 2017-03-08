'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { connect, Provider } from 'react-redux'

import store from './store'
import {onAppEnter, onCartEnter, onCategoryEnter, onDashboardEnter, onProductEnter} from './onEnterFunctions';
import Products from './components/Products';
import SingleProductContainer from './containers/SingleProductContainer';
import OrderHistoryContainer from './containers/OrderHistoryContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import UserPage from './components/UserPage';
import UserProfile from './components/UserProfile'
import UserLogin from './components/UserLogin'
import Home from './components/Home'


const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
  <div>
    <div>
      <NavBar />
      {children}
    </div>
  </div>
)


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:productId" component={SingleProductContainer} onEnter={onProductEnter} />
        <Route path="/categories/:category" component={Products} onEnter={onCategoryEnter} />
        <Route path="/cart" component={Cart} onEnter={onCartEnter} />
        <Route path="/orderhistory" component={OrderHistoryContainer} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={UserLogin} />
        <Route path="/dashboard" component={UserPage} onEnter={onDashboardEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
