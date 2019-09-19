import { ADD_ITEM, ITEM_ADDED } from '../constants/action-types';
import { HOST } from '../constants';

const addToCart = ({ dispatch }) => next => action => {
  if (action.type === ADD_ITEM) {

    fetch(`${HOST}/cart/${action.payload}`, { method: 'POST' })
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(cart => {
        dispatch({ type: ITEM_ADDED, payload: cart });
      })
  }
  return next(action);
};

export default addToCart;
