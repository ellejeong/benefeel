import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export class Products extends Component {
  constructor() {
    super();
    // this.state = { productList: [] };
  }


  // componentDidMount () {
  //   axios.get('/api/products')
  //   .then(res => {
  //     return res.data;
  //   })
  //   .then(products => this.setState({
  //     productList: products
  //   }))
  // }


  render() {
    console.log('PROPS: ', this.props);

      // var productList = this.state.productList;

  // IMAGE SOURCE:
    const defaultImg = 'https://s-media-cache-ak0.pinimg.com/236x/00/c8/78/00c878efe94e7ef87c4eec68b612de6f.jpg'

    return (

      <div>
        <h1>All Products!</h1>
        <div className="flexContainer">
          {this.props.products && this.props.products.map(product => {
            return (<div key={product.id} className="flexItem">
              <Link to="/Jokes">
                <img src={defaultImg} />
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
              </Link>
            </div>);
          })}
        </div>
      </div>

    );

    }
}

export const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    products: state.allProducts
  };
};

export default connect(mapStateToProps)(Products);
