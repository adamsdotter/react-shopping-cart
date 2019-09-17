import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/index';
import Product from '../Product';
import './products.scss';

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product))
  };
};

class ConnectedProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      error: null
    };

    this.addProductToCart = this.addProductToCart.bind(this);
  }

  products() {
    const { error } = this.state;
    let products = this.state.products;

    if (products.length) {
      products = this.state.products.map((item) => {
        return <li key={item.id}><Product item={item} onClick={this.addProductToCart} /></li>;
      });
    }

    return error ? error : products;
  }

  addProductToCart(item) {
    this.props.addToCart({
      title: item.title
    });
  }

  fetchProducts() {
    this.setState({ error: null });

    fetch('http://localhost:8181/products')
      .then(
        response =>
          response.ok
            ? response.json()
            : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then(products => {
        this.setState({ products })
      })
      .catch(err => {
        const error = `Error: ${err}`;
        this.setState({ error });
      });
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

const Products = connect(null, mapDispatchToProps)(ConnectedProducts);

export default Products;
