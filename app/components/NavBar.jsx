import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import SearchBarContainer from 'APP/app/containers/SearchBarContainer';
import CategoriesContainer from 'APP/app/containers/CategoriesContainer';
import store from 'APP/app/store';
import { selectAllProducts, selectCategory } from 'APP/app/action-creators/product';

export class NavBar extends Component {
	constructor(props) {
		super(props);

		this.onBrandClick = this.onBrandClick.bind(this);
	}

	onBrandClick(event) {
		event.preventDefault();
		store.dispatch(selectCategory(null));
		store.dispatch(selectAllProducts(this.props.products));
		browserHistory.push('/products');
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

						<li><a href="/">Login/Signup</a></li>
						<li><Link to="/cart">Cart</Link></li>
						<li><a href="/users/profile">Account</a></li>

						<li><a href="#">Logout</a></li>
					</ul>
					</div>
				</div>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return ({ products: state.allProducts });
};

export default connect(mapStateToProps)(NavBar);
