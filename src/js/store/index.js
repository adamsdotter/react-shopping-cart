import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

import fetchProducts from '../middleware/fetchProducts';
import addToCart from '../middleware/addToCart';
import modifyItem from '../middleware/modifyItem';

const middleWares = [fetchProducts, addToCart, modifyItem];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleWares))
);

export default store;
