import React, { Component } from "react";
import Store from "../../../services/store";
import { bubbleSort } from "../../../common/utils";
import GridRow from "../GridRow";
import { transformUtf8 } from "../../../common/utils";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import GridHeader from "../GridHeader";

class DataGrid extends Component {
  l = [];

  getFilteredResults = rows => {
    const filter = this.props.filter;
    if (filter && filter !== "") {
      return this.props.rows.filter(product =>
        transformUtf8(product.description).includes(transformUtf8(filter))
      );
    }
    return rows;
  };

  sortList = (rows, sortType) => {
    const ascSort = sortType === "ASC";
    const descSort = sortType === "DESC";
    if (ascSort) {
      console.log("asc sort ");
      console.log("l ", rows);
      console.log("sort l ", bubbleSort(rows, "ASC"));
      return bubbleSort(rows, "ASC");
    }
    if (descSort) {
      console.log("desc sort ");
      console.log("l ", rows);
      console.log("sort l ", bubbleSort(rows, "DESC"));
      return bubbleSort(rows, "DESC");
    }
    console.log("throw context products", rows);
    return rows;
  };

  render() {
    let rows = this.getFilteredResults(this.props.rows);
    const result = this.sortList(rows, this.props.sort);
    return (
      <>
        <GridHeader />
        {result.map(row => (
          <GridRow key={uuid()} columns={row} />
        ))}
      </>
    );
  }
}

DataGrid.propTypes = {
  rows: PropTypes.array.isRequired,
  filter: PropTypes.string,
  sort: PropTypes.string
};
DataGrid.contextType = Store;
export default DataGrid;
