import React, { Component } from "react";
import ProductConsumerApi from "../../services/api/ProductConsumerApi";
import { FETCH_PRODUCTS_API_REQUEST } from "../../common/GlobalConstants";
import FiltersContainer from "../FiltersContainer";
import ProductsContainer from "../ProductsContainer";
import Store from "../../services/store";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  static contextType = Store;

  updateLoadingState = loading => this.context.setLoading(loading);

  updateProductsState = products => this.context.setProducts(products);

  callbackApi = response => {
    this.updateLoadingState(false);
    this.updateProductsState(response.data);
  };

  componentDidMount = () => {
    const productsApi = new ProductConsumerApi();
    productsApi.fetchGetRequest(FETCH_PRODUCTS_API_REQUEST, this.callbackApi);
  };

  renderContent = loading => {
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <FiltersContainer />
        <ProductsContainer />
      </>
    );
  };

  render() {
    return (
      <Store.Consumer>
        {({ loading, products }) => this.renderContent(loading, products)}
      </Store.Consumer>
    );
  }
}

App.contextType = Store;
export default App;
