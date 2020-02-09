import React, { Component, lazy, Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
import ProductConsumerApi from "../../services/api/ProductConsumerApi";
import { FETCH_PRODUCTS_API_REQUEST } from "../../common/globalconstants";
import Store from "../../services/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyleSheet } from "./styles";
import injectSheet from "react-jss";

const FiltersContainer = lazy(() => import("../FiltersContainer"));
const ProductsContainer = lazy(() => import("../ProductsContainer"));

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

  renderLoader = () => {
    const { classes } = this.props;
    return (
      <div className={classes.loadingContainer}>
        <h3 className={classes.loadingText}>Loading...</h3>
      </div>
    );
  };

  renderContent = () => {
    return (
      <ErrorBoundary>
        <Suspense fallback={this.renderLoader()}>
          <>
            <FiltersContainer />
            <ProductsContainer />
          </>
        </Suspense>
      </ErrorBoundary>
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
export default injectSheet(StyleSheet)(App);
