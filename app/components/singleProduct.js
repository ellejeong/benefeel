import React, { Component } from 'react';
import store from 'redux';

export default class singleProduct extends Component {
  constructor() {
    super();

    // this.state = store.getState();
  }



  render() {
    // if (!this.state) { return null }
    console.log('state: ', this.state);
    return (
      <div>
        <h1>{}</h1>
      </div>
    );
  }
}
