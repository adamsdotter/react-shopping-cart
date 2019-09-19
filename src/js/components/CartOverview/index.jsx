import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/';

const getItem = (item) => {
  // console.log('item =>>>>>', item);
  return <CartItem key={item.id} item={item} />
};

const CartOverview = ({ items }) => {
  // console.log('ITEMS', items);
  return (
    <div className="cart-overview">
      <h1>ALL PRODUCTS</h1>
      { items ? items.map(item => getItem(item)) : null }
    </div>
  );
}

CartOverview.propTypes = {
  items: PropTypes.array.isRequired
}

export default CartOverview;
