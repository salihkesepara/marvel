import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShakeButton from "../src/components/ShakeButton.js";

configure({ adapter: new Adapter() });

const props = {
  onClick: () => {}
};

describe("<ShakeButton />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ShakeButton {...props} />);
  });

  it("is Button exists", () => {
    expect(wrapper.find("Button").length).toEqual(1);
  });

  xit("is onClick called", () => {
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, "handleOnClick");
    instance.forceUpdate();
    wrapper.find("#shake-button").simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
