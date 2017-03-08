import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AdminSidebarContainer from '../containers/AdminSidebarContainer';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to your dashboard!</h1>
        <div className="col-xs-2">
          <AdminSidebarContainer />
        </div>

        <div className='hi-dashboard'>
        Hello! Great to see you. <p></p> Now that you're signed in, just roll over the options on the left to update any of your information.
        </div>

      </div>
    );

    }

}