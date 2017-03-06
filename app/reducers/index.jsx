import { combineReducers } from 'redux'

import allProducts from './allProducts';
import allReviews from './allReviews';
import selectedProduct from './selectedProductReducer';
import productsInCategory from './selectedCategory';
import cart from './cart';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  selectedProduct,
  allProducts,
<<<<<<< HEAD
  productsInCategory,
  cart
=======
  allReviews,
  productsInCategory
>>>>>>> master
});

export default rootReducer
