import React, {Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import AdminSidebar from '../components/AdminSidebar';

export default class AdminSidebarContainer extends Component {
  constructor() {
    super();
  }


  render() {
    return (
    <div>
    <h4>Admin Navigation</h4>
      <AdminSidebar />
    </div>
    );
  }

}