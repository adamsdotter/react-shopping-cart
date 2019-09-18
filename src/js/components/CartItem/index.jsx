import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementItem } from '../../actions'; // correct action
import { HOST } from '../../constants';
import './cart-item.scss';

const mapDispatchToProps = dispatch => {
  return {
    incrementItem: id => dispatch(incrementItem(id))
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

    this.increment = this.increment.bind(this);
  }

  decrement() {
    console.log('-');
  }

  increment() {
    const { count, id } = this.state;
    const { item } = this.props;

    this.props.incrementItem(id);

    this.setState({
      count: count + 1,
      price: (count + 1) * item.prices[0].amount
    });
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
        <button onClick={this.increment}><span className="visually-hidden">Increase</span>+</button>
        <p className="count">{count}</p>
        <button><span className="visually-hidden">Decrease</span>-</button>
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
