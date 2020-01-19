import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GridRow from "../grid-row";
import GridHeader from "../grid-header";
import PropTypes from "prop-types";
import { DEFAULT_HEADER_COLUMNS } from "../../common/global-constants";

class GridContainer extends Component {
  defaultProps = {
    displayHeader: true
  };

  render() {
    return (
      <Container>
        <>
          <GridHeader
            display={this.props.displayHeader}
            columns={DEFAULT_HEADER_COLUMNS}
          />
          {this.props.dataRows.map(row => (
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
