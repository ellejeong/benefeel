import React, { Component } from 'react';
import SingleProduct from 'APP/app/components/SingleProduct';
import ReviewForm from 'APP/app/components/ReviewForm'
import Review from 'APP/app/components/Review';
import { addReview } from 'APP/app/action-creators/product';
import { SELECT_PRODUCT } from 'APP/app/constants'
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store'


/*Write now author id is hardcoded! FIX WHEN DONE!!!*/

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
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
        }

        setProductReviews(){
          let filteredReviews=this.props.allReviews.filter((review)=>{
            return this.props.selectedProduct.id === review.product_id
          })
          return filteredReviews
        }

        handleInputChange(evt) {
            this.setState({quantity: evt.target.value})
        }

        handleSubmit(evt) {
            evt.preventDefault();

        }

        /*Review Form handlers*/
        handleReviewSubmit(evt) {

            evt.preventDefault();
            let title= evt.target.title.value
            let rating=  evt.target.rating.value
            let description=  evt.target.reviewText.value
            let author_id= 2
            let product_id= this.props.selectedProduct.id

            store.dispatch(addReview({
              title: title,
        			rating: rating,
        			description: description,
        			author_id: author_id,
              product_id: product_id
            }));

        }

        render(){
            let reviews= this.setProductReviews();
            return (
                <div className="container flexboxContainer">
                    <SingleProduct
                        {...this.state}
                        {...this.props}
                        handleSubmit={this.handleSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                  {this.props.selectedProduct ?
                    <div>
                      <ReviewForm
                        handleSubmit={this.handleReviewSubmit}
                      />
                      <Review
                        reviews={reviews}
                      />
                    </div>: null }

                </div>
            )
        }
    }
);
