import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Item from "../src/components/item";
import props from './data/item';

configure({ adapter: new Adapter() });

describe("<Item />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Item {...props} />);
  });

  it("is img exists", () => {
    expect(wrapper.find("Image").length).toEqual(1);
  });

  it("is item id exists", () => {
    expect(wrapper.find("#item").length).toEqual(1);
  });

  it("is image class exists", () => {
    expect(wrapper.find(".image").length).toEqual(1);
  });
});
