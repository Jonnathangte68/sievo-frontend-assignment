import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import uuid from "react-uuid";
import styles from "./styles.module.css";

class GridCol extends Component {
  isDate = dateString => Date.parse(dateString) && dateString.length > 1;

  parseContent = content => {
    if (this.isDate(content)) {
      return moment(content).format("D.M.Y");
    }
    return content;
  };

  renderTooltip = props => {
    const content = this.parseContent(this.props.title);
    return (
      <Tooltip {...props} show={props.show.toString()}>
        {content}
      </Tooltip>
    );
  };

  renderTooltipCol = () => (
    <OverlayTrigger key={uuid()} placement="top" overlay={this.renderTooltip}>
      <div
        className={this.getColumnSizeClass(this.props.columnNumber)}
        key={uuid()}
      >
        <p className={styles.colContent}>
          {this.parseContent(this.props.title)}
        </p>
      </div>
    </OverlayTrigger>
  );

  getColumnSizeClass = column => {
    switch (column) {
      case 0:
        return styles.tinyCenterCol;
      case 1:
        return styles.doubleCol;
      case 7:
      case 5:
      case 4:
      case 3:
      case 2:
        return styles.regularCenterCol;
      case 6:
        return styles.mediumCenterCol;
      default:
        return styles.regularCol;
    }
  };

  render() {
    if (this.props.title) {
      return this.renderTooltipCol();
    }
    return <div className={this.getColumnSizeClass(this.props.columnNumber)} />;
  }
}

GridCol.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default GridCol;
