import React, { Component } from "react";
import GridContainer from "./components/grid-container";

class ProductGrid extends Component {
  render() {
    return <GridContainer dataRows={this.props.products} />;
  }
}

export default ProductGrid;
