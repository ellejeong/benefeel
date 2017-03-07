import React from 'react';
import store from '../store';

export default function (props) {
    let reviews=props.reviews

    return (
        <div>
          <div>
            <h2>Reviews:</h2>
          </div>
          <div className="flexContainer flexReviews">

            {reviews && reviews.map(review => {
              return (<div key={review.id} className="flexItem flexItemReview">
                  <h2>{review.title}</h2>
                  
                  <h3>{review.author.name}</h3>
                  <h3>Rating: {review.rating}</h3>
                  <p>{review.description}</p>
                  <p>{review.updatedAt}</p>
              </div>);
            })}
          </div>
        </div>

    );
  }
