import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { DEFAULT_HEADER_COLUMNS } from "@Commons/GlobalConstants";
import styles from "./styles.module.css";

class GridHeader extends Component {
  renderHeaderRow = columns => (
    <Row>
      {columns.map(col => (
        <Col key={col.key} className={styles.columnTextStyle}>
          {col.name}
        </Col>
      ))}
    </Row>
  );

  render() {
    const columns = this.props.columns
      ? this.props.columns
      : DEFAULT_HEADER_COLUMNS;
    return this.renderHeaderRow(columns);
  }
}

GridHeader.propTypes = {
  columns: PropTypes.array
};

export default GridHeader;
