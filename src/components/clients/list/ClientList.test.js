import React from "react";
import { shallow } from "enzyme";
import ClientList from "./ClientList";

describe('<ClientList />', () => {
  it("should display ClientList component", () => {
    const wrapper = shallow(<ClientList />);
    expect(wrapper.find("div.table-container")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
