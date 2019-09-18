import { ADD_TO_CART, CART_COUNT } from '../constants/action-types';

const initialState = {
  expanded: false,
  count: 0,
  sumTotal: 0,
  products: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CART_COUNT:
      return {
        ...state,
        count: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state
  }
};
