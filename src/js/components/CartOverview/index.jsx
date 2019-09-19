import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/';
import './cart-overview.scss';

const CartOverview = ({ items, sumTotal, currency }) => {
  return (
    <div className="cart-overview">
      { items.length
        ? (
          <div>
            <ul>{items.map(item => <li key={item.id}><CartItem item={item} /></li>)}</ul>
            <p className="cart-sum">Total: <span>{sumTotal} {currency}</span></p>
          </div>
        )
        : <p className="empty-cart">Your cart is empty <span aria-hidden>&#128546;</span></p>
      }
    </div>
  );
}

CartOverview.propTypes = {
  items: PropTypes.array.isRequired,
  sumTotal: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default CartOverview;
