import { PRODUCTS_LOADED } from '../constants/action-types';

const initialState = {
  items: []
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };

    default:
      return state
  }
};
