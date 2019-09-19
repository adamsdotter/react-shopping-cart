import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modifyItem, removeItem } from '../../actions';
import { HOST } from '../../constants';
import './cart-item.scss';

const mapDispatchToProps = dispatch => {
  return {
    modifyItem: payload => dispatch(modifyItem(payload)),
    removeItem: payload => dispatch(removeItem(payload))
  };
};

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    const { item } = props;

    this.state = {
      count: item.quantity || 1,
      price: item.price || 0
    };

    this.id = item.id;
    this.basePrice = item.price;

    this.modify = this.modify.bind(this);
    this.remove = this.remove.bind(this);
  }

  modify(type) {
    const { count } = this.state;
    const isDecrease = type === 'decrease';

    if (isDecrease && count === 1) {
      return;
    }

    const quantity = isDecrease ? count - 1 : count + 1;

    this.props.modifyItem({ id: this.id, type, quantity });

    this.setState({
      count: quantity,
      price: quantity * this.basePrice
    });
  }

  remove() {
    const { count, price } = this.state;

    this.props.removeItem({ id: this.id, count, price });
  }

  render() {
    const { title, imageUrl } = this.props.item;
    const { count, price } = this.state;
    const imgSrc = `${HOST}${imageUrl}`;

    return (
      <div className="cart-item">
        <img src={imgSrc} alt="" />
        <h4>{title}</h4>

        <p className="cart-item__price">{price}</p>

        <div className="cart-item__edit">
          <button className="cart-item__modify" onClick={() => this.modify('decrease')}>
            <span className="visually-hidden">Decrease</span>
            <span className="icon-dec" aria-hidden>&#10134;</span>
          </button>
          <p className="cart-item__count">{count}</p>
          <button className="cart-item__modify" onClick={() => this.modify('increase')}>
            <span className="visually-hidden">Increase</span>
            <span className="icon-inc" aria-hidden>&#10133;</span>
          </button>
          <button className="cart-item__remove" onClick={this.remove}>
            <span className="visually-hidden">Remove item</span>
            <span className="icon-rem" aria-hidden>&#128465;</span>
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(CartItem);
