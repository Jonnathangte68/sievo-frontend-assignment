import React, { Component } from "react";
import GridContainer from "./GridContainer";
import ThemeContext from "@Commons/Context";

class ProductGrid extends Component {
  static contextType = ThemeContext;

  render() {
    let value = this.context;
    console.log("context content: ");
    console.log(value);
    return <GridContainer dataRows={this.props.products} />;
  }
}

export default ProductGrid;
