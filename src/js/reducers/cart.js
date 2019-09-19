import { ITEM_ADDED, ITEM_REMOVED, ITEM_INCREMENTED, ITEM_DECREMENTED } from '../constants/action-types';

const initialState = {
  count: 0,
  sumTotal: 0,
  currency: 'kr',
  items: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ITEM_ADDED:
      return {
        ...state,
        items: state.items.concat(action.payload),
        count: state.count + 1,
        sumTotal: state.sumTotal + action.payload.price,
        currency: action.payload.currency
      };

    case ITEM_REMOVED:
      const clone = { ...state };

      return {
        ...state,
        count: parseInt(state.count, 10) - action.payload.count,
        sumTotal: state.sumTotal - action.payload.sumTotal,
        items: clone.items.filter(el => el.id !== action.payload.id)
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
