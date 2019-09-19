import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

import fetchProducts from '../middleware/fetchProducts';
import addToCart from '../middleware/addToCart';
import modifyItem from '../middleware/modifyItem';
import removeItem from '../middleware/removeItem';

const middleWares = [fetchProducts, addToCart, modifyItem, removeItem];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleWares))
);

export default store;
