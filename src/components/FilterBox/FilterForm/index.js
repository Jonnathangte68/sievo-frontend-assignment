import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FilterButtonContainer from "../FilterButtonContainer";

class FilterForm extends Component {
  state = {
    descriptionSearchTerm: ""
  };

  handlerSearchBox = type => {
    if (type === "search" && this.state.descriptionSearchTerm) {
      console.log("new search term added: ", this.state.descriptionSearchTerm);
    }
  };

  handleDescriptionChange = event => {
    this.setState({
      descriptionSearchTerm: event.target.value
    });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g. Kryptonite"
            onChange={event => this.handleDescriptionChange(event)}
          />
          <Form.Text className="text-muted">
            Enter a Search term to match with descriptions on the list.
          </Form.Text>
          <FilterButtonContainer onClick={this.handlerSearchBox} />
        </Form.Group>
      </Form>
    );
  }
}

export default FilterForm;
