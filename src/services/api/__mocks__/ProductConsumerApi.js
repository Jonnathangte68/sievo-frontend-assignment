class ProductConsumerApi {
  base_path = process.env.REACT_APP_API_URL;

  constructor(base_path = this.base_path) {
    this.base_path = base_path;
  }

  fetchGetRequest(request, callback) {
    console.log("mock product consumer");
    callback([1, 2, 3]);
    // var p = Promise.resolve([1, 2, 3]);
    // p.then(function(v) {
    //   callback(v);
    // });
  }
}

export default ProductConsumerApi;
