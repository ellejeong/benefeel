import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import SearchBarContainer from 'APP/app/containers/SearchBarContainer';
import CategoriesContainer from 'APP/app/containers/CategoriesContainer';
import store from 'APP/app/store';
import { selectAllProducts, selectCategory } from 'APP/app/action-creators/product';
import {logout} from '../reducers/auth';

export class NavBar extends Component {
	constructor(props) {
		super(props);

		this.onBrandClick = this.onBrandClick.bind(this);
		this.onLogout = this.onLogout.bind(this);
	}

	onBrandClick(event) {
		event.preventDefault();
		this.props.selectCategory(null);
		browserHistory.push('/products');
	}

	onLogout(event){
		event.preventDefault();
		this.props.logout();
		browserHistory.push('/');
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
					<button onClick={this.onBrandClick} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link onClick={this.onBrandClick} className="navbar-brand" to={'/products'}>BeneFeel</Link>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<CategoriesContainer />
					<div>
						<SearchBarContainer />
					</div>
					<ul className="nav navbar-nav navbar-right">
						{(this.props.user === '' || this.props.user === null) ? <li><Link to="/login">Login/Signup</Link></li>
						: <div>Hi {this.props.user.name}!</div>}
						<li><Link to="/cart">Cart</Link></li>
						<li><Link to="/dashboard">Account</Link></li>
						{(this.props.user !== '' && this.props.user !== null) ? <li><Link onClick={this.onLogout}  to="/products">Logout</Link></li>
						: <div></div>}
					</ul>
					</div>
				</div>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return ({ products: state.allProducts, user: state.auth });
};

const mapDispatchToProps = {selectCategory, logout};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
