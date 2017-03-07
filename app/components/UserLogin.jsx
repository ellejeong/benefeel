import React from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import {login, whoami} from '../reducers/auth';
//import {User} from '../redux/users';
import store from '../store';
import Login from './Login';
import WhoAmI from './WhoAmI';

/* -----------------    COMPONENT     ------------------ */

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
    const message = 'Login';
    return (
      <div className="signin-container">
        <div className="buffer local">
          {(this.props.user === "" || this.props.user === null) ? <WhoAmI /> : <Login />}
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
		<div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/facebook"
              className="btn btn-social btn-facebook">
              <i className="fa fa-facebook" />
              <span>{message} with Facebook</span>
            </a>
          </p>
        </div>
		<div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/github"
              className="btn btn-social btn-github">
              <i className="fa fa-github" />
              <span>{message} with GitHub</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    event.preventDefault();
	this.props.login(event.target.username.value, event.target.password.value)
  }
}

/* -----------------    CONTAINER     ------------------ */

export default connect (
  mapStateToProps,
  {login, whoami},
) (UserLogin)

const mapStateToProps = state => {
	return {
		user: state.auth
	}
}
