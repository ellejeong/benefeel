import React, { Component } from 'react';
import store from '../store';

export default class singleProduct extends Component {
  constructor() {
    super();

    this.state = store.getState();
  }



  render() {
    // if (!this.state) { return null }
    // console.log('state: ', this.state);
    return (
      <div>
        <h1>Single Product{}</h1>
      </div>
    );
  }
}
