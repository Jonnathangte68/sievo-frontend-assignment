import React, { Component } from "react";
import Store from "../../../services/store";
import GridRow from "../GridRow";
import { transformUtf8 } from "../../../common/utils";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import GridHeader from "../GridHeader";
import { bubbleSort } from "../../../common/utils";

class DataGrid extends Component {
  state = {
    filter: "",
    sort: "NONE",
    rows: this.props.rows
  };

  updateRows = rows => this.setState({ rows });
  updateSort = sort => this.setState({ sort });
  updateFilter = filter => this.setState({ filter });

  filterRows = filter => {
    this.updateFilter(filter);
    if (filter && filter !== "") {
      const rows = this.context.products.filter(product =>
        transformUtf8(product.description).includes(transformUtf8(filter))
      );
      this.updateRows(rows);
    } else {
      this.updateRows(this.context.products);
    }
  };

  sortRows = sort => {
    if (sort === "NONE") {
      this.updateRows(this.context.products);
    }
    if (this.state.rows && sort === "ASC") {
      this.updateRows(bubbleSort(this.state.rows, "ASC"));
    }
    if (this.state.rows && sort === "DESC") {
      this.updateRows(bubbleSort(this.state.rows, "DESC"));
    }
    this.updateSort(sort);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      !prevState.rows.length > 0 &&
      this.context.products !== this.state.rows
    ) {
      this.updateRows(this.context.products);
    }
    if (this.context.sort !== this.state.sort) {
      this.sortRows(this.context.sort);
    }
    if (this.context.filter !== this.state.filter) {
      this.filterRows(this.context.filter);
    }
  };

  render() {
    return (
      <>
        <GridHeader />
        {this.state.rows &&
          this.state.rows.map(row => <GridRow key={uuid()} columns={row} />)}
      </>
    );
  }
}

DataGrid.propTypes = {
  rows: PropTypes.array.isRequired
};
DataGrid.contextType = Store;
export default DataGrid;
