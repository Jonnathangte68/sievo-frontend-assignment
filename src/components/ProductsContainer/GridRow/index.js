import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import GridCol from "../GridCol";
import styles from "./styles.module.css";

class GridRow extends Component {
  getCellText = column => (column && column !== "NULL" ? String(column) : "");

  getSize = key => {
    if (key === 0) {
      return "small";
    }
    if (key === 1) {
      return "large";
    }
    return "regular";
  };

  renderCells() {
    let counter = 0;
    let results = [];
    const values = Object.values(this.props.columns);
    for (const column of values) {
      results.push(
        <GridCol
          className={styles.col}
          key={uuid()}
          size={this.getSize(counter)}
          title={this.getCellText(column)}
        ></GridCol>
      );
      counter++;
    }
    return results;
  }

  render() {
    return <div className={styles.flexGrid}>{this.renderCells()}</div>;
  }
}

GridRow.propTypes = {
  columns: PropTypes.object.isRequired
};

export default GridRow;
