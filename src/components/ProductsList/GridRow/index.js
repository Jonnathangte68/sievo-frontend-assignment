import React, { Component } from "react";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import GridCol from "../GridCol";

class GridRow extends Component {
  getCellText = column => (column && column !== "NULL" ? String(column) : "");

  renderCells() {
    let results = [];
    const values = Object.values(this.props.columns);
    for (const column of values) {
      results.push(
        <GridCol key={uuid()} columnTitle={this.getCellText(column)} />
      );
    }
    return results;
  }

  render() {
    return <Row>{this.renderCells()}</Row>;
  }
}

GridRow.propTypes = {
  columns: PropTypes.object.isRequired
};

export default GridRow;
