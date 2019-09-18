import React from 'react';
import PropTypes from 'prop-types';
import { HOST } from '../../constants';
import './product.scss';

const Product = ({ item, onClick }) => {
  const { title, prices, imageUrl } = item;
  const imgSrc = `${HOST}${imageUrl}`;
  const price = prices[0] ? `${prices[0].amount} ${prices[0].currency}` : null;

  return (
    <div className="product">
      <h3>{title}</h3>
      <img src={imgSrc} alt="" />
      <p>{price}</p>
      <button onClick={()=>onClick(item.id)}>Add to cart</button>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Product;
