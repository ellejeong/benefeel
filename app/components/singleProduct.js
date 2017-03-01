import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';

export class singleProduct extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="container flexbox-container">
        <div>
          <h1>{this.props.selectedProduct.title}</h1>
        </div>
        <div>
          <h2>Product Description:</h2>
          <p>{this.props.selectedProduct.description}</p>
          <p>${this.props.selectedProduct.price}.00</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  };
};

export default connect(mapStateToProps)(singleProduct);
