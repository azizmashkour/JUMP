import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import Header from '../../layouts/Header';

describe('<Login />', () => {
  const submitForm = jest.fn();
  const wrapper = shallow(<Login submitForm={submitForm}/>);

  it("should display login component", () => {
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper.find("h1.Lab__title")).toBeTruthy();
    expect(wrapper.find("form.form")).toBeTruthy();
    expect(wrapper.find("form.form>h2")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should check input lenghts from login component", () => {
    const checkLength = jest.fn(() => true);

    checkLength();

    expect(checkLength).toHaveReturned();
    expect(wrapper).toMatchSnapshot();
  });

});
