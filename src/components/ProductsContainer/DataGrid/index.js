import React, { Component } from "react";
import GridRow from "../GridRow";
import uuid from "react-uuid";
import PropTypes from "prop-types";

class DataGrid extends Component {
  render() {
    console.log("rows: ", this.props.rows);
    return (
      <>
        {this.props.rows &&
          this.props.rows.map(row => <GridRow key={uuid()} columns={row} />)}
      </>
    );
  }
}

DataGrid.propTypes = {
  rows: PropTypes.array.isRequired,
  filters: PropTypes.any
};

export default DataGrid;
