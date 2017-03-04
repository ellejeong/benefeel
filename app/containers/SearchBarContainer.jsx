import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import SearchProducts from 'APP/app/components/SearchProducts';
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
	return {
		products: state.allProducts,
		selectedProduct: state.selectedProduct
	};
};


export default connect(mapStateToProps)(SearchBarContainer);
