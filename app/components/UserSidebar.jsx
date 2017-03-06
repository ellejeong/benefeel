import React from 'react';
import {Link} from 'react-router';

export default props => {

  return (
    <div>
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to={'/users/:id'}>Profile</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={'/users/orders/'}>Order History</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/'>Wishlist</Link>
        </h4>
      </section>
    </sidebar>
    </div>
  );
}

