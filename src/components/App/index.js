import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterContainer from "../FilterBox";
import ProductsList from "../ProductsList";
import ThemeContext from "@Commons/Context";

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{ primaryColor: "green" }}>
        <>
          <FilterContainer />
          <ProductsList /* Refactor move to Content: dataRows={this.props.products} */
          />
        </>
      </ThemeContext.Provider>
    );
  }
}

export default App;
