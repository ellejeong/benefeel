import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import UserSidebarContainer from '../containers/UserSidebarContainer';

export default props => {
  
    return (
      <div>
        <h1>Order History</h1>
        <div className="col-xs-2">
          <UserSidebarContainer />
        </div>
      </div>
    );

    }