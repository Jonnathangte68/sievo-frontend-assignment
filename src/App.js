import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductGrid from "./components/product-grid";

class App extends Component {
  productsData = [
    {
      id: "id",
      title: "title",
      description: "blabla"
    }
  ];

  render() {
    return <ProductGrid products={this.productsData} />;
  }
}

export default App;
