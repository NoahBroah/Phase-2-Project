import React from "react";
import Resume from "./Resume";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="hero">
            <h1>Portfolio</h1>
            <h4>
              About Me
              <ul>
                <li>Owner/Operator of King Logistics Inc.</li>
                <li>Currently enrolled in the Flatiron Fullstack Developer Bootcamp</li>
                <li>Knowledge of JavaScript, HTML, CSS and React</li>
              </ul>
            </h4>
            <Resume />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;

<Row>
  <Col>1 of 1</Col>
</Row>;
