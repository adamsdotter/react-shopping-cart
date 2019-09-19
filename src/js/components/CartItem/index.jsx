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
      count: item.quantity,
      price: item.prices[0].amount || 0
    };

    this.id = item.id;
    this.currency = item.prices[0].currency;
    this.basePrice = item.prices[0].amount;

    this.modify = this.modify.bind(this);
    this.remove = this.remove.bind(this);
  }

  modify(type) {
    const { count } = this.state;
    const quantity = type === 'increase' ? count + 1 : count - 1;

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
    // console.log('this.props.item', this.props.item);
    // console.log('this.props.item', this.props);
    return (
      <div className="cart-item">
        <h4>{title}</h4>
        <img src={imgSrc} alt="" />
        <button onClick={() => this.modify('increase')}><span className="visually-hidden">Increase</span>+</button>
        <p className="count">{count}</p>
        <button onClick={() => this.modify('decrease')}><span className="visually-hidden">Decrease</span>-</button>
        <button onClick={this.remove}><span className="visually-hidden">Remove item</span>x</button>
        <p className="price">{price} {this.currency}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(CartItem);
