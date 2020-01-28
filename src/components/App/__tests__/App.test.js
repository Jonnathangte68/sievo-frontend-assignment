import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Store from "../../../services/store";
import App from "../index";

const initialState = {
  filters: ["xxx"],
  products: ["xxx"],
  loading: true,
  setLoading: jest.fn(),
  setProducts: jest.fn(),
  setFilters: jest.fn()
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

describe("componentDidMount", () => {
  test("fetch products from the service and callback", async () => {
    const component = mount(element);
    const spy = jest.spyOn(component.instance(), "callbackApi");
    expect(spy).toHaveBeenCalled();
  });
});
