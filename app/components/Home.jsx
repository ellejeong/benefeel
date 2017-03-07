import React, { Component } from 'react';
import { Link } from 'react-router';

/*Home View*/
export default function () {

    return (

        <div id="home">
          <img src="main.jpg"/>
          <div><Link to="/products"> ENTER</Link></div>
        </div>

    );
  }
