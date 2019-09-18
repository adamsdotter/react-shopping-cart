import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modifyItem } from '../../actions';
import { HOST } from '../../constants';
import './cart-item.scss';

const mapDispatchToProps = dispatch => {
  return {
    modifyItem: payload => dispatch(modifyItem(payload))
  };
};


class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      price: props.item.prices[0].amount || 0,
      id: props.item.id
    };

    this.modify = this.modify.bind(this);
  }

  modify(type) {
    const { count, id } = this.state;
    const { item } = this.props;
    const quantity = type === 'increase' ? count + 1 : count - 1;

    this.props.modifyItem({ id, type, quantity });

    this.setState({
      count: quantity,
      price: quantity * item.prices[0].amount
    });
  }

  updateCount() {
    console.log('r');
  }

  remove() {
    console.log('Delete',);
  }

  render() {
    const { title, imageUrl, prices } = this.props.item;
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
        <p className="price">{price} {prices[0].currency}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(CartItem);
