import React, { Component } from "react";
import GridRow from "../GridRow";
import { transformUtf8 } from "../../../common/utils";
import uuid from "react-uuid";
import PropTypes from "prop-types";

class DataGrid extends Component {
  getFilteredResults = rows => {
    const filter = this.props.filter;
    if (filter && filter !== "") {
      return this.props.rows.filter(product =>
        transformUtf8(product.description).includes(transformUtf8(filter))
      );
    }
    return rows;
  };

  render() {
    const rows = this.getFilteredResults(this.props.rows);
    return rows.map(row => <GridRow key={uuid()} columns={row} />);
  }
}

DataGrid.propTypes = {
  rows: PropTypes.array.isRequired,
  filter: PropTypes.string
};

export default DataGrid;
