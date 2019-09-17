import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import getProductsMiddleware from '../middleware/getProductsMiddleware';
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [getProductsMiddleware];

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleWares))
);

export default store;
