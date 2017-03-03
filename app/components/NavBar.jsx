import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBarContainer from 'APP/app/containers/SearchBarContainer';

export default class NavBar extends Component {

	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
				<div className="container-fluid">

					<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">BeneFeel</a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li><a href="#">A Category</a></li>
								</ul>
							</li>
						</ul>
							<div>
								<SearchBarContainer />
							</div>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Login/Signup</a></li>
							<li><a href="#">Cart</a></li>
							<li><a href="#">Account</a></li>
							<li><a href="#">Logout</a></li>
						</ul>
					</div>
				</div>
				</nav>
			</div>
		)
	}
}
