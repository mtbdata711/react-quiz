import React from "react";
import { mount } from "enzyme";

import ImageGallery from "../Question6-ImageGallery";

describe("Question 6 - ImageGallery", () => {
  let deferred;

  beforeEach(() => {
    deferred = defer();
    global.fetch = jest.fn().mockReturnValue(deferred.promise);
  });

  it("makes a request", () => {
    mount(<ImageGallery />);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://auspicious-baritone.glitch.me/gorilla"
    );
  });

  it("hides the image while we wait", () => {
    const component = mount(<ImageGallery />);
    expect(component.find("img")).toHaveLength(0);
  });

  describe("when the request completes", () => {
    let component;
    const mockSrc = "http://some.image/gorilla.jpg";

    beforeEach(async () => {
      component = mount(<ImageGallery />);
      // Resolve the mock promise
      deferred.resolve({ json: () => Promise.resolve(mockSrc) });
      await tick();
      component.update();
    });

    it("renders the image", () => {
      expect(component.find("img").prop("src")).toBe(mockSrc);
    });
  });
});

const defer = () => {
  // a promise wrapper that we can resolve or reject later
  const wrapper = {};
  wrapper.promise = new Promise((resolve, reject) => {
    wrapper.resolve = resolve;
    wrapper.reject = reject;
  });
  return wrapper;
};

const tick = () => new Promise(resolve => setTimeout(resolve));
