import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import UserSidebarContainer from '../containers/UserSidebarContainer';


let dummy=[{id:1, status:"processing", updatedAt: "2/15/19"},
{id:2, status:"processing", updatedAt: "2/15/19"},
{id:3, status:"processing", updatedAt: "2/15/19"}]

export default props => {
    let orders=dummy;
    console.log("order history::", orders);
    return (
      <div>
        <h1>Order History</h1>
        <div className="col-xs-2">
          <UserSidebarContainer />
        </div>
        <div className="flexContainer flexOrders">
          {!orders ||orders.length <1 ? <p>No previous orders.</p> : <h3>({orders.length}) Orders</h3>}
          {orders && orders.map(order =>{
            return(
              <div key={order.id} className="flexItemOrder">
                <h3>Order ID: {order.id}</h3>
                <p>Date: {order.updatedAt}</p>
                <p>Status: {order.status}</p>
                <p>Total: {order.subTotal}</p>
                <p><Link to="/">View Order</Link></p>
              </div>
            )}
          )}

        </div>
      </div>
    );

    }
