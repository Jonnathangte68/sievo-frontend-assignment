import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Store from "../../../services/store";
import App from "../../App";
import FiltersContainer from "../";
import DataGrid from "../";

const initialState = {
  filter: "",
  products: [],
  loading: false,
  setLoading: jest.fn(),
  setProducts: jest.fn(),
  setFilter: jest.fn()
};

const initialStateLoading = {
  filter: [],
  products: [],
  loading: true,
  setLoading: jest.fn(),
  setProducts: jest.fn(),
  setFilter: jest.fn()
};

const childrenElement = <FiltersContainer />;
const parentElementLoading = (
  <Store.Provider value={initialStateLoading}>
    <App />
  </Store.Provider>
);
const parentElementLoaded = (
  <Store.Provider value={initialState}>
    <App />
  </Store.Provider>
);

test("it renders", () => {
  let wrapper = shallow(childrenElement);
  expect(toJson(wrapper)).toMatchSnapshot();
});

// describe("Inner components", () => {
//   test("should display loading while retrive data from the api", () => {
//     const component = mount(parentElementLoading);
//     expect(component.html()).toBe("<div>Loading...</div>");
//   });

//   test("should render data grid after loading finished", () => {
//     const component = mount(parentElementLoaded);
//     expect(component.find(DataGrid).length).toEqual(1);
//   });
// });
