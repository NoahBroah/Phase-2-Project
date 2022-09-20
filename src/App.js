import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/NavBar";
import ReviewsList from "./Components/ReviewsList";

function App() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(" http://localhost:4000/Reviews")
      .then((resp) => resp.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  // ReviewList

  function handleAddNewReview() {

  }

  return (
    <div className="hero">
      <Navbar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reviewslist">
          <ReviewsList handleAddNewReview={handleAddNewReview} reviews={reviews} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
