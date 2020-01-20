import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

class GridRow extends Component {
  render() {
    return (
      <Row>
        <Col key="project" className={styles.columnTextStyle}>
          {this.props.project}
        </Col>
        <Col key="description" className={styles.columnTextStyle}>
          {this.props.description}
        </Col>
        <Col key="start_date" className={styles.columnTextStyle}>
          {this.props.start_date}
        </Col>
        <Col key="category" className={styles.columnTextStyle}>
          {this.props.category}
        </Col>
        <Col key="responsible" className={styles.columnTextStyle}>
          {this.props.responsible}
        </Col>
        <Col key="savings_amount" className={styles.columnTextStyle}>
          {this.props.savings_amount}
        </Col>
        <Col key="currency" className={styles.columnTextStyle}>
          {this.props.currency}
        </Col>
        <Col key="complexity" className={styles.columnTextStyle}>
          {this.props.complexity}
        </Col>
      </Row>
    );
  }
}

export default GridRow;
