import React from "react";
import { mount } from "enzyme";

import TigersExhibit from "../Question3-TigersExhibit";

describe("Question 3 - TigersExhibit", () => {
  it("renders the population count", () => {
    const component = mount(
      <TigersExhibit
        population={3000}
        habitats={["forests", "swamps", "savannah"]}
      />
    );
    expect(component.find(".tigers").text()).toContain(
      "There are 3000 tigers in the world"
    );
  });

  it("renders the habitats", () => {
    const component = mount(
      <TigersExhibit
        population={3000}
        habitats={["forests", "swamps", "savannah"]}
      />
    );

    const listItems = component.find("li");
    expect(listItems).toHaveLength(3);
    expect(listItems.map(el => el.text())).toEqual([
      "forests",
      "swamps",
      "savannah"
    ]);
  });
});
