import React, { useState } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

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
        <Button
          variant="outline-danger"
          type="button"
          onClick={handleFormClick}
        >
          Add a new comment
        </Button>
      </div>
      <div className="card-group">
        {reviewList}
      </div>
    </div>
  );
}

export default ReviewList;
