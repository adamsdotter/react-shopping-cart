import React from 'react';
import { connect } from 'react-redux';
import { addToCart, fetchProducts } from '../../actions/index';
import Product from '../Product';
import './products.scss';

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product)),
    fetchProducts: () => dispatch(fetchProducts())
  };
};

const mapStateToProps = state => {
  return { products: state.products };
};

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };

    this.onClick = this.onClick.bind(this);
  }

  products() {
    const { error } = this.state;
    let products = this.props.products;

    if (products.length) {
      products = products.map((item) => {
        return <li key={item.id}><Product item={item} onClick={this.onClick} /></li>;
      });
    }

    return error ? error : products;
  }

  onClick(item) {
    this.props.addToCart({
      title: item.title
    });
  }

  fetchProducts() {
    this.setState({ error: null });
    this.props.fetchProducts();
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div className="products">
        <h1>Products</h1>
        <ul className="product-list">{this.products()}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
