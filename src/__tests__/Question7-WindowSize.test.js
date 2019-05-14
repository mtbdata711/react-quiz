import React from "react";
import { mount } from "enzyme";

import WindowSize from "../Question7-WindowSize";

describe("Question 7 - WindowSize", () => {
  beforeEach(() => {
    window.removeEventListener = jest.fn();
  });

  it("removes the event handler on unmount", () => {
    const listener = jest.fn();

    let component = mount(<WindowSize />);
    component.instance().handleWindowResize = listener;

    component.unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith("resize", listener);
  });
});
