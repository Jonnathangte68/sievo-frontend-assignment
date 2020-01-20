import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GridRow from "../GridRow";
import GridHeader from "../GridHeader";
import PropTypes from "prop-types";
import { DEFAULT_HEADER_COLUMNS } from "@Commons/global-constants";

class GridContainer extends Component {
  defaultProps = {
    displayHeader: true
  };

  render() {
    const productsData = [
      {
        id: "id",
        title: "title",
        description: "blabla"
      }
    ];

    return (
      <Container>
        <>
          <GridHeader
            display={this.props.displayHeader}
            columns={DEFAULT_HEADER_COLUMNS}
          />
          {productsData.map(row => (
            <GridRow
              id={row.id}
              title={row.title}
              description={row.description}
            />
          ))}
        </>
      </Container>
    );
  }
}

GridContainer.propTypes = {
  displayHeader: PropTypes.bool,
  dataRows: PropTypes.array.isRequired
};

export default GridContainer;
