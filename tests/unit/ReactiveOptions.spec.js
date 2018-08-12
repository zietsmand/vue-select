import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Reset on options change", () => {
  it("should not reset the selected value by default when the options property changes", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { value: "one", options: ["one"] }
    });
    Select.vm.mutableOptions = ["four", "five", "six"];
    expect(Select.vm.mutableValue).toEqual("one");
  });

  it("should reset the selected value when the options property changes", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { resetOnOptionsChange: true, value: "one", options: ["one"] }
    });
    Select.vm.mutableOptions = ["four", "five", "six"];
    expect(Select.vm.mutableValue).toEqual(null);
  });
});
