import { PRODUCTS_LOADED, FETCH_PRODUCTS } from '../constants/action-types';

const getProductsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_PRODUCTS) {
    return fetch('http://localhost:8181/products')
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(products => {
        return dispatch({ type: PRODUCTS_LOADED, payload: products });
      })
  }
  return next(action);
};

export default getProductsMiddleware;
