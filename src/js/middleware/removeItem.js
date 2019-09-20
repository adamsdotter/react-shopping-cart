import { REMOVE_ITEM, ITEM_REMOVED } from '../constants/action-types';
import { HOST } from '../constants';

const removeItem = ({ dispatch }) => next => action => {
  if (action.type === REMOVE_ITEM) {
    fetch(`${HOST}/cart/${action.payload.id}`, { method: 'DELETE' })
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(cart => {
        dispatch({ type: ITEM_REMOVED, payload: {
          sumTotal: action.payload.price * action.payload.count,
          count: action.payload.count,
          id: action.payload.id
        }});
      })
  }
  return next(action);
};

export default removeItem;
