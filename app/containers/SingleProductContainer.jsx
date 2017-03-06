import React, { Component } from 'react';
import SingleProduct from 'APP/app/components/SingleProduct';
import Review from 'APP/app/components/Review';
import { SELECT_PRODUCT } from 'APP/app/constants'
import { connect } from 'react-redux';
import axios from 'axios';


const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct,
    allReviews: state.allReviews
  };
};

export default connect(mapStateToProps)(
        class extends Component {
        constructor() {
            super();

            this.state = {
                quantity: 1,
                reviews: {}
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.loadReviews=this.loadReviews.bind(this);
        }

        loadReviews(){

        }

        handleInputChange(evt) {
            console.log(this.state.quantity)
            this.setState({quantity: evt.target.value})
        }

        handleSubmit(evt) {
            evt.preventDefault();
            console.log('submit to cart quantity:', this.state.quantity, 'ID:', this.props.selectedProduct.id)
        }

        render(){
            return (
                <div className="container flexbox-container">
                    <SingleProduct
                        {...this.state}
                        {...this.props}
                        handleSubmit={this.handleSubmit}
                        handleInputChange={this.handleInputChange}
                    />

                  <Review
                    reviews={this.props.allReviews}
                  />

                </div>
            )
        }
    }
);
