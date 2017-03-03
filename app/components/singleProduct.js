import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';

export class singleProduct extends Component {
  // SH: this is what i was trying to get to work so that handlesubmit will take the quantity and hold onto that
	constructor(props) {
		super(props);

    this.state = { quantity: 1 };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
    console.log('submit to cart quantity:', this.state.quantity)
	}

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
        <form onSubmit={this.handleSubmit}>
        <select className="custom-select"
                onChange={evt => {
                  this.setState({quantity: evt.target.value})
        }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
        <button type="submit" className="btn btn-default">Add To Cart</button>
        </form>
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
