import React, { Component } from "react";
import GridContainer from "../grid-container";
import FilterContainer from "../filter-container";

class ProductGrid extends Component {
  render() {
    return (
      <>
        <FilterContainer />
        <GridContainer dataRows={this.props.products} />
      </>
    );
  }
}

export default ProductGrid;
