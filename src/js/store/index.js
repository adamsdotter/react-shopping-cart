import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

import fetchProducts from '../middleware/fetchProducts';
import addToCart from '../middleware/addToCart';
import incrementItem from '../middleware/incrementItem';
import decrementItem from '../middleware/decrementItem';

const middleWares = [fetchProducts, addToCart, incrementItem, decrementItem];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleWares))
);

export default store;
