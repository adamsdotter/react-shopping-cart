import { FETCH_PRODUCTS, ADD_ITEM, MODIFY_ITEM, REMOVE_ITEM } from '../constants/action-types';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export const addToCart = payload => ({ type: ADD_ITEM, payload });

export const modifyItem = payload => ({ type: MODIFY_ITEM, payload });
export const removeItem = payload => ({ type: REMOVE_ITEM, payload });
