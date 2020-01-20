import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterContainer from "./filter-box";
import ProductsList from "./products-list";

class App extends Component {
  render() {
    return (
      <>
        <FilterContainer />
        <ProductsList /* Refactor move to Content: dataRows={this.props.products} */
        />
      </>
    );
  }
}

export default App;
