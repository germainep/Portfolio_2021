import { mount } from "@vue/test-utils";
import Navigation from "../../src/components/Navigation/Navigation";

describe("Spec Navigation", function () {
  it("mounts", () => {
    const wrapper = mount(Navigation);
    expect(wrapper).toBeTruthy();
  });
});
