import { combineReducers } from 'redux'
import selectedProductReducer from './selectedProductReducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  selectedProduct: selectedProductReducer
});

export default rootReducer
