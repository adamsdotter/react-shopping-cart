import { ITEM_ADDED, ITEM_REMOVED, ITEM_INCREMENTED, ITEM_DECREMENTED } from '../constants/action-types';

const initialState = {
  count: 0,
  sumTotal: 0,
  currency: 'kr',
  items: []
};

const productModel = data => {
  return {
    ...data.product,
    quantity: data.quantity
  };
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ITEM_ADDED:
      const addedItem = productModel(action.payload.items[0]);

      return {
        ...state,
        items: state.items.concat(addedItem),
        count: state.count + 1,
        sumTotal: state.sumTotal + action.payload.summery[0].amount,
        currency: action.payload.summery[0].currency
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
