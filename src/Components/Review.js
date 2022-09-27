import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



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
    <div className="card-group">
      <Card border="light" style={{ width: '15rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {comments}
        </Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
        <Button onClick={handleClick} variant="outline-danger">like!</Button>
      </Card.Body>
    </Card>
    </div>
    
  );

}

export default Review;

// return (
  //   <div className="container">
  //     <div>
  //       <h4>If you have ever worked with me please feel free to leave a review!</h4>
  //     </div>
  //     <div>
  //       <img src={image} alt="Profile Picture" />
  //       <h2>Name: {name}</h2>
  //       <p>Comment: {comments}</p>
  //       <div>
  //         <p>Total Likes: {likes}</p>
  //         <button onClick={handleClick}>Like!</button>
  //       </div>
  //     </div>
  //   </div>
  // );