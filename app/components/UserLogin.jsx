import React from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import {login} from '../reducers/auth';
//import {User} from '../redux/users';
import store from '../store';

/* -----------------    COMPONENT     ------------------ */

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
	//   console.log(this.props);
    const { message } = 'Login'// this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>username</label>
              <input
                name="username"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
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
    // const { message, setUser} = this.props;
    event.preventDefault();
	console.log(event);
    //console.log(`${message} isn't implemented yet`);
    // console.log(this.props)
	this.props.login(event.target.username.value, event.target.password.value)
  }
}

/* -----------------    CONTAINER     ------------------ */

export default connect (
  state => ({}),
  {login},
) (UserLogin)
