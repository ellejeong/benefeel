import React from 'react';
import {Link} from 'react-router';

export default props => {

  return (
    <div>
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to={'adminprofile'}>Profile</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={'orders'}>View/Modify Orders</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='products'>View/Modify Products</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='cart'>View/Modify Carts</Link>
        </h4>
      </section>
        <section>
        <h4 className="menu-item">
          <Link to='users'>View/Modify Users</Link>
        </h4>
      </section>
    </sidebar>
    </div>
  );
}