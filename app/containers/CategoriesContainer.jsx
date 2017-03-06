import React, { Component } from 'react';
import { connect } from 'react-redux';

import Categories from '../components/Categories';
import { selectCategory } from '../action-creators/product';
import store from '../store';

export class CategoriesContainer extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<Categories />
		);
	}
}

const mapStateToProps = state => {
	return { productsInCategory: state.productsInCategory };
};

export default connect(mapStateToProps)(CategoriesContainer);
