import { ADD_TO_CART, ADDED_TO_CART } from '../constants/action-types';
import { HOST } from '../constants';

const addToCart = ({ dispatch }) => next => action => {
  if (action.type === ADD_TO_CART) {
    return fetch(`${HOST}/cart/${action.payload.id}`, {
      method: 'POST',
      body: { id: action.payload.id }
    })
    .then(
      response =>
        response.ok
          ? response.json()
          : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
    )
    .then(cartItems => {
      return dispatch({ type: ADDED_TO_CART, payload: cartItems });
    })
  }
  return next(action);
};

export default addToCart;
