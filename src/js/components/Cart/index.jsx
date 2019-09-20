import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartOverview from '../CartOverview/'
import './cart.scss';

const mapStateToProps = state => {
  return {
    count: state.cart.count,
    items: state.cart.items,
    sumTotal: state.cart.sumTotal,
    currency: state.cart.currency
  };
};

function Cart({ items, count, sumTotal, currency }) {
  const [expanded, setExpanded] = useState(true);
  const [currentCount, setCurrentCount] = useState(0);
  const [animateIcon, setAnimateIcon] = useState(false);

    const toggleViewCart = () => {
      const exp = !expanded;
      setExpanded(exp);
    }

    useEffect(
      () => {
        let timer = null;

        if (currentCount < count) {
          setAnimateIcon(true);
        }

        setCurrentCount(count);

        timer = setTimeout(() => {
          setAnimateIcon(false);
        }, 500);

        return () => {
          clearTimeout(timer)
        }
      }, [count, currentCount]

    )

  return (
    // <div className={`cart ${this.state.expanded ? 'cart--expanded' : 'cart--collapsed'}`}>
    <div className="cart">
      <h1 className="visually-hidden">Avensia's webshop</h1>
      <button className="toggle-cart" onClick={toggleViewCart}>
        <span className="toggle-cart__text">View cart</span>
        <span
          className={`toggle-cart__icon ${animateIcon ? 'animate' : ''}`}
          role="img"
          aria-hidden>
          &#128722;
        </span>
        { count }
      </button>

      { expanded ? <CartOverview items={items} sumTotal={sumTotal} currency={currency} /> : null }
    </div>
  );
}

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  sumTotal: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Cart);
