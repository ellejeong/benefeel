import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SearchProducts from 'APP/app/components/SearchProducts';
import Products from 'APP/app/components/Products';
import singleProduct from 'APP/app/components/singleProduct';
import { selectProduct } from 'APP/app/action-creators/product';
import store from '../store';

export class SearchBarContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			searchedProduct: {}
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({searchTerm: event.target.value});
	}

	handleSearchSubmit(event) {
		event.preventDefault();

		const searchTerm = this.state.searchTerm;

		const searchedProduct = this.props.products.filter((product) => {
			return product.title.match(searchTerm);
		});

		console.log('searchedProduct: ', searchedProduct);
		// this.setState({ searchedProduct });
		store.dispatch(selectProduct(searchedProduct));

	}

	render() {
		// const searchTerm = this.state.searchTerm;
		// const searchedProducts = this.props.products.filter((product) => {
		// 	return product.title.match(searchTerm);
		// });

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

export const mapStateToProps = (state) => {
	console.log('state: ', state);

	return {
		products: state.allProducts
	};
};



export default connect(mapStateToProps)(SearchBarContainer);
