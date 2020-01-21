import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import ThemeContext from "@Commons/Context";
import styles from "./styles.module.css";
import DataGrid from "../DataGrid";

class GridContainer extends Component {
  static contextType = ThemeContext;
  static defaultProps = {
    displayHeader: true
  };

  render() {
    let context = this.context;
    if (context.loading) {
      return (
        <div>
          <p>Loading results...</p>
        </div>
      );
    }

    return (
      <ThemeContext.Consumer>
        {context => (
          <Container className={styles.boxContainer}>
            <>
              <DataGrid
                columns={this.columns}
                showHeader={true}
                rows={context.products}
              />
            </>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}

GridContainer.propTypes = {
  displayHeader: PropTypes.bool.isRequired
};

export default GridContainer;
