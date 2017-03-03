import { combineReducers } from 'redux'

import allProducts from './allProducts';
import selectedProduct from './selectedProductReducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  selectedProduct,
  allProducts
});

export default rootReducer
