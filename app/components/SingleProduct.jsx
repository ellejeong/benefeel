import React from 'react';
import store from '../store';
import SearchBarContainer from '../containers/SearchBarContainer'

export default function (props) {

    if(!props.selectedProduct) return <div><h3>Sorry! We don't have that product in our store!</h3></div>;
    return (
        <div>
          <div>
            <h1>{props.selectedProduct.title}</h1>
          </div>
          <div>
            <h2>Product Description:</h2>
            <p>{props.selectedProduct.description}</p>
            <p>${props.selectedProduct.price}.00</p>
          </div>
          <div>
            <h5>Quantity:</h5>
            <form onSubmit={props.handleSubmit}>
              <select className="custom-select"
                      onChange={props.handleInputChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <button type="submit" className="btn btn-default">Add To Cart</button>
            </form>
          </div>
        </div>

    );
  }
