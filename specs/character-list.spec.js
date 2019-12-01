import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterList from "../src/components/character-list";
import data from './data/character-list';

configure({ adapter: new Adapter() });

describe("when api call was successful", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CharacterList
      characters={data.success}
      onItemClick={() => { }}
      onFetchData={() => { }} />)
  });

  it("is there an InfiniteScroll", () => {
    expect(wrapper.find("InfiniteScroll").length).toEqual(1);
  });

  it("is InfiniteScroll's props are correct", () => {
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.key).toEqual(null);
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.ref).toEqual(null);
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.props.image).toEqual(data.success.data[0].image);
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.props.title).toEqual(data.success.data[0].name);
  })
})

describe("when api call was successful wiht empty data", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CharacterList
      characters={{ ...data.success, data: [] }}
      onItemClick={() => { }}
      onFetchData={() => { }} />)
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

describe("when api call was pending wiht full data", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CharacterList
      characters={{ ...data.pending, data: data.success.data }}
      onItemClick={() => { }}
      onFetchData={() => { }} />)
  });

  it("isn't there an error message", () => {
    expect(wrapper.find("p").length).toEqual(0);
  });

  it("is there an InfiniteScroll", () => {
    expect(wrapper.find("InfiniteScroll").length).toEqual(1);
  });

  it("is InfiniteScroll's props are correct", () => {
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.key).toEqual(null);
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.ref).toEqual(null);
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.props.image).toEqual(data.success.data[0].image);
    expect(wrapper.find("InfiniteScroll").props().children[0].props.children.props.title).toEqual(data.success.data[0].name);
  })
})

describe("when api call was failure", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CharacterList
      characters={data.failure}
      onItemClick={() => { }}
      onFetchData={() => { }} />)
  });

  it("is there an error message", () => {
    expect(wrapper.find("p").length).toEqual(1);
  });
})

describe("when api call was pending", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CharacterList
      characters={data.pending}
      onItemClick={() => { }}
      onFetchData={() => { }} />)
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
    wrapper = shallow(<CharacterList
      characters={data.pending}
      onItemClick={() => { }}
      onFetchData={() => { }} />)
  });

  it("isn't there an error message", () => {
    expect(wrapper.find("p").length).toEqual(0);
  });

  it("is there a spinner class", () => {
    expect(wrapper.find(".spinner").length).toEqual(1);
  })

  it("isn't there a ListGroupItem", () => {
    expect(wrapper.find("ListGroupItem").length).toEqual(0);
  });
})