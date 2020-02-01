import React, { Component } from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import { checkFloat, addZeros, isDate } from "../../../common/utils";
import uuid from "react-uuid";
import styles from "./styles.module.css";

class GridCol extends Component {
  parseContent = content => {
    if (isDate(content)) {
      const parsedDate = moment(content).format("D.M.Y");
      const days = parsedDate.split(".")[0];
      const months = parsedDate.split(".")[1];
      const years = parsedDate.split(".")[2];
      return `${addZeros(days, 2)}.${addZeros(months, 2)}.${years}`;
    }
    if (checkFloat(content)) {
      return (
        Math.round((parseFloat(content) + Number.EPSILON) * 100) / 100
      ).toFixed(2);
    }
    return content;
  };

  renderTooltip = props => {
    const content = this.props.title;
    return (
      <Tooltip {...props} show={props.show.toString()}>
        {content}
      </Tooltip>
    );
  };

  renderTooltipCol = () => (
    <OverlayTrigger key={uuid()} placement="top" overlay={this.renderTooltip}>
      <Col
        key={uuid()}
        className={[
          styles.columnTextStyle,
          this.getAlignment(this.props.columnNumber)
        ]}
        xs={this.getColumnSize(this.props.columnNumber)}
        md={this.getColumnSize(this.props.columnNumber)}
      >
        {this.parseContent(this.props.title)}
      </Col>
    </OverlayTrigger>
  );

  getColumnSize = column => {
    switch (column) {
      case 0:
        return "auto";
      case 1:
        return 3;
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

  getAlignment = column => {
    switch (column) {
      case 1:
      case 7:
        return styles.leftAlignedColumn;
      default:
        return styles.centeredAlignedColumn;
    }
  };

  render() {
    if (this.props.title) {
      return this.renderTooltipCol();
    }
    return (
      <Col
        key={uuid()}
        className={styles.columnTextStyle}
        xs={this.getColumnSize(this.props.columnNumber)}
        md={this.getColumnSize(this.props.columnNumber)}
      ></Col>
    );
  }
}

GridCol.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default GridCol;
