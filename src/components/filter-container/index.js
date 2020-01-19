import React, { Component } from "react";
import { Container, Button, Form } from "react-bootstrap";
import styles from "./styles.module.css";

class FilterContainer extends Component {
  render() {
    return (
      <Container>
        <>
          <Form className={styles.container}>
            <h3>Filter By: </h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description: </Form.Label>
              <Form.Control type="text" placeholder="E.g. Kryptonite" />
              <Form.Text className="text-muted">
                Enter a Search term to match with descriptions on the list.
              </Form.Text>
              <br />
              <Button variant="success">Search</Button>
              <Button variant="link">Clear Filters</Button>
            </Form.Group>
          </Form>
        </>
      </Container>
    );
  }
}

export default FilterContainer;
