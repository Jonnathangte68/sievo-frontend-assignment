import React, { Component } from "react";
import Store from "../../../services/store";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Sorter from "../Sorter";
import { DEFAULT_HEADER_COLUMNS } from "@Commons/GlobalConstants";
import styles from "./styles.module.css";

class GridHeader extends Component {
  updateContextSortType = sortType => this.context.setSort(sortType);

  handleClick = sortType => {
    const sortingOrder = sortType[0];
    this.updateContextSortType(sortingOrder);
  };

  renderHeaderRow = columns => (
    <Row>
      {columns.map((col, index) => (
        <Col
          key={col.key}
          className={[
            styles.columnTextStyle,
            (index === 0 || index === 1) && styles.sortLeft
          ]}
          xs={this.getColumnSize(index)}
          md={this.getColumnSize(index)}
        >
          {index === 0 ? <Sorter onClick={this.handleClick} /> : col.name}
        </Col>
      ))}
    </Row>
  );

  getColumnSize = column => {
    switch (column) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 6:
      case 7:
      case 2:
      case 5:
        return 1;
      case 4:
      case 3:
        return 2;
      default:
        return 1;
    }
  };

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
GridHeader.contextType = Store;
export default GridHeader;
