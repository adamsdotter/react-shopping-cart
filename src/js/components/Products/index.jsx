import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchProducts } from '../../actions/';
import Product from '../Product';
import './products.scss';

export default function Products() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const products = state.products.items;
  const cartItems = state.cart.items;

  const getGroducts = () => {
    return products.length
      ? products.map((item) => (
        <li key={item.id}>
          <Product item={item} onClick={onClick.bind(this)} inCart={isItemInCart(item.id)} />
        </li>
      ))
      : products;
  }

  const isItemInCart = (id) => cartItems.filter(el => el.id === id).length;
  const onClick = (id) => dispatch(addToCart(id));

  useEffect(
    () => {
      if (!products.length) {
        dispatch(fetchProducts());
      }
    }, [products]
  )

  return (
    <div className="products">
      <h2>Our products</h2>
      <ul className="product-list">{getGroducts()}</ul>
    </div>
  );
}
