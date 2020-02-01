import axios from "axios";

class ProductConsumerApi {
  base_path = process.env.REACT_APP_API_URL;

  fetchGetRequest(request, callback) {
    console.log("calling the real thing");
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
