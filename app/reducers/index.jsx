import { combineReducers } from 'redux'

import allProducts from './allProducts';
import allReviews from './allReviews';
import selectedProduct from './selectedProductReducer';
import productsInCategory from './selectedCategory';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  selectedProduct,
  allProducts,
  allReviews,
  productsInCategory
});

export default rootReducer
