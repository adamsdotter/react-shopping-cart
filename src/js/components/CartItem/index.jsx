import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modifyItem, removeItem } from '../../actions';
import { HOST } from '../../constants';
import './cart-item.scss';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { title, imageUrl } = item;
  const imgSrc = `${HOST}${imageUrl}`;
  const [count, setCount] = useState(item.quantity);

  // TODO
  // console.log('render CartItem() count', count, item.title);

  const modify = (type) => {
    const isDecrease = type === 'decrease';

    if (isDecrease && count === 1) {
      return;
    }

    const quantity = isDecrease ? count - 1 : count + 1;

    dispatch(modifyItem({ id: item.id, type, quantity }));
    setCount(quantity);
  }

  const remove = () => dispatch(removeItem({ id: item.id, count, price: item.price }));


  return (
    <div className="cart-item">
      <img src={imgSrc} alt="" />
      <h4>{title}</h4>

      <p className="cart-item__price">{item.totalPrice}</p>

      <div className="cart-item__edit">
        <button className="cart-item__modify" onClick={() => modify('decrease')}>
          <span className="visually-hidden">Decrease</span>
          <span className="icon-dec" aria-hidden>&#10134;</span>
        </button>
        <p className="cart-item__count">{count}</p>
        <button className="cart-item__modify" onClick={() => modify('increase')}>
          <span className="visually-hidden">Increase</span>
          <span className="icon-inc" aria-hidden>&#10133;</span>
        </button>
        <button className="cart-item__remove" onClick={remove}>
          <span className="visually-hidden">Remove item</span>
          <span className="icon-rem" aria-hidden>&#128465;</span>
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}
