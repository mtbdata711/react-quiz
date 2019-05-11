import React from "react";
import { mount } from "enzyme";

import AnimalSpotter from "../Question5-AnimalSpotter";

describe("Question 5 - AnimalSpotter", () => {
  it("shows an initial count", () => {
    const component = mount(<AnimalSpotter />);
    expect(component.find(".animal-spotter p").text()).toBe(
      "Number of animals spotted: 0"
    );
  });

  it("increments the count when button clicked", () => {
    const component = mount(<AnimalSpotter />);

    component.find(".animal-spotter button").simulate("click");
    component.update();

    expect(component.find(".animal-spotter p").text()).toBe(
      "Number of animals spotted: 1"
    );
  });
});
