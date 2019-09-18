import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/';

const getItem = (product) => {
  if (!product) {
    return null;
  }

  const item = product.items[0].product;

  return <CartItem key={item.id} item={item} />;
};

const CartOverview = ({ items }) => {
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
