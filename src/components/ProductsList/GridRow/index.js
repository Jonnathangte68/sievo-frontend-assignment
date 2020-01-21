import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styles from "./styles.module.css";

class GridRow extends Component {
  getCellText = column => !!column && column !== "NULL" && column;

  renderTooltip(props) {
    return <Tooltip {...props}>Simple tooltip</Tooltip>;
  }

  renderCells() {
    let results = [];
    const values = Object.values(this.props.columns);
    for (const column of values) {
      const tooltip = this.renderTooltip();
      results.push(
        <OverlayTrigger key={uuid()} placement="top" overlay={tooltip}>
          <Col key={uuid()} className={styles.columnTextStyle}>
            {this.getCellText(column)}
          </Col>
        </OverlayTrigger>
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
