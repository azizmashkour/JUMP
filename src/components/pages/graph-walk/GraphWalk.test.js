import React from "react";
import { shallow } from "enzyme";
import GraphWalk from "./GraphWalk";
import Header from '../../layouts/Header';

describe('<GraphWalk />', () => {
  it("should display GraphWalk component", () => {
    const wrapper = shallow(<GraphWalk />);
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
