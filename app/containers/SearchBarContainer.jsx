import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SearchProducts from 'APP/app/components/SearchProducts';
import {Products} from 'APP/app/components/Products';

export class SearchBarContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: '' };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	handleInputChange(event) {
		console.log(event.target.value);
		this.setState({searchTerm: event.target.value});
	}

	handleSearchSubmit(event) {
		event.preventDefault();
		console.log(this.state.searchTerm);
		const searchTerm = this.state.searchTerm;

	}

	render() {
		return (
			<div>
				<SearchProducts
					handleInputChange={this.handleInputChange}
					handleSearchSubmit={this.handleSearchSubmit}
					searchTerm={this.state.searchTerm}
				/>
			</div>
		);
	}
}

export const mapStateToProps = state => {
	console.log('state: ', state);
	// return { const products = state.productList }
};

// export const mapDispatchToProps = dispatch => {
// 	return {

// 	}
// }

export default connect(mapStateToProps)(SearchProducts);
