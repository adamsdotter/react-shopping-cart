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
        console.log('ADDED ITEM >:', cart.items);

        const item = cart.items[0];
        const price = parseInt(Math.round(item.product.prices[0].amount), 10);
        const { id, title, imageUrl, prices } = item.product;

        const product = {
          id,
          title,
          imageUrl,
          price,
          quantity: item.quantity,
          currency: prices[0].currency,
          totalPrice: item.quantity * price
        };

        dispatch({ type: ITEM_ADDED, payload: product });
      })
  }
  return next(action);
};

export default addToCart;
