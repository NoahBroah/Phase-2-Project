import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/NavBar";
import ReviewList from "./Components/ReviewsList";

function App() {
  const [formData, setFormData] = useState([])
  useEffect(() => {
    fetch(" http://localhost:4000/Reviews")
      .then((resp) => resp.json())
      .then((reviews) => setFormData(reviews));
  }, []);

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
          <ReviewList formData={formData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
