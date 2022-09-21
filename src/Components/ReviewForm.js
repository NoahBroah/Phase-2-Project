import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const initialForm = {
  name: "",
  image: "",
  comments: "",
};

function ReviewForm({ handleAddNewReview }) {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(e) {
    console.log(e.target.value);
    setFormData({ ...formData, 
      [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newReview = {
      ...formData,
      likes: 0,
    };

    fetch("http://localhost:4000/Reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((resp) => resp.json())
      .then((review) => handleAddNewReview(review));
    setFormData(initialForm);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={formData.name}
          name="name"
          placeholder="Enter First and Last Name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a URL..."
          value={formData.image}
          name="image"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Comments:</Form.Label>
        <Form.Control
          type="text"
          value={formData.comments}
          name="comments"
          placeholder="Leave your review here"
          onChange={handleChange}
          rows={3}
          as="textarea"
        />
      </Form.Group>
      <Button variant="outline-dark" type="submit">
        Submit Review
      </Button>
    </Form>
  );

  // return (
  //   <div className="container">
  //     <form onSubmit={handleSubmit}>
  //       <h3>Leave a review of my work!</h3>
  //       <input
  //         value={formData.name}
  //         type="text"
  //         name="name"
  //         placeholder="Enter your name..."
  //         className="input-text"
  //         onChange={handleChange}
  //       />
  //       <br />
  //       <input
  //         value={formData.image}
  //         type="text"
  //         name="image"
  //         placeholder="Enter a profile image URL..."
  //         className="input-text"
  //         onChange={handleChange}
  //       />
  //       <br />
  //       <input
  //         value={formData.comments}
  //         type="text"
  //         name="comments"
  //         placeholder="Enter your comments"
  //         className="input-text"
  //         onChange={handleChange}
  //       />
  //       <br />
  //       <input
  //         type="submit"
  //         name="submit"
  //         value="Create New Review"
  //         className="submit"
  //       />
  //     </form>
  //   </div>
  // );
}

export default ReviewForm;
