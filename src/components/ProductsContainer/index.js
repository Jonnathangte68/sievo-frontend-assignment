import React, { Component } from "react";
import Store from "../../services/store";
import Container from "react-bootstrap/Container";
import DataGrid from "./DataGrid";
import "bootstrap/dist/css/bootstrap.min.css";

class ProductsContainer extends Component {
  render() {
    return (
      <Store.Consumer>
        {context => (
          <Container fluid={true}>
            <DataGrid rows={context.products} filter={context.filter} />
          </Container>
        )}
      </Store.Consumer>
    );
  }
}

export default ProductsContainer;
