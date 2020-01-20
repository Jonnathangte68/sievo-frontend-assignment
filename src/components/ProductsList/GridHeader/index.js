import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

class GridHeader extends Component {
  renderHeaderRow = () => {
    return (
      <Row>
        {this.props.columns.map(col => (
          <Col key={col} className={styles.columnTextStyle}>
            {col}
          </Col>
        ))}
      </Row>
    );
  };

  render() {
    return this.renderHeaderRow();
  }
}

GridHeader.propTypes = {
  display: PropTypes.bool.isRequired,
  columns: PropTypes.array.isRequired
};

export default GridHeader;
