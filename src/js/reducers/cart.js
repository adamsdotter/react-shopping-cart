import { ITEM_ADDED, ITEM_REMOVED, ITEM_INCREMENTED, ITEM_DECREMENTED } from '../constants/action-types';

const initialState = {
  count: 0,
  sumTotal: 0,
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
        sumTotal: state.sumTotal + action.payload.summery[0].amount
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
      // console.log('increment!', action.payload.item);
      //

      return {
        ...state,
        count: state.count + 1, //action.payload.item, // allItemsCount,
        sumTotal: state.sumTotal + action.payload.sumTotal
        // items: allItems
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
