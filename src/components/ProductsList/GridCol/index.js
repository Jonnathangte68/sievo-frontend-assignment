import React, { Component } from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import moment from "moment";
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
    const content = this.parseContent(this.props.columnTitle);
    return (
      <Tooltip {...props} show={props.show.toString()}>
        {content}
      </Tooltip>
    );
  };

  renderTooltipCol = () => (
    <OverlayTrigger key={uuid()} placement="top" overlay={this.renderTooltip}>
      <Col key={uuid()} className={styles.columnTextStyle}>
        {this.parseContent(this.props.columnTitle)}
      </Col>
    </OverlayTrigger>
  );

  render() {
    if (this.props.columnTitle) {
      return this.renderTooltipCol();
    }
    return <Col key={uuid()} className={styles.columnTextStyle}></Col>;
  }
}

GridCol.propTypes = {
  columnTitle: PropTypes.string
};

export default GridCol;
