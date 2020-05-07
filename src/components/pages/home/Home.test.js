import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import Header from '../../layouts/Header';
import ClientList from '../../clients/list/ClientList';

describe('<Home />', () => {
  it("should display home component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find(ClientList)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
