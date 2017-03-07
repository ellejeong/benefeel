import React, { Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { asyncRemoveFromCart } from 'APP/app/action-creators/cart'
import store from '../store'


export class Cart extends Component {

  render () {
    // var lineItemList = this.state.lineItemList;

    // IMAGE SOURCE:
    const defaultImg = 'https://s-media-cache-ak0.pinimg.com/236x/00/c8/78/00c878efe94e7ef87c4eec68b612de6f.jpg'
    console.log('PROPS', this.props)
    return (
      <div>
        <h1>Your Shopping Bag</h1>
        <div className="flexContainer2">
        {this.props.cart.lineItems && this.props.cart.lineItems.map(lineItem => {
            return (
            <div key={lineItem.id} className="flexContainer1 flexItem cartItem">

            <div className="flexItem">
            <Link to={`/products/${lineItem.product_id}`}>
            <img src={defaultImg} />
            </Link>
            </div>

            <div className="flexItem">
                <div className="cartItemName">
                <h6>{lineItem.name}</h6>
                </div>
                <div>
                <button onClick={this.props.handleRemove}>REMOVE X</button>
                </div>
            </div>

                <div className="cartItemPrice flexItem">
                <h6>${lineItem.price}.00</h6>
                </div>

                <div className="cartItemQuantity flexItem">
                <h6>Quantity: {lineItem.quantity}</h6>
                </div>

                <div className="cartItemTotal flexItem">
                <h6>Total: ${lineItem.itemTotal}.00</h6>
                </div>
            </div>
            )
          })}

        </div>
        <div>
          <h2>Subtotal: ${this.props.cart.subtotal}.00</h2>
          <button>Checkout</button>
        </div>
      </div>

    )

  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: (lineItem) => {
      console.log('REMOVING THIS LINEITEM', lineItem)
      dispatch(asyncRemoveFromCart(lineItem))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
