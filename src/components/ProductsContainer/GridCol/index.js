import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class GridCol extends Component {
  getClassStyle = className => {
    switch (className) {
      case "large":
        return styles.doubleCol;
      case "small":
        return styles.tinyCol;
      default:
        return styles.regularCol;
    }
  };

  render() {
    return (
      <div
        className={[styles.col, this.getClassStyle(this.props.size)]}
        key={this.props.key}
      >
        {this.props.title}
      </div>
    );
  }
}

GridCol.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default GridCol;
