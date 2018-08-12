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

  //   it('should apply the "hidden" class to the search input when a value is present', () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" :value="value"></v-select></div>',
  //       data: {
  //         value: "one",
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //
  //     expect(vm.$children[0].inputClasses.hidden).toEqual(true);
  //   });
  //
  //   it('should not apply the "hidden" class to the search input when a value is present, and the dropdown is open', done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" :value="value"></v-select></div>',
  //       data: {
  //         value: "one",
  //         options: ["one", "two", "three"],
  //         open: true
  //       }
  //     }).$mount();
  //     vm.$children[0].toggleDropdown({ target: vm.$children[0].$refs.search });
  //     Vue.nextTick(() => {
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].open).toEqual(true);
  //         expect(vm.$children[0].inputClasses.hidden).toEqual(false);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("should not reset the search input on focus lost when clearSearchOnSelect is false", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" :value="value" :clear-search-on-select="false"></v-select></div>',
  //       data: {
  //         value: "one",
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //     expect(vm.$refs.select.clearSearchOnSelect).toEqual(false);
  //
  //     vm.$children[0].open = true;
  //     vm.$refs.select.search = "t";
  //     expect(vm.$refs.select.search).toEqual("t");
  //
  //     vm.$children[0].onSearchBlur();
  //     Vue.nextTick(() => {
  //       expect(vm.$refs.select.search).toEqual("t");
  //       done();
  //     });
  //   });
});
