import { combineReducers } from 'redux';
import cart from './cart.js';
import products from './products.js';


const rootReducer = combineReducers({
  cart,
  products
})

export default rootReducer;
