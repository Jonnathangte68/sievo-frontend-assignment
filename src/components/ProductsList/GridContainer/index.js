import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GridRow from "../GridRow";
import GridHeader from "../GridHeader";
import PropTypes from "prop-types";
import { DEFAULT_HEADER_COLUMNS } from "@Commons/GlobalConstants";
import ThemeContext from "@Commons/Context";
import styles from "./styles.module.css";

class GridContainer extends Component {
  static contextType = ThemeContext;
  static defaultProps = {
    displayHeader: true
  };

  generateRowId = row => {
    const randomString = Math.random()
      .toString(36)
      .substring(7);
    return `${row.project}_${row.category}_${row.date}_${randomString}`;
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
              <GridHeader
                display={this.props.displayHeader}
                columns={DEFAULT_HEADER_COLUMNS}
              />
              {context.products.map(row => (
                <GridRow
                  key={this.generateRowId(row)}
                  project={row.project}
                  description={row.description}
                  startDate={""}
                  category={row.category}
                  responsible={row.responsible}
                  savingsAmount={""}
                  currency={row.currency}
                  complexity={row.complexity}
                />
              ))}
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
