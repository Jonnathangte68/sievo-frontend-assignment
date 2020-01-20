import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FilterForm from "../FilterForm";
import styles from "./styles.module.css";

class FilterContainer extends Component {
  render() {
    return (
      <Container>
        <div className={styles.container}>
          <h3>Filter By: </h3>
          <FilterForm />
        </div>
      </Container>
    );
  }
}

export default FilterContainer;
