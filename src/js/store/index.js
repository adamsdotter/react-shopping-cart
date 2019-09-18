import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

import fetchCartCount from '../middleware/fetchCartCount';
import fetchProducts from '../middleware/fetchProducts';
import addToCart from '../middleware/addToCart';
const middleWares = [fetchCartCount, fetchProducts, addToCart];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleWares))
);

export default store;
