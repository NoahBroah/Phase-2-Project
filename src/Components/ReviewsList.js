import React, { useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function ReviewList({ reviews, onClickBtn, handleAddNewReview }) {
  const [showForm, setShowForm] = useState(false);

  function handleFormClick() {
    setShowForm((showForm) => !showForm);
  }

  const reviewList = reviews.map((review) => {
    return <Review key={review.id} review={review} onClickBtn={onClickBtn} />;
  });

  return (
    <div className="container">
      {showForm ? <ReviewForm handleAddNewReview={handleAddNewReview} /> : null}
      <div>
        <button onClick={handleFormClick}>Add a new comment</button>
      </div>

      {reviewList}
    </div>
  );
}

export default ReviewList;
