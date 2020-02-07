import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Store from "../../../services/store";
import App from "../index";

jest.mock("../../../services/api/ProductConsumerApi");

const initialState = {
  filter: "xxx",
  products: ["xxx"],
  loading: true,
  setLoading: jest.fn(),
  setProducts: jest.fn(),
  setFilter: jest.fn()
};

const element = (
  <Store.Provider value={initialState}>
    <App />
  </Store.Provider>
);

test("it renders", () => {
  let wrapper = shallow(element);
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test("fetch products from the service and callback", async () => {
//   const component = mount(element);
//   const spy = jest.spyOn(component.instance(), "callbackApi");
//   await Promise.resolve();
//   expect(spy).toHaveBeenCalled();
// });
