import { MODIFY_ITEM, ITEM_INCREMENTED, ITEM_DECREMENTED  } from '../constants/action-types';
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
          quantity: 1//action.payload.quantity
        })
      })
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(cart => {
        const type = action.payload.type === 'decrease' ? ITEM_DECREMENTED : ITEM_INCREMENTED;
        console.log(type,' cart>>>>>', cart);

        // const item = cart.items[0];
        // const price = Math.round(item.product.prices[0].amount);
        //
        // const product = {
        //   id: item.product.id,
        //   title: item.product.title,
        //   imageUrl: item.product.imageUrl,
        //   quantity: item.quantity,
        //   price,
        //   totalPrice: item.quantity * price
        // };

        // dispatch({ type, payload: product});

        dispatch({ type, payload: {
          sumTotal: Math.round(cart.summery[0].amount),
          count: cart.items.lenght
          // item: cart.items[0] // todo: needed?
        }});
      })
  }
  return next(action);
};

export default modifyItem;
