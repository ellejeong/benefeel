import React, {Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import UserSidebar from '../components/UserSidebar';

export default class UserSidebarContainer extends Component {
  constructor() {
    super();
  }


  render() {
    return (
    <div>
    <h4>User Navigation</h4>
      <UserSidebar />
    </div>
    );
  }

}
