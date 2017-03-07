import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export class Products extends Component {
  render() {
    let products;

    if (this.props.productsInCategory) {
      this.props.productsInCategory.length ? products  = this.props.productsInCategory : products = this.props.products;
    } else {
      products = this.props.products;
    }

    return (

      <div>
        <h1>Welcome to Benefeel!</h1>
        <div className="flexContainer">

          {products && products.map(product => {
            return (<div key={product.id} className="flexItem">
              <Link to={`/products/${product.id}`}>
                <img src={product.imageURL} />
                <h2>{product.title}</h2>
                <h3>${product.price}.00</h3>
              </Link>
            </div>);

          })}
        </div>
      </div>


    );

    }

}

export const mapStateToProps = state => {
  return {
    products: state.allProducts,
    productsInCategory: state.productsInCategory
  };
};

export default connect(mapStateToProps)(Products);
