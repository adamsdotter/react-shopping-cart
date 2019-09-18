import { ADDED_TO_CART, ITEM_INCREMENTED, ITEM_DECREMENTED } from '../constants/action-types';

const initialState = {
  count: 0,
  sumTotal: 0,
  items: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADDED_TO_CART:
      const allItems = state.items.concat(action.payload);
      return {
        ...state,
        items: allItems,
        count: state.count + 1,
        sumTotal: state.sumTotal + action.payload.summery[0].amount
      };
    case ITEM_INCREMENTED:
      return {
        ...state,
        count: state.count + 1,
        sumTotal: state.sumTotal + action.payload.sumTotal
      };

    case ITEM_DECREMENTED:
      return {
        ...state,
        count: state.count - 1,
        sumTotal: state.sumTotal - action.payload.sumTotal
      };

    default:
      return state
  }
};
