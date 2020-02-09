import React from "react";
import Store from "./services/store";

class Root extends React.Component {
  state = {
    filter: "",
    products: [],
    loading: true,
    sort: "NONE",
    setLoading: loading => this.setLoading(loading),
    setProducts: products => this.setProducts(products),
    setFilter: filter => this.setFilter(filter),
    setSort: sort => this.setSort(sort)
  };

  setSort = sort => {
    this.setState({ sort });
  };

  setLoading = loading => {
    this.setState({ loading });
  };

  setProducts = products => {
    this.setState({ products });
  };

  setFilter = filter => {
    this.setState({ filter });
  };

  render() {
    return (
      <Store.Provider value={this.state}>{this.props.children}</Store.Provider>
    );
  }
}

export default Root;
