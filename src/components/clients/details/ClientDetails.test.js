import React from "react";
import { shallow } from "enzyme";
import ClientDetails from "./ClientDetails";

const details = "Details";
const address = "Address";

describe('<ClientDetails />', () => {
  it("should display ClientDetails component", () => {
    const wrapper = shallow(<ClientDetails />);
    expect(wrapper.find("fieldset")).toBeTruthy();
    expect(wrapper.find("fieldset>legend")).toBeTruthy();
    expect(wrapper.find("fieldset>p")).toBeTruthy();
    expect(wrapper.find(details)).toBeTruthy();
    expect(wrapper.find(address)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
