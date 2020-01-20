import axios from "axios";

class ProductConsumerApi {
  base_path = "https://sievo-react-assignment.azurewebsites.net/";

  ProductConsumerApi(base_path) {
    this.base_path = base_path;
  }

  fetchGetRequest(request, callback) {
    const compositeRequest = `${this.base_path}${request}`;
    axios
      .get(compositeRequest)
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        if (error.response) {
          if (error.response.status !== 200) {
            callback(`error response`);
          }
        }
      });
  }
}

export default ProductConsumerApi;
