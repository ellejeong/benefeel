import React from 'react';
import store from '../store';

export default function (props) {
    console.log("review for item", props.reviews);
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
                  <h4>{review.description}</h4>
                  <p>{review.updatedAt}</p>
              </div>);
            })}
          </div>
        </div>

    );
  }
