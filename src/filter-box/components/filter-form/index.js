import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FilterButtonContainer from "../filter-button-container";

class FilterForm extends Component {
  render() {
    return (
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Description: </Form.Label>
        <Form.Control type="text" placeholder="E.g. Kryptonite" />
        <Form.Text className="text-muted">
          Enter a Search term to match with descriptions on the list.
        </Form.Text>
        <FilterButtonContainer />
      </Form.Group>
    );
  }
}

export default FilterForm;
