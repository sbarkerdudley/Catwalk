import React from 'react';
import { useState } from 'react';
import '../styles/style.css';

var ReviewItem = (props) => {

  const [currentHelpfulCount, setCurrentHelpfulCount] = useState(props.review.helpfulness);
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const handleHelpfulClick = () => {
    if (!alreadyClicked) {
      props.review.helpfulness++;
      setCurrentHelpfulCount(currentHelpfulCount + 1)
      setAlreadyClicked(!alreadyClicked);
    }
  };

  return (

    <div className="reviewItem">
      <div className="reviewTopSection">
        <div className="Stars" style={{"--rating": `${props.review.rating}`}}>
        </div>
        <h5>
          By {props.review.reviewer_name}, {props.review.date.slice(0, -14)}
        </h5>
      </div>
      <div className="reviewMidSection">
          <p>
            {props.review.summary}
          </p>
        <div className="reviewBody">
          {props.review.body}
        </div>
        {props.review.recommend ? (<div className="productRecommended">
          ✔ I recommend this product.
        </div>) : (<></>)}
      </div>
      <div className="reviewBottomSection">
        <div className="reviewHelpful">
          Helpful?
          <button onClick={handleHelpfulClick}> Yes </button>
          {currentHelpfulCount} | <button > Report </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;