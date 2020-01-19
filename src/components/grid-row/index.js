import React, { Component } from "react";

class GridRow extends Component {
  render() {
    return (
      <div>
        <span>{this.props.id}</span>
        <span sm>{this.props.title}</span>
        <span sm>{this.props.description}</span>
      </div>
    );
  }
}

export default GridRow;
