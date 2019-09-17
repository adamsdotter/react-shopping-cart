// import { PRODUCTS_LOADED, FETCH_PRODUCTS } from '../constants/action-types';

const getProductsMiddleware = ({ dispatch }) => next => action => {
  // fetch prods
  return next(action);
};

export default getProductsMiddleware;
