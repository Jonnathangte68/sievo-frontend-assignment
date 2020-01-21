import React, { Component } from "react";
import GridRow from "../GridRow";
import GridHeader from "../GridHeader";
import uuid from "react-uuid";
import PropTypes from "prop-types";

class DataGrid extends Component {
  render() {
    return (
      <>
        {!!this.props.showHeader && <GridHeader />}
        {this.props.rows.map(row => (
          <GridRow key={uuid()} columns={row} />
        ))}
      </>
    );
  }
}

DataGrid.propTypes = {
  columns: PropTypes.array,
  showHeader: PropTypes.bool,
  rows: PropTypes.array.isRequired
};

export default DataGrid;
