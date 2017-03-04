import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { browserHistory } from 'react-router';

import SearchProducts from 'APP/app/components/SearchProducts';
import Products from 'APP/app/components/Products';
import SingleProduct from 'APP/app/components/SingleProduct';
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

		const searchedProduct = this.props.products.filter((product) => {
			return product.title.match(this.state.searchTerm);
		});

		console.log('searchedProduct: ', searchedProduct);
		store.dispatch(selectProduct(searchedProduct));

		browserHistory.push(`/products/${searchedProduct[0].id}`);
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

export const mapStateToProps = (state) => {
	console.log('state: ', state);

	return {
		products: state.allProducts,
		selectedProduct: state.selectedProduct
	};
};


export default connect(mapStateToProps)(SearchBarContainer);
