import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterContainer from "../FilterBox";
import ProductsList from "../ProductsList";

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
