import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tree from "../src/components/Tree.js";

configure({ adapter: new Adapter() });

const props = {
  apples: [
    { key: 1, className: "apple1" },
    { key: 2, className: "apple2" },
    { key: 3, className: "apple3" },
    { key: 4, className: "apple4" },
    { key: 5, className: "apple5" },
    { key: 6, className: "apple6" },
    { key: 7, className: "apple7" },
    { key: 8, className: "apple8" },
    { key: 9, className: "apple9" },
    { key: 10, className: "apple10" },
    { key: 11, className: "apple11" },
    { key: 12, className: "apple12" }
  ]
};

describe("<Tree />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tree {...props} />);
  });

  it("is img exists", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("is Apple exists", () => {
    expect(wrapper.find("Apple").length).toEqual(12);
  });
});
