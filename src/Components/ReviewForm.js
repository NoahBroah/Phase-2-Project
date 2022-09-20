import React, { useState } from "react";

function ReviewForm({ handleAddNewReview }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    comments: "",
  });

  function handleSubmit(e) {
    e.preventDefault()

    const newReview = {
        ...formData,
        likes: 0,
      }
  
      fetch("http://localhost:4000/Reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview),
      })
        .then((resp) => resp.json())
        .then((review) => handleAddNewReview(review));
        setFormData(formData)
  }

  function handleChange(e) {
    console.log(e.target.value)
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter your name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a profile image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          value={formData.comments}
          type="text"
          name="comments"
          placeholder="Enter your comments"
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Review"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ReviewForm;
