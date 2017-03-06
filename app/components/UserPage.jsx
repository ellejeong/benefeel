import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import UserSidebar from './UserSidebar';


export class UserPage extends Component {
  render() {
    return (

      <div>
        <h1>Welcome to your dashboard!</h1>
        <div>
        <UserSidebar />
        </div>
      </div>


    );

    }

}
