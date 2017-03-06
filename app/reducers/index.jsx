import { combineReducers } from 'redux'

import allProducts from './allProducts';
import selectedProduct from './selectedProductReducer';
import productsInCategory from './selectedCategory';
import cart from './cart';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  selectedProduct,
  allProducts,
  productsInCategory,
  cart
});

export default rootReducer
