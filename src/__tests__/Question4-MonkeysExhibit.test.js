import React from "react";
import { mount } from "enzyme";

import MonkeysExhibit from "../Question4-MonkeysExhibit";

describe("Question 4 - MonkeysExhibit", () => {
  it("continues to render", () => {
    const component = mount(
      <MonkeysExhibit
        latinName="Primates"
        commonSpecies={[
          "Macaque",
          "Squirrel Monkey",
          "Marmoset",
          "Howler Monkey"
        ]}
      />
    );
    const section = component.find(".monkeys");
    expect(section.find("h2").text()).toBe("Latin name: Primates");
    expect(section.find("li").map(el => el.text())).toEqual([
      "Macaque",
      "Squirrel Monkey",
      "Marmoset",
      "Howler Monkey"
    ]);
  });

  it("is a class component", () => {
    // see https://overreacted.io/how-does-react-tell-a-class-from-a-function/
    expect(MonkeysExhibit.prototype instanceof React.Component).toBe(true);
  });
});
