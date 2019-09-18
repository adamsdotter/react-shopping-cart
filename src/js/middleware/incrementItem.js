import { INCREMENT_ITEM, ITEM_ADDED } from '../constants/action-types';
import { HOST } from '../constants';

const incrementItem = ({ dispatch }) => next => action => {
  if (action.type === INCREMENT_ITEM) {
    fetch(`${HOST}/cart/${action.payload}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: 1
        })
      })
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(cart => {
        console.log('INCREMENTED item>>>>>', cart);
        dispatch({ type: ITEM_ADDED, payload: {
          sumTotal: cart.summery[0].amount,
          count: cart.items.lenght
        }});
      })
  }
  return next(action);
};

export default incrementItem;
