import { ADD_TO_CART, ADDED_TO_CART } from '../constants/action-types';
import { HOST } from '../constants';

const addToCart = ({ dispatch }) => next => action => {
  if (action.type === ADD_TO_CART) {

    fetch(`${HOST}/cart/${action.payload}`, { method: 'POST' })
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(cart => {
        dispatch({ type: ADDED_TO_CART, payload: cart });
      })
  }
  return next(action);
};

export default addToCart;
