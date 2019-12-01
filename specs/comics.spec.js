import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Comics from "../src/components/comics";
import data from './data/comics';

configure({ adapter: new Adapter() });

describe("when api call was successful", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Comics comics={data.success} />);
  });

  it("is there a ListGroupItem", () => {
    expect(wrapper.find("ListGroupItem").length).toEqual(1);
  });

  it("is ListGroupItem's props are correct", () => {
    expect(wrapper.find("ListGroupItem").props().children).toEqual(data.success.data[0].title);
    expect(wrapper.find("ListGroupItem").props().variant).toEqual(null);
    expect(wrapper.find("ListGroupItem").props().active).toEqual(false);
    expect(wrapper.find("ListGroupItem").props().disabled).toEqual(false);
    expect(wrapper.find("ListGroupItem").props().as).toEqual('li');
  })
})

describe("when api call was successful wiht empty data", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Comics comics={{ ...data.success, data: [] }} />);
  });

  it("isn't there an error message", () => {
    expect(wrapper.find("p").length).toEqual(0);
  });

  it("isn't there a spinner class", () => {
    expect(wrapper.find(".spinner").length).toEqual(0);
  })

  it("isn't there a ListGroupItem", () => {
    expect(wrapper.find("ListGroupItem").length).toEqual(0);
  });
})

describe("when api call was failure", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Comics comics={data.failure} />);
  });

  it("is there an error message", () => {
    expect(wrapper.find("p").length).toEqual(1);
  });
})

describe("when api call was pending", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Comics comics={data.panding} />);
  });

  it("is there a spinner", () => {
    expect(wrapper.find("Spinner").length).toEqual(1);
  })

  it("is there a spinner class", () => {
    expect(wrapper.find(".spinner").length).toEqual(1);
  })

  it("is Snipper's props are correct", () => {
    expect(wrapper.find(".spinner").props().children.props.animation).toEqual('grow');
    expect(wrapper.find(".spinner").props().children.props.role).toEqual('status');
  })
})

describe("when api not called yet", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Comics comics={data.empty} />);
  });

  it("isn't there an error message", () => {
    expect(wrapper.find("p").length).toEqual(0);
  });

  it("isn't there a spinner class", () => {
    expect(wrapper.find(".spinner").length).toEqual(0);
  })

  it("isn't there a ListGroupItem", () => {
    expect(wrapper.find("ListGroupItem").length).toEqual(0);
  });
})