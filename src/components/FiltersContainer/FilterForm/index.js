import React, { Component } from "react";
import Store from "../../../services/store";
import { Form } from "react-bootstrap";
import FilterButtonContainer from "../FilterButtonContainer";

class FilterForm extends Component {
  static contextType = Store;
  state = {
    descriptionSearchTerm: ""
  };

  updateDescriptionSearchTerm = descriptionSearchTerm =>
    this.setState({ descriptionSearchTerm });

  handlerSearchBox = type => {
    if (type === "search") {
      this.context.setFilter(this.state.descriptionSearchTerm);
    }
    if (type === "clear") {
      this.context.setFilter("");
      this.updateDescriptionSearchTerm("");
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
            value={this.state.descriptionSearchTerm}
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

FilterForm.contextType = Store;
export default FilterForm;
