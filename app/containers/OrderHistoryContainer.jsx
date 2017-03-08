import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import OrderHistory from 'APP/app/components/OrderHistory';


export default class OrderHistoryContainer extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
      <OrderHistory />
      </div>
    )
  }
}
