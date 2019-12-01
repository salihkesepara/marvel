import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Apple from "../src/components/Apple.js";

configure({ adapter: new Adapter() });

describe("<Apple />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Apple />);
  });

  it("is img exists", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });
});
