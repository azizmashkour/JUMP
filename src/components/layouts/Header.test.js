import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe('<Header />', () => {
  const props = {
    i18n: {
      defaultNS: '',
      changeLanguage: jest.fn(),
    },
    t: jest.fn(),
  };

  it("should display app header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.header-container")).toBeTruthy();
    expect(wrapper.find("div.header-container>select.App-Select")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
