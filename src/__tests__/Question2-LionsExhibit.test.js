import React from "react";
import { mount } from "enzyme";

import LionsExhibit from "../Question2-LionsExhibit";

describe("Question 2 - LionsExhibit", () => {
  it("renders an article with the class 'lions'", () => {
    const component = mount(<LionsExhibit />);
    expect(component.find("article.lions")).toHaveLength(1);
  });

  it("renders a heading with appropriate text", () => {
    const component = mount(<LionsExhibit />);
    expect(component.find(".lions h2").text()).toBe("Lions");
  });

  it("renders a paragraphs with the appropriate text", () => {
    const component = mount(<LionsExhibit />);
    expect(component.find(".lions p").text()).toBe(
      "The mane is the most recognisable feature of the species"
    );
  });
});
