import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { removeItem } from '../../actions'; // correct action
import { HOST } from '../../constants';
import './cart-item.scss';

// const mapDispatchToProps = dispatch => {
//   return {
//     removeItem: () => dispatch(removeItem())
//   };
// };

class CartItem extends React.Component {

  decrement() {
    console.log('-');
  }

  increment() {
    console.log('+');
  }

  remove() {
    console.log('remove');
  }

  render() {
    const { title, imageUrl } = this.props.item;
    const imgSrc = `${HOST}${imageUrl}`;

    return (
      <div className="cart-item">
        <h4>{title}</h4>
        <img src={imgSrc} alt="" />
        <button><span className="visually-hidden">Increase</span>+</button>
        <p className="count">0</p>
        <button><span className="visually-hidden">Decrease</span>-</button>
        <button><span className="visually-hidden">Remove item</span>x</button>
        <p className="price">Total price: 0</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem;
// export default connect(null, mapDispatchToProps)(CartItem);
