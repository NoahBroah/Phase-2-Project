import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/NavBar";
import ReviewsList from "./Components/ReviewsList";

function App() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/Reviews")
      .then((resp) => resp.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  
  function handleUpdateLikes(updatedLike) {
    const updatedLikes = reviews.map((review) => {
      return review.id === updatedLike.id ? updatedLike : review;
    })
    setReviews(updatedLikes)
  }
// ReviewList
  function handleAddNewReview(review) {
    setReviews([...reviews, review])
  }

  return (
    <div className="hero">
      <Navbar />
      <Switch>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reviewslist">
          <ReviewsList onClickBtn={handleUpdateLikes} handleAddNewReview={handleAddNewReview} reviews={reviews} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
