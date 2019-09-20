import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HOST } from '../../constants';
import './product.scss';

function Product({ item, inCart, onClick }) {
  const [overlayFocus, setOverlayFocus] = useState(false);

  const { title, prices, imageUrl } = item;
  const imgSrc = `${HOST}${imageUrl}`;
  const price = prices[0] ? `${Math.round(prices[0].amount)} ${prices[0].currency}` : null;

  const onFocus = () => setOverlayFocus(true);
  const onBlur = () => setOverlayFocus(false);

  const onItemClick = (id) => {
    setOverlayFocus(false);

    if (typeof id === 'number') {
      onClick(id);
    }
  }

  return (
    <div className="product">
      <img src={imgSrc} alt="" />
      <div onFocus={onFocus} onBlur={onBlur} className={`product__overlay ${overlayFocus ? 'focus' : ''}`}>
        <div className="product__inner">
          <h3>{title}</h3>
          <p className="product__price">{price}</p>
          <button className="product__add" disabled={inCart} onClick={() => onItemClick(item.id)}>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  inCart: PropTypes.number
}

export default Product;
