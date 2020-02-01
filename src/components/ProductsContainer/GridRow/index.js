import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import GridCol from "../GridCol";
import uuid from "react-uuid";
// import styles from "./styles.module.css";

class GridRow extends Component {
  getCellText = column => (column && column !== "NULL" ? String(column) : "");

  renderCells() {
    let counter = 0;
    let results = [];
    const values = Object.values(this.props.columns);
    for (const column of values) {
      results.push(
        <GridCol
          key={uuid()}
          columnNumber={counter}
          title={this.getCellText(column)}
        ></GridCol>
      );
      counter++;
    }
    return results;
  }

  // render() {
  //   return <div className={styles.flexGrid}>{this.renderCells()}</div>;
  // }
  render() {
    return <Row>{this.renderCells()}</Row>;
  }
}

GridRow.propTypes = {
  columns: PropTypes.object.isRequired
};

export default GridRow;
