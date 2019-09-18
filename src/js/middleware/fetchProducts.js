import { PRODUCTS_LOADED, FETCH_PRODUCTS } from '../constants/action-types';
import { HOST } from '../constants';

const fetchProducts = ({ dispatch }) => next => action => {
  if (action.type === FETCH_PRODUCTS) {
    fetch(`${HOST}/products`)
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(products => {
        dispatch({ type: PRODUCTS_LOADED, payload: products });
      })
  }
  return next(action);
};

export default fetchProducts;
