import React from "react";
import Review from "./Review";

function ReviewList({ formData }) {
    const reviewList = formData.map(review => {
        return (
            <Review 
            key={review.id}
            review={review}
            />
        )
    })



  return (
    <div>
      {reviewList}
    </div>
  );
}

export default ReviewList;
