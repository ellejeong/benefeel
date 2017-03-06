import { combineReducers } from 'redux'

import allProducts from './allProducts';
import selectedProduct from './selectedProductReducer';
import productsInCategory from './selectedCategory';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  selectedProduct,
  allProducts,
  productsInCategory
});

export default rootReducer
