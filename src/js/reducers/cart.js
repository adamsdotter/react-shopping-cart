import { ADDED_TO_CART, CART_COUNT } from '../constants/action-types';

const initialState = {
  count: 0,
  sumTotal: 0,
  items: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CART_COUNT:
      return {
        ...state,
        count: action.payload
      };
    case ADDED_TO_CART:
      return {
        ...state,
        items: state.items.concat(action.payload),
        count: state.count + 1
      };

    default:
      return state
  }
};
