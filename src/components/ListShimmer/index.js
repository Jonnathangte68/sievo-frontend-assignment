import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import { StyleSheet } from "./styles";
import injectSheet from "react-jss";

class ListShimmer extends Component {
  renderShimmers = () => {
    const { classes } = this.props;
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
      return (
        <Shimmer key={`unique_row_${item}`}>
          <div className={classes.row} />
        </Shimmer>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return <div className={classes.container}>{this.renderShimmers()}</div>;
  }
}

export default injectSheet(StyleSheet)(ListShimmer);
