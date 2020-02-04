import React from "react";
import { Button } from "react-bootstrap";
import Icon from "../../Icon";
import PropTypes from "prop-types";

const sortTypes = [{ 0: "NONE" }, { 1: "ASC" }, { 2: "DESC" }];

class Sorter extends React.PureComponent {
  state = {
    sort: sortTypes[0],
    count: 0
  };

  updateSort = sort => this.setState({ sort });

  updateCount = count => this.setState({ count });

  handleClick = () => {
    if (this.state.count % 3 === 0) {
      this.updateSort(sortTypes[1]);
      this.updateCount(2);
      return this.props.onClick(Object.values(sortTypes[1]));
    }
    if (this.state.count % 2 === 0) {
      this.updateSort(sortTypes[2]);
      this.updateCount(1);
      return this.props.onClick(Object.values(sortTypes[2]));
    }
    this.updateSort(sortTypes[0]);
    this.updateCount(3);
    return this.props.onClick(Object.values(sortTypes[0]));
  };

  renderSortItem = id => {
    if (id[0] === "0") {
      return "ArrowLeft";
    }
    if (id[0] === "1") {
      return "SortNumericDownAlt";
    }
    return "SortNumericUpAlt";
  };

  render() {
    const selectedSort = Object.keys(this.state.sort);
    return (
      <Button
        onClick={this.handleClick}
        style={{
          borderRadius: "50%",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "4px",
          paddingBottom: "4px"
        }}
      >
        <Icon icon={this.renderSortItem(selectedSort)} size="sm" />
      </Button>
    );
  }
}

Sorter.propTypes = {
  onClick: PropTypes.any
};
export default Sorter;
