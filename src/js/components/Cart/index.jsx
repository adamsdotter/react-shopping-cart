import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartOverview from '../CartOverview/'
import './cart.scss';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const { count, items, sumTotal, currency } = cart;

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
