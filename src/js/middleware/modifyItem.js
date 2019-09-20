import { MODIFY_ITEM, ITEM_MODIFIED  } from '../constants/action-types';
import { HOST } from '../constants';

const modifyItem = ({ dispatch }) => next => action => {
  if (action.type === MODIFY_ITEM) {
    fetch(`${HOST}/cart/${action.payload.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: action.payload.quantity
        })
      })
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(cart => {
        const item = cart.items[0];
        const price = parseInt(Math.round(item.product.prices[0].amount), 10);

        const product = {
          id: item.product.id,
          quantity: item.quantity,
          totalPrice: item.quantity * price
        };

        dispatch({ type: ITEM_MODIFIED, payload: { item: product, type: action.payload.type }});
      })
  }
  return next(action);
};

export default modifyItem;
