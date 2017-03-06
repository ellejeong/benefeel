import React from 'react';
import {Link} from 'react-router';
import Cart from './Cart';
import UserProfile from './UserProfile'
import OrderHistoryContainer from '../containers/OrderHistoryContainer'
import { selectPastOrder, receivePastOrder } from 'APP/app/action-creators/auUser';

export default props => {

  return (
    <div>
    <sidebar>
      <section>
        <h4 className="menu-item">
        {console.log(props)}
          <Link to={'userprofile'}>Profile</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={'orderhistory'}>Order History</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/'>Wishlist</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={'cart'}>Current Cart</Link>
        </h4>
      </section>
    </sidebar>
    </div>
  );
}

