import { ITEM_ADDED, ITEM_REMOVED, ITEM_MODIFIED } from '../constants/action-types';

const initialState = {
  count: 0,
  sumTotal: 0,
  currency: 'kr',
  items: []
};

const getSumTotal = (items) => {
  return items.reduce((acc, item) => {
    return acc += item.totalPrice;
  }, 0);
};

const updateItemList = (elems, modifiedItem) => {
  const items = {...elems};

  return Object.keys(items).map(i => {
    return items[i].id !== modifiedItem.id ? items[i] : {
      ...items[i],
      quantity: modifiedItem.quantity,
      totalPrice: modifiedItem.totalPrice
    }
  });
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

    case ITEM_MODIFIED:
      const updatedItems = updateItemList(state.items, action.payload.item);

      return {
        ...state,
        count: action.payload.type === 'increase' ? state.count + 1 : state.count - 1,
        sumTotal: getSumTotal(updatedItems),
        items: updatedItems
      };

    default:
      return state
  }
};
