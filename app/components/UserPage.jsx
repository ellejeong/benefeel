import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import UserSidebar from './UserSidebar';
import UserSidebarContainer from '../containers/UserSidebarContainer';

export class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to your dashboard!</h1>
        <div className="col-xs-2">
          <UserSidebarContainer />
        </div>
        <div className='hi-dashboard'>
        Hi {this.props.user.name}! Great to see you. Now that you're signed in, just roll over the options on the left to update any of your information.
        </div>
      </div>
    );

    }

}

const mapStateToProps = state => {
  console.log('state:', state.auth);
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(UserPage);
