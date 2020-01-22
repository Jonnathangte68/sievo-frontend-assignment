import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { ProductsContext, FiltersContext } from "@Commons/Context";
import styles from "./styles.module.css";
import DataGrid from "../DataGrid";

class GridContainer extends Component {
  static contextType = ProductsContext;
  static filterContextType = FiltersContext;
  static defaultProps = {
    displayHeader: true
  };

  render() {
    console.log("filter context: ", this.filterContextType);
    let context = this.context;
    if (context.loading) {
      return (
        <div className={styles.loadingContainer}>
          <p>Loading results...</p>
        </div>
      );
    }

    return (
      <ProductsContext.Consumer>
        {context => (
          <Container className={styles.boxContainer}>
            <DataGrid
              columns={this.columns}
              showHeader={true}
              rows={context.products}
            />
          </Container>
        )}
      </ProductsContext.Consumer>
    );
  }
}

GridContainer.propTypes = {
  displayHeader: PropTypes.bool.isRequired
};

export default GridContainer;
