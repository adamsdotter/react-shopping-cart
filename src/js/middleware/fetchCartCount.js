import { CART_COUNT, FETCH_CART_COUNT } from '../constants/action-types';
import { HOST } from '../constants';

const fetchCartCount = ({ dispatch }) => next => action => {
  if (action.type === FETCH_CART_COUNT) {
    return fetch(`${HOST}/cart`)
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(res => {
        return dispatch({ type: CART_COUNT, payload: res.items.length });
      })
  }
  return next(action);
};

export default fetchCartCount;
