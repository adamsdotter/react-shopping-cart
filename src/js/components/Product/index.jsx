import React from 'react';
import PropTypes from 'prop-types';
import { HOST } from '../../constants';
import './product.scss';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      overlayFocus: false
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onItemClick.bind(this);
  }

  onFocus() {
    this.setState({ overlayFocus: true });
  }

  onBlur() {
    this.setState({ overlayFocus: false });
  }

  onItemClick(id) {
    this.setState({ overlayFocus: false });

    if (typeof id === 'number') {
      this.props.onClick(id);
    }
  }

  render() {
    const { item, inCart } = this.props;
    const { title, prices, imageUrl } = item;
    const imgSrc = `${HOST}${imageUrl}`;
    const price = prices[0] ? `${Math.round(prices[0].amount)} ${prices[0].currency}` : null;

    return (
      <div className="product">
        <img src={imgSrc} alt="" />
        <div onFocus={this.onFocus} onBlur={this.onBlur} className={`product__overlay ${this.state.overlayFocus ? 'focus' : ''}`}>
          <div className="product__inner">
            <h3>{title}</h3>
            <p className="product__price">{price}</p>
            <button className="product__add" disabled={inCart} onClick={() => this.onItemClick(item.id)}>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  inCart: PropTypes.number
}

export default Product;
