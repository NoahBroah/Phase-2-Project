import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    fetch("https://morning-brook-09441.herokuapp.com/Reviews", {
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
          required
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
        <Form.Label>Feedback:</Form.Label>
        <Form.Control
          type="text"
          value={formData.comments}
          name="comments"
          placeholder="Leave your review here"
          onChange={handleChange}
          rows={4}
          as="textarea"
          required
        />
      </Form.Group>
      <Button variant="outline-dark" type="submit">
        Submit Review
      </Button>
    </Form>
  );

}

export default ReviewForm;
