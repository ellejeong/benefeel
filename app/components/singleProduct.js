import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';

export class singleProduct extends Component {


  render() {
    const selectedProduct = this.props.selectedProduct;

    return (
      <div className="container flexbox-container">
        <div>
          <h1>{selectedProduct.title}</h1>
        </div>
        <div>
          <h2>Product Description:</h2>
          <p>{selectedProduct.description}</p>
          <p>${selectedProduct.price}.00</p>
        </div>
        <div>
        <h5>Quantity:</h5>
        <select className="custom-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
        </div>
        <div>
          <button type="button" className="btn btn-default" onClick={() => console.log('hi')}>Add To Cart</button>
        </div>
        <div>
          <h2>Reviews:</h2>
          <p>Some reviews here</p>
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
