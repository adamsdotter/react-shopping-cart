import { FETCH_PRODUCTS, ADD_TO_CART, INCREMENT_ITEM } from '../constants/action-types';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export const addToCart = payload => ({ type: ADD_TO_CART, payload });

export const incrementItem = payload => ({ type: INCREMENT_ITEM, payload });
