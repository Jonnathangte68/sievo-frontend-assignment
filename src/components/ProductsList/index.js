import React, { Component } from "react";
import GridContainer from "./GridContainer";
import { ProductsContext } from "@Commons/Context";
import ProductConsumerApi from "../../services/ProductConsumerApi";
import { FETCH_PRODUCTS_API_REQUEST } from "../../common/GlobalConstants";

class ProductGrid extends Component {
  state = {
    loading: true,
    products: []
  };

  filter = rawData => {
    return rawData;
  };

  updateLoadingState = loading => this.setState({ loading });

  updateProductsState = products => this.setState({ products });

  callbackApi = response => {
    this.updateLoadingState(false);
    const products = this.filter(response.data);
    this.setState({ products });
  };

  componentDidMount = () => {
    this.updateLoadingState(true);
    const productsApi = new ProductConsumerApi();
    productsApi.fetchGetRequest(FETCH_PRODUCTS_API_REQUEST, this.callbackApi);
  };

  render() {
    return (
      <ProductsContext.Provider
        value={{
          loading: this.state.loading,
          products: this.state.products
        }}
      >
        <GridContainer />
      </ProductsContext.Provider>
    );
  }
}

export default ProductGrid;
