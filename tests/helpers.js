import { shallowMount } from "@vue/test-utils";
import VueSelect from "../src/components/Select";

/**
 * Trigger a submit event on the search
 * input with a provided search text.
 *
 * @param Wrapper {Wrapper<Vue>}
 * @param searchText
 */
export const searchSubmit = (Wrapper, searchText = false) => {
  if (searchText) {
    Wrapper.vm.search = searchText;
  }
  Wrapper.find({ ref: "search" }).trigger("keydown", {
    keyCode: 13
  });
};

/**
 * Create a new VueSelect instance with
 * a provided set of props.
 * @param propsData
 * @returns {Wrapper<Vue>}
 */
export const selectWithProps = (propsData = {}) => {
  return shallowMount(VueSelect, { propsData });
};
