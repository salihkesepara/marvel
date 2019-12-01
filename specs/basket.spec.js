import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Basket from "../src/components/Basket.js";

configure({ adapter: new Adapter() });

describe("<Basket />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Basket />);
  });

  it("is img exists", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });
});
