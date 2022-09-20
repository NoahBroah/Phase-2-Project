import React from "react";

function Review({ review }) {
  const { name, comments, likes, image } = review;
  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <p>{comments}</p>
      <div>
        <p>Total Likes: {likes}</p>
        <button>Like!</button>
      </div>
    </div>
  );
}

export default Review;
