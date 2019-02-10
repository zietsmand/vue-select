import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Single value options", () => {
  it("should reset the search input on focus lost", () => {
    const Select = shallowMount(VueSelect);
    Select.vm.open = true;

    Select.vm.search = "t";
    expect(Select.vm.search).toEqual("t");

    Select.vm.onSearchBlur();
    expect(Select.vm.search).toEqual("");
  });

  it('should apply the "hidden" class to the search input when a value is present', () => {
    const Select = shallowMount(VueSelect, { propsData: { value: "foo" } });
    expect(Select.vm.inputClasses.hidden).toEqual(true);
  });

  it('should not apply the "hidden" class to the search input when a value is present, and the dropdown is open', () => {
    const Select = shallowMount(VueSelect, { propsData: { value: "foo" } });
    Select.vm.toggleDropdown({ target: Select.vm.$refs.search });

    expect(Select.vm.open).toEqual(true);
    expect(Select.vm.inputClasses.hidden).toEqual(false);
  });

  it("should not reset the search input on focus lost when clearSearchOnSelect is false", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { value: "foo", clearSearchOnSelect: false }
    });

    expect(Select.vm.clearSearchOnSelect).toEqual(false);

    Select.vm.open = true;
    Select.vm.search = "t";
    expect(Select.vm.search).toEqual("t");

    Select.vm.onSearchBlur();
    expect(Select.vm.search).toEqual("t");
  });
});
