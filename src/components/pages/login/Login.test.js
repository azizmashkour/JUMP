import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import Header from '../../layouts/Header';

describe("Login", () => {
  const mockSubmit = jest.fn();
  const wrapper = shallow(<Login submit={mockSubmit} />);

  it("should display Header component", () => {
    expect(wrapper.find(Header)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    const inputs = [
      { name: 'username', value: 'azizmashkour', id: 'username' },
      { name: 'password', value: 'Test#123', id: 'password' },
    ];

    const event = {
      preventDefault() {},
      target: { value: "the value" }
    };

    inputs.forEach(({ name, value }) => {
      it(`calls handleChange for ${name}`, () => {
        // console.log('namenamename', name, `#${name}`);
        // const input = wrapper.find(`#${name}`);
        // console.log('DEBUGGING::input finding word', input.debug());
        // console.log('input finding word LENGHTS', input.length);

        // const input = wrapper.find({ name }).first();
        // expect(input.exists()).toEqual(true)
        //
        // input.simulate('change', { target: { value } });
        //
        // console.log(input.instance());
        //
        // expect(handleChange).toBeCalled();
      });
    });

    // wrapper.instance().handleChange(event);
    //
    // expect(wrapper.state()).toEqual(expected);
  })

})
