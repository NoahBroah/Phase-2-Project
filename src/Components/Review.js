import React from "react";

function Review({ review, onClickBtn }) {
  const { name, comments, likes, image, id } = review;

  function handleClick() {
    fetch(`http://localhost:4000/Reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((resp) => resp.json())
      .then((updatedLike) => {
        onClickBtn(updatedLike);
      });
  }

  return (
    <div className="container">
      <div>
        <h4>If you have ever worked with me please feel free to leave a review!</h4>
      </div>
      <div>
        <img src={image} alt="Profile Picture" />
        <h2>Name: {name}</h2>
        <p>Comment: {comments}</p>
        <div>
          <p>Total Likes: {likes}</p>
          <button onClick={handleClick}>Like!</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
