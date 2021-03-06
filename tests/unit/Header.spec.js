import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header/Header";

describe("Spec Header", function () {
  it("mounts", () => {
    const wrapper = mount(Header);
    expect(wrapper.contains("header")).toBe(true);
  });
  it("should have a navigation menu", function () {
    const wrapper = mount(Header);
    expect(wrapper.contains("Navigation")).toBe(true);
  });
});
