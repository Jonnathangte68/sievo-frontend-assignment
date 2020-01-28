import React from "react";
import Store from "./services/store";

class Root extends React.Component {
  state = {
    filters: [],
    products: [],
    loading: true,
    setLoading: loading => this.setLoading(loading),
    setProducts: products => this.setProducts(products),
    setFilters: filters => this.setProducts(filters)
  };

  setLoading = loading => {
    this.setState({ loading });
  };

  setProducts = products => {
    this.setState({ products });
  };

  setFilters = filters => {
    this.setState({ filters });
  };

  render() {
    return (
      <Store.Provider value={this.state}>{this.props.children}</Store.Provider>
    );
  }
}

export default Root;
