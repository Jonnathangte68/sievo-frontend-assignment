import React, { Component } from "react";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

class FilterButtonContainer extends Component {
  render() {
    return (
      <div className={styles.alignRight}>
        <Button variant="success">Search</Button>
        <Button variant="link">Clear Filters</Button>
      </div>
    );
  }
}

export default FilterButtonContainer;
