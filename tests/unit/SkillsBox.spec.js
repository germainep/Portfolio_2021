import { mount } from "@vue/test-utils";
import Skillsbox from "~/components/SkillsBox/SkillsBox";

describe("Spec Skillsbox", function () {
  it("mounts", () => {
    const wrapper = mount(Skillsbox);
    expect(wrapper).toBeTruthy();
  });
});
