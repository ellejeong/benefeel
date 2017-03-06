import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import store from '../store';
import { connect } from 'react-redux';
import UserSidebar from '../components/UserSidebar';

export class UserSidebarContainer extends Component {
  constructor(props) {
    super(props);
  }


  render(props) {
    return (
      <UserSidebar />
    );
  }

}
