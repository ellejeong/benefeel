import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';


export default class Cart extends Component {
constructor() {
  super();
  this.state = { lineItemList: [] };
  this.orderid = 1;
}


componentDidMount () {
  axios.get(`/api/orders/order/${this.orderid}`)
  .then(res => {
      console.log('RES DATA', res.data);
    return res.data;
  })
  .then(lineItems => {
      console.log('LINEITEMLIST', this.state.lineItem);
    this.setState({
        lineItemList: lineItems
    })

  }) 
}


  render () {
    var lineItemList = this.state.lineItemList;

    // IMAGE SOURCE:
    const defaultImg = 'https://s-media-cache-ak0.pinimg.com/236x/00/c8/78/00c878efe94e7ef87c4eec68b612de6f.jpg'

    return (
      <div>
        <h1>Shopping Bag</h1>


        <div className="flexContainer2">
        {lineItemList.map(lineItem => {
            return (<div key={lineItem.id} className="flexContainer1 flexItem cartItem">
            
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
                <button>REMOVE X</button>
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



            </div>)
          })}

        </div>

      </div>

    )

  }
}
