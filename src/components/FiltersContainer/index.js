import React, { Component } from "react";
import Store from "../../services/store";
import { Container } from "react-bootstrap";
import FilterForm from "./FilterForm";
import styles from "./styles.module.css";

class FiltersContainer extends Component {
  static contextType = Store;

  state = {
    filterTerm: ""
  };

  updateFilterTerm = filterTerm => this.setState({ filterTerm });

  componentDidUpdate = () => {
    if (this.state.filterTerm !== this.context.filter)
      this.updateFilterTerm(this.context.filter);
  };

  render() {
    return (
      <Container>
        <div className={styles.container}>
          <h3>
            Filter By:{" "}
            <span className={styles.filterTerm}>{this.state.filterTerm}</span>
          </h3>
          <FilterForm />
        </div>
      </Container>
    );
  }
}

export default FiltersContainer;
