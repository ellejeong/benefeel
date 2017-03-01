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
        <div className="btn-group">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quantity <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
          </ul>
        </div>
        <div>
          <button type="button" class="btn btn-default">Add To Cart</button>
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
