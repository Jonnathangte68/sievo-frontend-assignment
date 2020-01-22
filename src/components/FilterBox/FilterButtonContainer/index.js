import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

class FilterButtonContainer extends Component {
  handleClick = type => {
    if (typeof this.props.onClick === "function") {
      this.props.onClick(type);
    }
  };

  render() {
    return (
      <div className={styles.alignRight}>
        <Button variant="success" onClick={() => this.handleClick("search")}>
          Search
        </Button>
        <Button variant="link" onClick={() => this.handleClick("clear")}>
          Clear Filters
        </Button>
      </div>
    );
  }
}

FilterButtonContainer.propTypes = {
  onClick: PropTypes.func
};

export default FilterButtonContainer;
